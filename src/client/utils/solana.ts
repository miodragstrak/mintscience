import { Connection, Keypair, clusterApiUrl, Transaction, SystemProgram, PublicKey } from '@solana/web3.js';

// Remove any web3 self-references
export const connection = new Connection(clusterApiUrl(NETWORK));

export interface MintResult {
  txHash: string;
  nftAddress: string;
}

export async function mintArticle(
  title: string,
  content: string,
  wallet: Keypair // Use Keypair directly, not web3.Keypair
): Promise<MintResult> {
  const metadata = { title, content };
  
  const tx = new Transaction().add(
    SystemProgram.createAccount({
      fromPubkey: wallet.publicKey,
      newAccountPubkey: Keypair.generate().publicKey,
      lamports: await connection.getMinimumBalanceForRentExemption(1000),
      space: 1000,
      programId: new PublicKey(PROGRAM_ID)
    })
  );

  const txHash = await connection.sendTransaction(tx, [wallet]);
  return { txHash, nftAddress: Keypair.generate().publicKey.toString() };
}