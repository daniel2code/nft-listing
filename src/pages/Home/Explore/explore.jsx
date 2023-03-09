import React from "react";
import { ExploreBox } from "./explore.styles";
import {
  SectionLayout,
  Button,
  PrimaryCard,
} from "../../../components/components";

const Explore = () => {
  return (
    <SectionLayout border={true} >
      <ExploreBox>
        <div className="explore-header">
          <p className="header-text">Explore Product</p>
          <div className="header-btn">
            <Button text="Filter" />
          </div>
        </div>

        <div className="explore-card-box">
          {[...Array(10)].map(() => {
            return <PrimaryCard />;
          })}
        </div>
      </ExploreBox>
    </SectionLayout>
  );
};

export default Explore;
