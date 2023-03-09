import * as React from "react";
import { createPortal } from "react-dom";
import {
  SModalOverlay,
  SModalWrapper,
  SModal,
  BidderImg,
} from "./modal.styles";
import { Button } from "../components";
import Img from "../../assets/asset1.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { primaryCardData } from "../../utils/primaryCardData";
import { BsFillSuitHeartFill } from "react-icons/bs";

const Modal = ({ isVisible, hideModal }) => {
  return isVisible
    ? createPortal(
        <React.Fragment>
          <SModalOverlay />
          <SModalWrapper
            aria-modal={true}
            aria-hidden={true}
            tabIndex={-1}
            role="dialog"
          >
            <SModal>
              <div className="header-title">
                <p className="title">Created Mystic Motors on Feb 2023</p>
                <AiOutlineClose
                  size={40}
                  color="#fff"
                  onClick={hideModal}
                  className="icon"
                />
              </div>
              <div className="modal-content">
                <img src={Img} alt="" className="modal-img" />

                <div className="bid-list">
                  <div className="bid-img-box">
                    {primaryCardData.map((item) => {
                      const calcLeft = item.id * 16;
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
                </div>

                <div className="card-content">
                  <p className="name">Diamond Dog</p>

                  <p className="bid">
                    0x0beed7099af7514ccedf642cfea435731176fb02
                  </p>

                  <div className="price-box">
                    <p className="price">0.3452wETH</p>

                    <BsFillSuitHeartFill color="#58d0ea" size={20} />
                  </div>
                </div>

                <p className="description">
                  Become part of one of the best-selling modern tarot decks this
                  time. Your ownership of one of the Modern Way Tarot cards will
                  unlock access to our exclusive tarot community where you can
                  learn how to do tarot readings and how to build a tarot
                  business. Youll also unlock a free tarot reading, our 194-page
                  Tarot Guidebook, and your very own physical Modern Way tarot
                  card deck including your NFT card! Now, with which Major
                  Arcana archetype do you identify? Pick your card now because
                  You are the Way
                </p>
              </div>

              <div className="modal-footer">
                <Button height="50px" width="160px" text="Purchase Here" />
              </div>
            </SModal>
          </SModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default Modal;
