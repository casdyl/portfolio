import { HeaderWrapper, HeaderItem, Flex } from "./Home.styles";

import Ticker from "react-ticker";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Ticker>
        {({ index }) => (
          <Flex>
            <HeaderItem>Cassidy Lowe</HeaderItem>
            <HeaderItem>Web + Graphics</HeaderItem>
            <HeaderItem>Montréal // Remote</HeaderItem>
          </Flex>
        )}
      </Ticker>
    </HeaderWrapper>
  );
};
