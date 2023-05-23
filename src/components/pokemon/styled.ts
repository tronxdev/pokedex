import { styled } from "styled-components";

export const Wrapper = styled.a`
  text-decoration: none;
`;

export const Content = styled.div`
  padding-left: 8px;
`;

export const Img = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 5px;
  background-color: #f2f2f2;
`;

export const ID = styled.p`
  font-family: "Flexo-Regular", arial, sans-serif;
  color: #919191;
  font-size: 12px;
  font-weight: bold;
  margin: 0;
`;

export const Name = styled.h5`
  font-family: "Flexo-Regular", arial, sans-serif;
  color: #000;
  font-size: 20px;
  font-weight: bold;
  margin: 8px 0 0 0;
`;

export const Types = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-top: 4px;
`;
