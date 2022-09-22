import { Heading, Subheading, AboutWrapper, Text, Flex } from "./About.styles";
import { HomeText, MenuItem, MenuWrapper, PageWrapper } from "./Home.styles";
import { IoMdHome } from "react-icons/io";
import { Header } from "./Header";

import { Link } from "react-router-dom";

export const About = () => {
  return (
    <PageWrapper>
      <Header />
      <Flex dir="column" gap="2rem">
        <HomeText>About</HomeText>
        <AboutWrapper>
          <Flex dir="column" gap="1.5rem">
            <Heading>Experience</Heading>
            <Flex dir="column" gap="0">
              <Subheading>Contract</Subheading>
              <Text>Canucks Sports + Entertainment</Text>
              <Text>The CODE Initiative</Text>
              <Text>HFA Custom Art</Text>
            </Flex>
            <Flex dir="column" gap="0">
              <Subheading>Freelance</Subheading>
              <Text>Stir Coffee House</Text>
              <Text>Jackson & Lowe</Text>
            </Flex>
          </Flex>
          <Flex dir="column" gap="0" justify="space-between" textAlign="right">
            <Flex dir="column" gap="1.5rem">
              <Heading>Education</Heading>
              <Flex dir="column" gap="0">
                <Subheading>The University of British Columbia</Subheading>
                <Text>Sauder School of Business</Text>
              </Flex>
            </Flex>
            <Flex dir="column" gap="1.5rem">
              <Heading>Location</Heading>
              <Flex dir="column" gap="0">
                <Text>Montréal // Remote</Text>
              </Flex>
            </Flex>
          </Flex>
        </AboutWrapper>
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
