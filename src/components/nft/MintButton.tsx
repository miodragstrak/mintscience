import { useState } from 'react';
import { WalletService } from '../../client/wallet/service';

export function MintButton() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('');

  const walletService = WalletService.getInstance();

  const handleMint = async () => {
    try {
      setStatus('Preparing transaction...');
      
      const result = await walletService.mintArticleNFT({
        title,
        content
      });

      setStatus(`
        ✅ Minted successfully!
        TX: ${result.txHash}
        NFT: ${result.nftAddress}
      `);
    } catch (error) {
      setStatus(`❌ Error: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  return (
    <div className="mint-form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Research title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Paste your scientific content..."
      />
      <button onClick={handleMint}>
        Mint as NFT
      </button>
      {status && <div className="status">{status}</div>}
    </div>
  );
}