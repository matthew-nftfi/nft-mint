const { create } = require("ipfs-http-client");

const ipfs = create("https://ipfs.infura.io:5001");

// we added two attributes, add as many as you want!
async function run() {
  const files = [{
    path: '/',
    content: JSON.stringify({
      name: "A Bored Ape On Testnet",
      attributes: [
        {
          "trait_type": "Bored",
          "value": "100"
        },
        {
          "trait_type": "Leopard",
          "value": "100"
        }
      ],
      image: "https://gateway.pinata.cloud/ipfs/QmYxT4LnK8sqLupjbS6eRvu1si7Ly2wFQAqFebxhWntcf6/",
      description: "Tongue is out! Leopard is on!"
    })
  }];

  const result = await ipfs.add(files);
  console.log(result);
}

run();