import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class HtmlComponent extends React.Component {
  render() {
    const html = this.props.html;
    return <div>{ ReactHtmlParser(html) }</div>;
  }
}

export default HtmlComponent;