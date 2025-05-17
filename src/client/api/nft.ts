import { Transaction, SystemProgram, PublicKey, Keypair } from '@solana/web3.js';
import { WalletService } from '../wallet/service';
import { PROGRAM_ID } from '@/config';

const walletService = WalletService.getInstance();

export class NftService {
  static async mintScientificArticle(
    title: string,
    content: string,
    author?: string
  ): Promise<{
    txHash: string;
    nftAddress: string;
  }> {
    // 1. Validate connection
    if (!walletService.isConnected || !walletService.publicKey) {
      throw new Error('Wallet not connected');
    }

    // 2. Create safe PublicKey from author
    const authorPublicKey = new PublicKey(
      author || walletService.publicKey.toString()
    );

    // 3. Prepare transaction
    const nftAccount = Keypair.generate();
    const metadata = { title, content, author: authorPublicKey.toString() };
    const space = JSON.stringify(metadata).length;

    const tx = new Transaction().add(
      SystemProgram.createAccount({
        fromPubkey: walletService.publicKey,
        newAccountPubkey: nftAccount.publicKey,
        lamports: await walletService.connection.getMinimumBalanceForRentExemption(space),
        space,
        programId: new PublicKey(PROGRAM_ID),
      })
    );

    // 4. Sign and send (now with proper typing)
    const signedTx = await walletService.signTransaction(tx);
    const txHash = await walletService.connection.sendRawTransaction(
      signedTx.serialize()
    );

    return {
      txHash,
      nftAddress: nftAccount.publicKey.toString(),
    };
  }
}