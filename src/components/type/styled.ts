import { styled } from "styled-components";

export const Wrapper = styled.div<{ bg: string; variant: "default" | "mini" }>`
  width: ${(props) => (props.variant === "mini" ? "72px" : "120px")};
  height: ${(props) => (props.variant === "mini" ? "18px" : "24px")};
  background: ${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: default;
`;

export const Text = styled.p<{
  color: "white" | "black";
  variant: "default" | "mini";
}>`
  font-family: "Flexo-Regular", arial, sans-serif;
  text-transform: none;
  font-size: ${(props) => (props.variant === "mini" ? "11px" : "14px")};
  font-weight: ${(props) => (props.variant === "mini" ? "400" : "500")};
  text-align: center;
  color: ${(props) => props.color};
`;
