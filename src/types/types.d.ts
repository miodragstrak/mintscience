import type { WalletAdapter } from '@solana/wallet-adapter-base';
import type { Connection, Transaction, VersionedTransaction, PublicKey } from '@solana/web3.js';

declare module '@solana/wallet-adapter-wallets' {
  interface Wallet {
    adapter: {
      publicKey?: { toString(): string };
      sendTransaction?: (
        tx: Transaction | VersionedTransaction, 
        connection: Connection
      ) => Promise<string>;
      signTransaction?: <T extends Transaction | VersionedTransaction>(
        tx: T
      ) => Promise<T>;
    };
  }
}

export interface WalletServiceType {
  connection: Connection;
  publicKey: PublicKey | null;
  isConnected: boolean;
  initialize(wallet: Wallet): void;
  signTransaction<T extends Transaction | VersionedTransaction>(tx: T): Promise<T>;
}