import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import CallExample from "./CallExample";

const Header = styled.header`
    padding: 30px 10px 30px;
    margin-bottom: 50px;
    background: #f7f7f7;
    box-sizing: border-box;
`;

const List = styled.ul`
  float: left;
`;

const Item = styled.li`
    float: left;
    margin-right: 15px;
`;

const SLink = styled(Link)`
  
`;

export default withRouter(() => (
  <Header className="clearFix">
    <List>
      <Item>
        <SLink to="/">강의 카운터 todo list</SLink>
      </Item>
    </List>
    <CallExample />
  </Header>
));