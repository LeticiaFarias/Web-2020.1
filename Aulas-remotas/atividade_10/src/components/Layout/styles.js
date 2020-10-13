import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: columns;
  padding: 10px;
  justify-content: center;
  margin: 10px;
`;

export const Campo = styled.input.attrs((props) => ({
  type: "number",
  size: props.size || "1em",
}))`
  margin: 20px;
  height: 40px;
  width: 200px;
  text-align: center;
`;
