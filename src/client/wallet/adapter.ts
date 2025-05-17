// src/client/wallet/adapter.ts
import { 
  PhantomWalletAdapter,
  SolflareWalletAdapter 
} from '@solana/wallet-adapter-wallets';

export const getWalletAdapters = () => [
  new PhantomWalletAdapter(),
  new SolflareWalletAdapter()
];