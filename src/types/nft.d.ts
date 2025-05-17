import type { PublicKey } from '@solana/web3.js';

export interface MintResult {
  txHash: string;
  nftAddress: string;
  metadataUri: string;
}

export interface ScientificArticleNFT {
  title: string;
  content: string;
  author: PublicKey;
  timestamp: string;
}