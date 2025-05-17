import { mintArticle } from './solana';
import './style.css'; // Optional CSS
import { Keypair } from '@solana/web3.js';

document.getElementById('mint-btn')?.addEventListener('click', async () => {
  const title = (document.getElementById('title') as HTMLInputElement).value;
  const content = (document.getElementById('content') as HTMLTextAreaElement).value;
  
  // In a real app, you'd use window.solana instead of mockWallet
  const mockWallet = Keypair.generate(); 
  await mintArticle(title, content, mockWallet);
});