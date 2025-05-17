# Scientific Article NFT Platform  

**Dear Validators,**  

Thank you for taking the time to review this project. I want to sincerely acknowledge that **I was unable to complete all functionalities by the deadline** despite my best efforts. Below is an honest assessment of what works, what’s missing, and how you can test the existing components to minimize your evaluation time.  

---

## 🚧 Current State  
### ✅ **Completed**  
1. **Solana Program (Rust)**  
   - Basic NFT minting functionality deployed to Devnet.  
   - Program ID: `[YOUR_PROGRAM_ID]`  

2. **Frontend (React + TypeScript)**  
   - Wallet connection (Phantom/Backpack).  
   - Article upload form UI.  

3. **Services**  
   - Wallet service with transaction signing.  
   - NFT service scaffolding.  

### ❌ **Incomplete**  
1. **Critical Missing Features**  
   - NFT metadata storage (IPFS/Arweave integration not implemented).  
   - Transaction confirmation and error handling.  
   - Proper NFT display in user profiles.  

2. **Known Bugs**  
   - Intermittent wallet disconnections.  
   - Unfinished UI states (loading/error handling).  

---

## 🙏 **My Apologies**  
I deeply regret not delivering a fully functional project. I underestimated the complexity of:  
- Solana’s transaction lifecycle.  
- Wallet-adapter integrations.  
- Time required for thorough testing.  

**To avoid wasting your time**, I’ve documented exactly what you can test below.  

---

## ⚡ **How to Test (Limited Scope)**  
1. **Wallet Connection**  
   - Click "Connect Wallet" (supports Phantom/Backpack).  
   - Expected: Wallet public key displays.  

2. **Mint Mock Article**  
   - Fill the title/content fields and click "Mint".  
   - Expected: Transaction initiates (but may fail silently).  

3. **Review Code**  
   - Key files:  
     - `programs/lib.rs` (Solana program logic).  
     - `src/client/wallet/service.ts` (Wallet core).  
     - `src/components/MintButton.tsx` (UI flow).  

---

## 🔮 **Next Steps (If I Had More Time)**  
1. Integrate Metaplex NFT standard.  
2. Add IPFS upload for article content.  
3. Implement proper error toasts and transaction confirmation.  

---

## 💌 **Final Note**  
While this submission is incomplete, I’ve learned invaluable lessons about:  
- Solana’s program lifecycle.  
- The importance of prototyping complex features early.  
- Realistic time estimation.  

I appreciate your understanding and welcome any feedback to improve.  

**Thank you for your time.**  
— Miodrag