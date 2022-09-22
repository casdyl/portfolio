import {
  PageWrapper,
  HomeText,
  ArrowWrapper,
  MenuWrapper,
  MenuItem,
} from "./Home.styles";
import { Link } from "react-router-dom";

import {
  IoMdCodeWorking,
  IoMdInformation,
  IoMdPlanet,
  IoMdThunderstorm,
} from "react-icons/io";

import { TbArrowBigDownLines } from "react-icons/tb";
import { Header } from "./Header";

export const Home = () => {
  return (
    <PageWrapper>
      <Header />
      <HomeText>
        Hi, i'm cassidy,
        <br />A graphic designer. <br />
        Click Around below!
      </HomeText>
      <ArrowWrapper>
        <TbArrowBigDownLines size={"2.5rem"} />
      </ArrowWrapper>
      <MenuWrapper>
        <Link to="/about">
          <MenuItem>
            About
            <IoMdInformation size={"1.5em"} />
          </MenuItem>
        </Link>
        <Link to="/portfolio">
          <MenuItem>
            Portfolio
            <IoMdPlanet size={"1.5em"} />
          </MenuItem>
        </Link>
        <Link to="/contact">
          <MenuItem>
            Contact
            <IoMdCodeWorking size={"1.5em"} />
          </MenuItem>
        </Link>
        <Link to="/portfolio.pdf" target="_blank" download>
          <MenuItem>
            Download
            <IoMdThunderstorm size={"1.5em"} />
          </MenuItem>
        </Link>
      </MenuWrapper>
    </PageWrapper>
  );
};
