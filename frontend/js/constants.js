const contractAddress = "x8F8fdDe49064fd1Ade7F38a76b61BFcCF6A1f80d"; // Replace with your own contract address
const chain = 'rinkeby'; // rinkeby, polygon, or ethereum

const welcome_h1 = "Welcome to the pack!!";
const welcome_h2 = "Connect to MetaMask to look into the den";
const welcome_p = 'We make our own path here at Lucky 7s Official. If you hold a L7 wolf then you are part of the pack. We look out for each other and thrive with each other!';
const h1_presale_coming_soon = "NFT Drop Coming Soon!!";
const h1_presale_mint = "Pre-Sale Minting Open!!";
const h1_public_mint = "Public Minting Open!!";
const h2_presale_coming_soon = "Pre-Sale Minting Countdown";
const h2_presale_mint = "Public Minting Countdown";
const p_presale_coming_soon = "We are working hard to launch the NFT Collection. Stay tuned for updates!";
const p_presale_mint_not_whitelisted = "You are not whitelisted for the pre-sale.. 😢";
const p_presale_mint_whitelisted = "You're on the whitelist for the pre-sale! 🎉";
const p_presale_mint_already_minted = "You've already claimed your whitelist mint. Thank you! 🎉";
const p_public_mint = "No whitelist needed. Join the pack now!";
const button_presale_coming_soon = "Get on the Whitelist";
const button_presale_mint_whitelisted = "Mint Your L7 wolf";
const button_presale_mint_not_whitelisted = "Get on the Whitelist";
const button_presale_already_minted = "Join The Pack";
const button_public_mint = "Mint Your L7 wolf";
const mint_failed = "Minting failed. Be strong, try again.";

{
    "response": "OK",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "caller",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "tokenURI",
            "type": "string"
          }
        ],
        "name": "mintToCaller",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ]
  }