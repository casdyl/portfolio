import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  font-family: "Inter";
  gap: 6rem;
  width: max-content;
  margin: auto;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => `${props.dir}`};
  justify-content: ${(props) => `${props.justify}`};
  gap: ${(props) => `${props.gap}`};
  text-align: ${(props) => `${props.textAlign}`};
`;

export const Heading = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  color: rgb(255, 56, 100);
`;

export const Subheading = styled.div`
  font-weight: 600;
  color: rgb(255, 56, 100);
`;

export const Text = styled.div`
  font-weight: 400;
  color: rgb(255, 56, 100);
`;
