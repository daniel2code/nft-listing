import Web3 from "web3";
import contractAbi from "./contractAbi.json";

const web3 = new Web3(
  `https://eth-mainnet.g.alchemy.com/v2/01DqszJnhp3PgHE3_9LlO_p8DykcMfIF`
);

const contractAddress = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";

const contract = new web3.eth.Contract(contractAbi, contractAddress);

const nfts = [];

const fetchNfts = async () => {
  const events = await contract.getPastEvents("Transfer", {
    filter: { to: contractAddress },
    fromBlock: 0,
    toBlock: "latest",
  });

  console.log(events);
};

export { fetchNfts };
