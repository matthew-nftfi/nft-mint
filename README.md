# nft-mint

## 0. Prerequisites
* An Alchemy HTTP endpoint to make blockchain queries to.
* The private key of a MetaMask testnet wallet, must have ETH for minting gas costs. 


## 1. Customize

### .env 
* MINTER_PRIVATE_KEY: The private key of the wallet which will mint the collection.
* Update the alchemy URL to the target testnet (default: Goerli).

### upload.js
NFT Images and Metadata
[NOTE: This step is currently unavailable due to [recent Infura changes](https://status.infura.io/incidents/qkv2jyw0h1vp). It is possible to skip this upload step and use a previously-uploaded IPFS metadata as the Token URI in the mint.js step below]
1. Update the JSON metadata (content identifier [long string starting with "Q" after /ipfs/], image, description, etc)
[Coming soon: Blocked by Infura: This repo is set up to default is to create 10 that look like 10 bluechip NFTs.]
[Coming soon: You can generate custom metadata JSON and images using [TBC], and upload them to IPFS using [TBC/Pinata]. Use https://www.pinata.cloud/ to upload custom NFT image and metadata. 

### contracts/<ERC721 contract name>.sol
* Choose a name for your collection, name this file and the `contract` name your chosen number this (must be the same: e.g. contract SpongeBobNFT and the file SpongeBobNFT.sol).
* Name your token and the desired symbol, in the `constructor`.

### scripts/deploy.js
Reflect your chosen contract name from above in the `deploy.js` file.

### scripts/mint.js
Again, Reflect your chosen contract name from above in the `mint.js` file.

Update the sendToWallets array with a list of wallets you wish to send. Duplicate wallets to send multiple NFTs to one wallet.
Update the tokenURI. Either with an already-uploaded IPS gateway URI, or the gateway.ipfs.io/... string which was outputted from the upload.js step.
#### Already-uploaded TokenURIs:
1. https://gateway.ipfs.io/ipfs/Qmcz7eFQV3rJKhdAcNAmuMU1WFd3ncZbGkmJNAn5qQap5i"; // Dalek
2. "https://gateway.ipfs.io/ipfs/QmcnG9VcMuumREednndN28LjzvPjHPDwh2s7nYW9ynckPk"; // Leopard Ape
3. [More coming soon]

## 3. Run
Once customized, 
1. [Optional, you can use previously-uploaded TokenURI in the mint.js step] Upload NFT meta data to ipfs, run `node ipfs/upload.js`.
   1. You will see a new path output on the terminal, save this string for tokenURI, in a later step.
2. Deploy the ERC-721 contract
`npx hardhat run scripts/deploy.js --network goerli`
Save the deployed ERC-721 contract address that is logged.
3. Mint the collection by running 
   1. Update the `mint.js` file, replace a) the `existingContractAddr` variable with the address of the deployed ERC-721 contract (in the last step) and b) the tokenURI logged in step 1.
   1. To mint and airdrop the NFT, `run npx hardhat run scripts/mint.js --network rinkeby`
   
