import { IoMdHome, IoMdMail } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Flex } from "./About.styles";
import { Header } from "./Header";
import { HomeText, MenuItem, MenuWrapper, PageWrapper } from "./Home.styles";

export const Contact = () => {
  return (
    <PageWrapper>
      <Header />
      <Flex dir="column" gap="2rem">
        <HomeText>Contact</HomeText>
        <MenuWrapper>
          <a href="mailto:cassidymlowe@gmail.com">
            <MenuItem>
              Email
              <IoMdMail size={"1.5em"} />
            </MenuItem>
          </a>
          <a href="https://www.linkedin.com/in/cassidylowe/">
            <MenuItem>
              LinkedIn
              <BsLinkedin size={"1.5em"} />
            </MenuItem>
          </a>
          <a href="https://github.com/casdyl">
            <MenuItem>
              Github
              <FaGithubSquare size={"1.5em"} />
            </MenuItem>
          </a>
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
