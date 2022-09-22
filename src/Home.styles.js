import { keyframes } from "styled-components";
import styled from "styled-components";

export const PageWrapper = styled.div``;

export const Flex = styled.div`
  display: flex;
`;

export const HeaderWrapper = styled.div`
  border-bottom: 2px solid rgb(255, 56, 100);
  background-color: rgb(255, 56, 100, 0.36);
  color: rgb(255, 56, 100);
`;
export const HeaderItem = styled.div`
  font-family: "Inter";
  padding: 0.2rem 2rem;
  width: 12vw;
`;

export const HomeText = styled.div`
  font-family: "Joystix";
  font-size: xx-large;
  color: rgb(255, 56, 100);
  margin: auto;
  text-align: center;
  margin-top: 5vh;
`;
const BounceAnimation = keyframes`
0% { bottom: 0; }
12.5% { bottom: -0.7em; }
25% { bottom: -0.35em; }
37.5% {bottom: -0.7em;}
50% { bottom: 0; }
100% {bottom: 0;}
`;
export const ArrowWrapper = styled.div`
  display: inline-block;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  color: rgb(255, 56, 100);
  text-align: center;
  margin-top: 2.5vh;

  /* Animation */
  animation-name: ${BounceAnimation};
  animation-timing-function: linear;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: max-content;
  margin: auto;
  align-items: center;
  margin-top: 2.5vh;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10vw;
  background-color: rgb(255, 56, 100, 0.36);
  color: rgb(255, 56, 100);
  padding: 0.55rem 1.5rem;
  border-radius: 0.45rem;
  border: 1px solid;
  border-color: rgb(255, 56, 100, 0.36);
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  font-family: "Inter";
  font-weight: 800;
  cursor: pointer;
  user-select: none;

  :hover {
    background-color: rgb(255, 56, 100);
    border: 1px solid rgb(255, 56, 100);
    color: white;
  }

  :active {
    margin: 1px;
    border: none;
  }
`;
