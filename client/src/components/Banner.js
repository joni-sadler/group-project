import React from "react";
import styled from "styled-components";

const Banner = ({ text, bannerImage }) => {
  return (
    <BannerBox
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        border: "2px solid black",
        backgroundPositionY: "55%",
      }}
    >
      <h1>{text}</h1>
    </BannerBox>
  );
};

const BannerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 5%;
  width: 90%;
  height: 300px;
  border-radius: 3px;

  & h1 {
    font-size: 80px;
    text-align: center;
    color: white;
    text-shadow: 1px 1px 3px #000000;
  }
`;

export default Banner;
