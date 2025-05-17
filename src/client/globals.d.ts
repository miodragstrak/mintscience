import * as web3 from '@solana/web3.js';
import { Keypair } from '@solana/web3.js';

declare global {
  const web3: typeof web3;
}