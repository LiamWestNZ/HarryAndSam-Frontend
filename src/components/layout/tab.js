import styled from "styled-components";

export const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  height: 3em;
  z-index: 1;
  position: absolute;
  top: 0px;
  left: 250px;
  height: 40px;
  background-color: #8FC2E9;
  width:30%;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 31%;
  position: relative;
  border-radius: 15px 15px 0px 0px;
 
  

  margin-right: 0.1em;
  font-size: 1em;
  border: ${props => (props.active ? "1px solid #ccc" : "")};
  color: ${props => (props.active ? "#808080" : "")};
  border-bottom: ${props => (props.active ? "none" : "")};
  background-color: ${props => (props.active ? "white" : "#cbe4f7")};
  height: ${props => (props.active ? "2.4em" : "1.3em;")};
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;

  :hover {
    background-color: white;
    color: gray;
  }
`;
export const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;