/* eslint react/prop-types: 0 */
/* eslint react/display-name: 0  */
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import Code from './src/components/Code';

// Helper function to extract code block props
const preToCodeBlock = (preProps) => {
  if (preProps.children && preProps.children.props) {
    const {
      children: codeString,
      className = '',
      ...props
    } = preProps.children.props;

    // Check if this is a code block by looking for language- className
    const matches = className.match(/language-(?<lang>.*)/);

    if (matches && matches.groups && matches.groups.lang) {
      return {
        codeString: typeof codeString === 'string' ? codeString.trim() : codeString,
        className,
        language: matches.groups.lang,
        ...props,
      };
    }
  }
};

// components is its own object outside of render so that the references to
// components are stable
const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps);
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />;
    }
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />;
  },
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
