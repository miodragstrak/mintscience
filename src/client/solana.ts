import {
  Keypair,
  Connection,
  clusterApiUrl,
  Transaction,
  SystemProgram,
  PublicKey
} from '@solana/web3.js';
import { PROGRAM_ID, NETWORK } from '../config';

export const solana = {
  connection: new Connection(clusterApiUrl(NETWORK)),

  async mintArticle(
    title: string,
    content: string,
    wallet: Keypair
  ) {
    const metadata = { title, content };
    const tx = new Transaction().add(
      SystemProgram.createAccount({
        fromPubkey: wallet.publicKey,
        newAccountPubkey: Keypair.generate().publicKey,
        lamports: await this.connection.getMinimumBalanceForRentExemption(1000),
        space: 1000,
        programId: new PublicKey(PROGRAM_ID)
      })
    );

    const txHash = await this.connection.sendTransaction(tx, [wallet]);
    return { txHash };
  }
};