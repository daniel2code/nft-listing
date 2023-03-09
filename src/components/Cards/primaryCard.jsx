import React from "react";
import { CardBox, BidderImg } from "./card.styles";
import Img from "../../assets/asset1.jpg";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { primaryCardData } from "../../utils/primaryCardData";

const PrimaryCard = ({ img, name, bid, price }) => {
  return (
    <CardBox>
      <div className="card-img">
        <img src={Img} alt="" className="img" />
      </div>

      <div className="bid-list">
        <div className="bid-img-box">
          {primaryCardData.map((item) => {
            const calcLeft = item.id * 13;
            return (
              <BidderImg
                src={item.img}
                key={item.id}
                left={item.id === 1 ? "0px" : String(calcLeft) + "px"}
              />
            );
          })}

          <p className="bid-text">11+ Place Bit</p>
        </div>

        <MdOutlineMoreHoriz color="#acacac" size={18} />
      </div>

      <div className="card-content">
        <p className="name">Diamond Dog</p>

        <p className="bid">Highest bid 5/10</p>

        <div className="price-box">
          <p className="price">0.3452wETH</p>

          <BsFillSuitHeartFill color="#58d0ea" size={20} />
        </div>
      </div>
    </CardBox>
  );
};

export default PrimaryCard;
