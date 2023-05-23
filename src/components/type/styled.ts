import { styled } from "styled-components";

export const Wrapper = styled.div<{ bg: string }>`
  width: 72px;
  height: 18px;
  background: ${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: default;
`;

export const Text = styled.p<{ color: "white" | "black" }>`
  font-family: "Flexo-Regular", arial, sans-serif;
  text-transform: none;
  font-size: 11px;
  text-align: center;
  color: ${(props) => props.color};
`;
