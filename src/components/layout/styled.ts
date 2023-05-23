import { styled } from "styled-components";
import bgImg from "../../assets/images/body_bg.png";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #424242 url(${bgImg});
`;

export const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;
