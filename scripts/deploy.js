async function main() {
  const GoDalekNFT = await hre.ethers.getContractFactory("GoDalekNFT");
  const nft = await GoDalekNFT.deploy();

  await nft.deployed();

  console.log("NFT deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
