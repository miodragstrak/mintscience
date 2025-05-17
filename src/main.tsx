// src/main.tsx
import { WalletService } from './client/wallet/service';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

const walletService = WalletService.getInstance();

// Initialize with preferred wallet adapter
walletService.initialize(new PhantomWalletAdapter());