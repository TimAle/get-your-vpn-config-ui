import React from "react";
import showdown from "showdown";

const Guide = () => {
  const converter = new showdown.Converter();

  var html = converter.makeHtml('### Header');

  return (
    <div className="guide">
      <h1>Guide</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default Guide;
