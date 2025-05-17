import { Connection, PublicKey, Transaction, VersionedTransaction } from '@solana/web3.js';
import { WalletAdapter } from '@solana/wallet-adapter-base';

// Corrected Wallet Adapter extension
declare module '@solana/wallet-adapter-base' {
  interface WalletAdapter {
    publicKey: PublicKey | null;
    connecting: boolean;
    connected: boolean;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    sendTransaction(
      tx: Transaction | VersionedTransaction,
      connection: Connection
    ): Promise<string>;
    signTransaction<T extends Transaction | VersionedTransaction>(
      tx: T
    ): Promise<T>;
    signAllTransactions<T extends Transaction | VersionedTransaction>(
      txs: T[]
    ): Promise<T[]>;
    on(event: 'connect' | 'disconnect' | 'error', fn: () => void): void;
    off(event: 'connect' | 'disconnect' | 'error', fn: () => void): void;
  }
}

// Corrected WalletService interface
export interface WalletServiceType {
  connection: Connection;
  publicKey: PublicKey | null;
  isConnected: boolean;
  initialize(adapter: WalletAdapter): void;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  signTransaction<T extends Transaction | VersionedTransaction>(tx: T): Promise<T>;
  mintArticleNFT(metadata: {
    title: string;
    content: string;
    author?: string;
  }): Promise<{ txHash: string; nftAddress: string }>;
}