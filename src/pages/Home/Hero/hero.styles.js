import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .herobox {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .content {
    width: 50%;
    .head-text {
      width: 80%;
      font-size: 60px;
      color: var(--alturaTextColorOne);
    }

    .sub-text {
      width: 75%;
      color: var(--alturaTextColorTwo);
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      margin-top: 30px;
    }

    .action-btn {
      display: flex;
      margin-top: 30px;

      .btn {
        width: 170px;
      }

      .btn1 {
        width: 170px;
        margin-left: 20px;
      }
    }
  }

  .bg-img {
    width: 40%;
    /* height: auto; */

    img {
      width: 100%;
      height: auto;
    }
  }
`;
