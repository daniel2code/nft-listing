import Web3 from "web3";
import contractAbi from "./contractAbi.json";

const web3 = new Web3(
  `https://eth-mainnet.g.alchemy.com/v2/01DqszJnhp3PgHE3_9LlO_p8DykcMfIF`
);

const contractAddress = "0x8943C7bAC1914C9A7ABa750Bf2B6B09Fd21037E0"

const contract = new web3.eth.Contract(
  contractAbi,
  contractAddress
);


const fetchNfts = async () => {
  const events = await contract.getPastEvents("Transfer", {
    filter: { to: contractAddress },
    fromBlock: 0,
    toBlock: "latest",
  });

  console.log(events)
};

// const { events } = fetchNfts();

// const nfts = events.map((event) => event.returnValues.tokenId);

export { fetchNfts, };
