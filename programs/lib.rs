use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    program_error::ProgramError,
    pubkey::Pubkey,
};

entrypoint!(process_instruction);

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    let accounts_iter = &mut accounts.iter();
    
        let nft_account = next_account_info(accounts_iter)?;
    if nft_account.owner != program_id {
        return Err(ProgramError::IllegalOwner);
    }
    
        let mut data = nft_account.try_borrow_mut_data()?;
    data.copy_from_slice(instruction_data);
    
    msg!("Article NFT data stored successfully");
    Ok(())
}