import { Connection, PublicKey, Transaction, VersionedTransaction } from '@solana/web3.js';
import { WalletAdapter } from '@solana/wallet-adapter-base';
import { NftService } from '@client/api/nft';
import { WalletServiceType } from '@types/wallet'; // Fixed import

export class WalletService implements WalletServiceType {
  private static instance: WalletService;
  public connection: Connection;
  public publicKey: PublicKey | null = null;
  public isConnected = false;
  private _adapter: WalletAdapter | null = null;

  private constructor() {
    this.connection = new Connection(clusterApiUrl('devnet'));
  }

  static getInstance(): WalletService {
    if (!WalletService.instance) {
      WalletService.instance = new WalletService();
    }
    return WalletService.instance;
  }

  initialize(adapter: WalletAdapter): void {
    this._adapter = adapter;
    this._setupListeners();
  }

  private _setupListeners(): void {
    this._adapter?.on('connect', (publicKey: PublicKey) => {
      this.publicKey = publicKey;
      this.isConnected = true;
    });

    this._adapter?.on('disconnect', () => {
      this.publicKey = null;
      this.isConnected = false;
    });
  }

  async connect(): Promise<void> {
    if (!this._adapter) throw new Error('Wallet not initialized');
    await this._adapter.connect();
  }

  async disconnect(): Promise<void> {
    if (!this._adapter) throw new Error('Wallet not initialized');
    await this._adapter.disconnect();
  }

  async signTransaction<T extends Transaction | VersionedTransaction>(
    tx: T
  ): Promise<T> {
    if (!this._adapter) throw new Error('Wallet not initialized');
    if (!this.isConnected) throw new Error('Wallet not connected');
    return this._adapter.signTransaction(tx);
  }

  async mintArticleNFT(metadata: {
    title: string;
    content: string;
    author?: string;
  }) {
    if (!this.isConnected || !this.publicKey) {
      throw new Error('Wallet not connected');
    }
    return NftService.mintScientificArticle(
      metadata.title,
      metadata.content,
      metadata.author || this.publicKey.toString()
    );
  }
}

function clusterApiUrl(network: string): string {
  return `https://api.${network}.solana.com`;
}

export const walletService = WalletService.getInstance();