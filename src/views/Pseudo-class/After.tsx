import React, { Component, ComponentType } from 'react'
import StyledContainer from 'views/commonComponent/StyledContainer'
import afterBg from 'assets/images/Pseudo-class/dir1.jpg'
import styled from 'styled-components'
import { Row } from 'antd'
import {
  CssProperty,
  CssDeclare,
  CssClass,
  CodeContainer,
  ImageContainer
} from 'views/commonComponent/StyledCssMarkUp'
import highlightComponent from 'views/commonComponent/HighlightCode'
import formatHTML from 'utils/formatHTML'

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
  width: 90%;
  max-width: 50em;
  margin: auto;
  font-size: 1.1rem;
  font-family: '汉仪全唐诗字体';
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
          <CodeContainer type="html">
            {`Let's <a href="http://movethewebforward.org/" className="external">Move The Web Forward</a> together!`}
          </CodeContainer>
          <p>
            下面的代码片段会给link标签添加图标。图标将会以内联形式添加到link标签内容元素的后边。
          </p>
          <CodeContainer type="css">
            {formatHTML(
              `
                .external::after {
                  content: url(external-link.png);
                  padding-left: 5px;
                }
              `
            )}
          </CodeContainer>
          <p>
            通过使用<CssProperty>content</CssProperty>
            属性来添加图片。但是通过伪类添加的图片不可
            以被重新设置图片大小。所以，你需要在插入图片前提取设置好你的图片大小。
          </p>
          <p>上面代码的结果如下所示：</p>
          <iframe
            src="https://tympanus.net/codrops-playground/SaraSoueidan/dYfExU3k/embed/result,html,css/"
            width="100%"
            height="300px"
            frameBorder="0"
            scrolling="no"
            allowFullScreen={true}
          />
          <p>
            因为通过<CssProperty>content</CssProperty>插入的伪类元素并不会插入
            到DOM中，所以通常不能通过浏览器开发者工具看见和观察插入的内容。
          </p>
          <ImageContainer
            title="展示::after伪元素"
            des={
              <span>
                Inspecting the <CssProperty>::after</CssProperty> pseudo-element
                from the above example in the Chrome dev tools
              </span>
            }
          >
            <img
              src="https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2014/12/inspecting-after.png"
              alt="inspecting-after"
              width="806"
              height="606"
              srcSet="https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2014/12/inspecting-after.png 806w, https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2014/12/inspecting-after-300x225.png 300w"
              sizes="(max-width: 806px) 100vw, 806px"
            />
          </ImageContainer>
          <p>
            上边的例子也表明了通过<CssProperty>::after</CssProperty>
            插入的内容是inline形式定位的，并且位于其它内容后边。
          </p>
          <p>
            因为 <CssProperty>::after</CssProperty>
            插入的内容是位于其它内容后边的，这也意味着伪类元素会堆叠到其它位于它前边元素的上边。
          </p>
          <p>
            伪类元素可以用于插入任何类型的内容，包括字符、字符串、文本和图片。例如，下边这些都是有效的申明：
          </p>
          <CodeContainer type="css">
            {formatHTML(
              `
                .element::after {
                  content: url(path/to/image.png);
                }

                .element::after {
                  content: "(To be continued...)";
                }

                .element::after {
                  content: "\\201c";
                }
              `
            )}
          </CodeContainer>
          <p>
            <CssProperty>::after</CssProperty>的内容也可以是一个
            <CssProperty>counter</CssProperty>，当然也可以是一个空元素。
          </p>
          <p>空元素对于用于清除浮动非常有用。</p>
          <CodeContainer type="css">
            {formatHTML(
              `
                .clearfix::before,
                .clearfix::after {
                  content: '';
                  display: table;
                }

                .clearfix::after {
                  clear: both;
                }
              `
            )}
          </CodeContainer>
        </StyledContent>
      </StyledContainer>
    )
  }
}

export default highlightComponent(After)
