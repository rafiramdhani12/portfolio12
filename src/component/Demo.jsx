/* eslint-disable react/prop-types */
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";

import {okaidia} from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeDemo(props) {
  return (
    <SyntaxHighlighter language="javascript" style={okaidia}>
      {props.demo}
    </SyntaxHighlighter>
  );
}

export default CodeDemo;
