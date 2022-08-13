const sendToWallets = [
    "0x1", // Duplicate to send multiple NFTs to one wallets.
    "0x2",
    "0x3",
    "0x4",  
];
const collectionContractAddr = "0x1234567890";

async function main() {
  const nft = await hre.ethers.getContractAt("GoDalekNFT", collectionContractAddr);

  const signer0 = await ethers.provider.getSigner(0);
  const nonce = await signer0.getTransactionCount();
  for(let i = 0; i < sendToWallets.length; i++) {
    const tokenURI = "https://gateway.ipfs.io/ipfs/Qmcz7eFQV3rJKhdAcNAmuMU1WFd3ncZbGkmJNAn5qQap5i";
    await nft.awardItem(sendToWallets[i], tokenURI,  {
      nonce: nonce + i
    });
  }
  console.log("Minting is complete!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
