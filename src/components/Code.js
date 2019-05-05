/* eslint react/jsx-boolean-value: 0 */
/* eslint no-unused-vars: 0 */
/* eslint react/prop-types: 0 */
/* eslint react/destructuring-assignment: 0 */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const Code = ({ codeString, language, ...props }) => {
  return (
    <div>
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      {props['live'] ? (
        <LiveProvider code={codeString} noInline={true} theme={theme}>
          {/*
          The theme provider seems to be busted and does not apply themes
          to the editor properly so instead we will leverage highlight  
          <LiveEditor />
          <LiveError /> */}
          <LivePreview />
        </LiveProvider>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Code;
