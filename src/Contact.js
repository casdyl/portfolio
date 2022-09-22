import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
import { Flex } from "./About.styles";
import { Header } from "./Header";
import { HomeText, MenuItem, MenuWrapper, PageWrapper } from "./Home.styles";

export const Contact = () => {
  return (
    <PageWrapper>
      <Header />
      <Flex dir="column">
        <HomeText>Contact</HomeText>
        <MenuWrapper>
          <Link to="mailto:cassidymlowe@gmail.com">
            <MenuItem>Email</MenuItem>
          </Link>
          <Link to="mailto:cassidymlowe@gmail.com">
            <MenuItem>LinkedIn</MenuItem>
          </Link>
          <Link to="mailto:cassidymlowe@gmail.com">
            <MenuItem>Github</MenuItem>
          </Link>
        </MenuWrapper>
        <MenuWrapper>
          <Link to="/">
            <MenuItem>
              Back Home <IoMdHome size={"1.5em"} />
            </MenuItem>
          </Link>
        </MenuWrapper>
      </Flex>
    </PageWrapper>
  );
};
