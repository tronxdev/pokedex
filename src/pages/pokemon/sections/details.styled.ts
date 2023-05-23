import { styled } from "styled-components";
import bgImg from "../../../assets/images/container_bg.png";

export const Wrapper = styled.section`
  padding-left: 15%;
  padding-right: 15%;
  overflow-y: hidden;
  flex: 1;
  background: #fff url(${bgImg});
`;

export const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  background-color: #fff;
  padding: 40px 0;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const Img = styled.img`
  width: 420px;
  height: 420px;
  border-radius: 5px;
  background-color: #f2f2f2;
`;

export const BodySpecs = styled.div`
  width: 420px;
  border-radius: 5px;
  background-color: #30a7d7;
  padding: 8px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
`;

export const BodySpec = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const BodySpecLabel = styled.label`
  font-family: "Flexo-Regular", arial, sans-serif;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  margin-left: 12px;
`;

export const BodySpecValue = styled.h5`
  font-family: "Flexo-Regular", arial, sans-serif;
  font-size: 16px;
  color: #000;
  text-decoration: none;
`;

export const DetailSection = styled.div`
  width: 420px;
  margin-bottom: 20px;
`;

export const DetailTitle = styled.label`
  font-family: "Flexo-Regular", arial, sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #a4a4a4;
  text-decoration: none;
`;

export const DetailItems = styled.ul<{ variant: "default" | "no-bullet" }>`
  margin-top: 8px;
  list-style-type: ${(props) =>
    props.variant === "default" ? "disc" : "none"};
`;

export const DetailItem = styled.li`
  font-family: "Flexo-Regular", arial, sans-serif;
  font-size: 16px;
  color: #000;
  text-decoration: none;
  padding: 4px 8px;
  cursor: default;
`;
