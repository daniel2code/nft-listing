import axios from "axios";
import { useState } from "react";

export const useFetchNft = () => {
  const [data, setData] = useState(null);

  const contractAddress = "0x51b2fA6448d22D4BF86Ef9DC2bc24a61Cc9226D5";
  const openSeaEndpoint = "https://api.opensea.io/api/v1/assets";

  axios
    .get(
      `${openSeaEndpoint}?owner=${contractAddress}&order_direction=desc&offset=0&limit=50`
    )
    .then((response) => {
      console.log(response);
      setData(response);
      // Do something with the assets data, such as displaying it in a list
    })
    .catch((error) => {
      console.error(error);
    });

    return { data }
};
