import { styled } from "styled-components";

export const Wrapper = styled.section`
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 15%;
  padding-right: 15%;
  overflow-y: scroll;
  flex: 1;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadMore = styled.button`
  background-color: ${(props) => (props.disabled ? "#a4acaf" : "#4592c4")};
  color: #fff;
  font-family: "Flexo-Regular", arial, sans-serif;
  font-weight: 600;
  font-size: 16px;
  width: 240px;
  height: 40px;
  border-radius: 5px;
  margin: 30px 0;
  border: none;
  outline: none;
`;
