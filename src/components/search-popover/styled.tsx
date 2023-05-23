import { styled } from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  width: 324px;
  height: 150px;
  padding: 8px;
  border-radius: 5px;
  overflow-y: scroll;
  /* border: 1px solid #616161; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  -moz-box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Item = styled.div<{ ending: string }>`
  /* width: 320px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  border-bottom: ${(props) => (!props.ending ? "1px solid #919191" : "none")};
  padding: 8px 8px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

export const Name = styled.h5`
  font-family: "Flexo-Regular", arial, sans-serif;
  color: #000;
  font-size: 16px;
  text-decoration: none;
`;

export const ID = styled.h5`
  font-family: "Flexo-Regular", arial, sans-serif;
  color: #919191;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
`;
