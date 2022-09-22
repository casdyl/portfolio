import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Ticker from "react-ticker";
import { Header } from "./Header";
import { PageWrapper, HomeText, MenuWrapper, MenuItem } from "./Home.styles";
import { ImgHolder } from "./Portfolio.styles";
import { Flex } from "./About.styles";

import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";

const buttonStyle = {
  width: "30px",
  background: "none",
  border: "0px",
};

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="rgb(255, 56, 100)"
      >
        <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
      </svg>
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="rgb(255, 56, 100)"
      >
        <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
      </svg>
    </button>
  ),
};

export const Portfolio = () => {
  return (
    <PageWrapper>
      <Header />
      <Flex dir="column" gap="2rem">
        <HomeText>Portfolio</HomeText>
        <ImgHolder>
          <Slide {...properties}>
            <img src="/p_1.svg" />
            <img src="/p_2.svg" />
            <img src="/p_3.svg" />
            <img src="/p_4.svg" />
          </Slide>
        </ImgHolder>
        <MenuWrapper>
          <Link to="/">
            <MenuItem>
              Back Home
              <IoMdHome size={"1.5em"} />
            </MenuItem>
          </Link>
        </MenuWrapper>
      </Flex>
    </PageWrapper>
  );
};
