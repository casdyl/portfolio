import {
  PageWrapper,
  HeaderWrapper,
  HomeText,
  HeaderItem,
  ArrowWrapper,
  MenuWrapper,
  MenuItem,
} from "./Home.styles";
import { Link } from "react-router-dom";
import Ticker from "react-ticker";

import {
  IoMdCodeWorking,
  IoMdInformation,
  IoMdPlanet,
  IoMdThunderstorm,
} from "react-icons/io";

import { TbArrowBigDownLines } from "react-icons/tb";

export const Home = () => {
  const MenuItemArray = [
    { label: "About", icon: <IoMdInformation size={"1.5em"} /> },
    { label: "Portfolio", icon: <IoMdPlanet size={"1.5em"} /> },
    { label: "Contact", icon: <IoMdCodeWorking size={"1.5em"} /> },
    { label: "Download", icon: <IoMdThunderstorm size={"1.5em"} /> },
  ];
  return (
    <PageWrapper>
      <Ticker>
        {({ index }) => (
          <HeaderWrapper>
            <HeaderItem>Cassidy Lowe</HeaderItem>
            <HeaderItem>Web + Graphics</HeaderItem>
            <HeaderItem>Montréal // Remote</HeaderItem>
          </HeaderWrapper>
        )}
      </Ticker>
      <HomeText>Click Me</HomeText>
      <ArrowWrapper>
        <TbArrowBigDownLines size={"2.5rem"} />
      </ArrowWrapper>
      <MenuWrapper>
        {MenuItemArray.map((item) => {
          return (
            <MenuItem>
              {item.label}
              {item.icon}
            </MenuItem>
          );
        })}
      </MenuWrapper>
    </PageWrapper>
  );
};
