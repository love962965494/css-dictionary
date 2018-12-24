import React, { Component, ComponentType } from 'react'
import { Row } from 'antd'
import flowerTitle from 'assets/images/flowerTitle.jpg'
import styled from 'styled-components';

const HeaderContainer = styled(Row as ComponentType)`
  background: url(${flowerTitle});
  background-position: center 5px;
  background-repeat: no-repeat;

  h2 {
    margin-top: 30px;
    margin-bottom: 0px;
    color: rgba(162, 106, 102, 0.98);
  }

  p {
    color: #908787a1;
    margin-bottom: 0;
  }
`

export default class Header extends Component {
  public render() {
    return (
      <HeaderContainer>
        <h2>CSS 目录索引</h2>
        <p>对所有主要css属性的详细解释</p>
      </HeaderContainer>
    )
  }
}
