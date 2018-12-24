import React, { Component, ComponentType } from 'react'
import StyledContainer from 'views/commonComponent/StyledContainer'
import afterBg from 'assets/images/Pseudo-class/dir1.jpg'
import styled from 'styled-components'
import { Row } from 'antd'
import {
  CssProperty,
  CssDeclare,
  CssClass,
  CodeContainer
} from 'views/commonComponent/StyledCssMarkUp'
import highlightComponent from 'views/commonComponent/HighlightCode'

const StyledTitle = styled.h2`
  display: inline-block;
  position: relative;

  margin-top: 15px;
  font-family: 'Black And White Picture', sans-serif;
  font-size: 3.5rem;
  color: #000;
  background: #fff;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to right,
      #63ade5,
      #5a9dd2,
      #68a9e5,
      #a8b1da,
      #8ac1ec
    );
    mix-blend-mode: lighten;
    pointer-events: none;
  }
`

const StyledContent = styled(Row as ComponentType)`
  padding-left: 10em;
  padding-right: 10em;
  font-family: '汉仪全唐诗字体';
  font-size: 1.3rem;
  font-weight: 600;
  text-align: left;
  color: #0027ff;

  p {
    text-indent: 2em;
    text-align: justify;
  }
`

class After extends Component {
  public render() {
    return (
      <StyledContainer bgImage={afterBg}>
        <StyledTitle>Pesudo-class::after</StyledTitle>
        <StyledContent>
          <p>
            <CssProperty>::after</CssProperty>
            伪类是一个生成的内容元素，是对应元素可被样式化的最后一个子元素。
          </p>
          <p>
            使用<CssProperty>::after</CssProperty>
            伪元素生成的内容会被插在对应元素内容的后边，并且默认
            <CssDeclare>display: inline</CssDeclare>。我们可以通过使用
            <CssProperty>content</CssProperty>属性来指定内容。
          </p>
          <p>
            例如，假设你想要给页面上的每个link标签，除了那些已经被用户访问过的标签添加一个小图标，
            这将会是一个好办法来告诉用户他们将要点击的link标签将会跳到另一个页面。这样一个小图标
            我们可以添加到link标签的前边或者后边。通常上大家都是添加到link标签后边，所以我们通过
            使用<CssProperty>::after</CssProperty>属性来给页面上带有
            <CssClass>.external</CssClass>类的link标签添加一个小图标。
          </p>
          <CodeContainer>
            Let's &lt;a href="http://movethewebforward.org/"
            className="external"&gt;Move The Web Forward&lt;/a&gt; together!
          </CodeContainer>
        </StyledContent>
      </StyledContainer>
    )
  }
}

export default highlightComponent(After)
