import { styled } from "styled-components";

export const Wrapper = styled.section`
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 15%;
  padding-right: 15%;
  background-color: #212121;
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 40px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.label`
  color: #fff;
  cursor: default;
  font-size: 25px;
  line-height: 125%;
  text-transform: none;
  font-family: "Flexo-Regular", arial, sans-serif;
`;

export const Input = styled.input`
  width: 320px;
  background-color: #fff;
  border: 3px solid #616161;
  border-radius: 5px;
  outline: none;
  padding: 8px 6px;
  font-size: 16px;
  font-family: "Flexo-Regular", arial, sans-serif;
  color: #313131;
`;

export const Instruction = styled.h2`
  color: #fff;
  cursor: default;
  line-height: 125%;
  text-transform: none;
  font-family: "Flexo-Regular", arial, sans-serif;
  font-weight: 400;
  font-size: 20px;
  margin: 0;
  padding: 16px;
  border-radius: 6px;
  background-color: #4dad5b;
  width: 400px;
`;
