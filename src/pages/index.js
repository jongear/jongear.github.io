import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../config/theme';
import logo from '../images/logo.svg';
import { SEO } from '../components';
import useBuildTime from '../hooks/useBuildTime';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${props => props.theme.fontFamily.sansSerif};
    font-size: ${props => props.theme.fontSize.small};
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font: 112.5%/1.45em georgia, serif;
    box-sizing: border-box;
    overflow-y: auto;
  }

  body {
    margin: 0;
    background: rgba(244,244,244,0.8);
    font-family: ${props => props.theme.fontFamily.sansSerif};
    font-weight: normal;
  }

  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }

  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  color: #ffecdb;
  min-height: 95vh;

  margin: 0 auto;
  max-width: 960;
  padding: 0px 2.5875rem 1.45rem;
  padding-top: 0;

  font-family: ${props => props.theme.fontFamily.sansSerif};
  font-size: 18px;
  font-weight: 800px;
  color: #ffecdb;

  @media only screen and (max-width: 640px) {
    margin: 0 auto;
    max-width: 960;
    padding: 0px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${props => props.theme.colors.homepageCard};

  min-width: 600px;
  max-width: 700px;
  padding: 3rem 5rem;

  border: 1px solid rgba(244, 244, 244, 0);
  border-radius: 3px;
  box-shadow: 0px 5px 10px 1px #aaaaaa;

  height: 100%;
`;

const Logo = styled.div`
  margin: 0;
  padding-bottom: 10px;
  & .img-circle {
    width: 150px;
    height: 150px;
  }
`;

const Welcome = styled.div`
  margin-bottom: 1.25rem;

  font-size: 3.052rem;
  font-weight: 800;
  font-family: ${props => props.theme.fontFamily.serif};
`;

const Tagline = styled.div`
  text-align: center;
  border-top: 1px solid rgba(244, 244, 244, 0.8);
  border-bottom: 1px solid rgba(244, 244, 244, 0.8);

  margin-bottom: 1.25rem;
  padding: 0.75rem 0px;

  @media only screen and (max-width: 440px) {
    padding-left: 2rem;
  }
`;

const Links = styled.ul`
  padding-left: 0px;
  & li {
    display: inline-block;
    border: 1px solid rgba(244, 244, 244, 0.8);
    border-radius: 10px;

    margin: 5px;

    &:hover {
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.3);
      background: ${props => props.theme.colors.primary};
    }

    a {
      display: inline-block;
      padding: 0.5rem 0.75rem;
      color: #ffecdb;
      text-decoration: none;
    }
  }

  @media only screen and (max-width: 640px) {
    padding-left: 40px;
  }
`;

const IndexPage = () => {
  const buildTime = useBuildTime();
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO buildTime={buildTime} />
        <GlobalStyle />
        <Container>
          <Card>
            <Logo>
              <img className="img-circle" src={logo} />
            </Logo>
            <Welcome>Hello, I'm Jon</Welcome>
            <Tagline>
              I have a passion for distributed systems, machine learning and
              brain-computer interfaces.
            </Tagline>
            <Links>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="https://twitter.com/geareduptech" target="_blank">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/jongear" target="_blank">
                  GitHub
                </a>
              </li>
              {/* <li>
                <a href="/resume">Resume</a>
              </li> */}
              <li>
                <a href="/contact">Contact</a>
              </li>
            </Links>
          </Card>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default IndexPage;
