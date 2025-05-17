// src/client/wallet/context.ts
import { createContext, useContext } from 'react';
import { WalletService } from './service';

const walletService = WalletService.getInstance();

export const WalletContext = createContext(walletService);
export const useWallet = () => useContext(WalletContext);