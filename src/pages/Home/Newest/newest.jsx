import React from "react";
import { NewestBox } from "./newest.styles";
import {
  SectionLayout,
  Button,
  PrimaryCard,
  Modal
} from "../../../components/components";
import useModal from "../../../hooks/useModal";
import { useFetchNft } from "../../../hooks/useFetchNft"

const Newest = () => {
  const { isVisible, toggleModal } = useModal();
  const { data } = useFetchNft()

  console.log(data)

  return (
    <SectionLayout border={true}>
      <button onClick={toggleModal}>Show modal</button>
      <Modal isVisible={isVisible} hideModal={toggleModal} />

      <NewestBox>
        <div className="newest-header">
          <p className="header-text">Newest Items</p>
          <div className="header-btn">
            <Button text="View All" bgColor="#13131d" />
          </div>
        </div>

        <div className="newest-card-box">
          {[...Array(5)].map(() => {
            return <PrimaryCard />;
          })}
        </div>
      </NewestBox>
    </SectionLayout>
  );
};

export default Newest;
