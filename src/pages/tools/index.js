import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Layout, Wrapper, Header } from '../../components';
const logo = '/images/logo.svg';
import config from '../../config/website';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 3rem 6rem;
  background-color: ${(props) => props.theme.colors.bg};
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 3rem 2rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
`;

const ToolCard = styled.div`
  border: 1px solid ${(props) => props.theme.colors.grey.light};
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  h3 {
    margin-top: 0;
    color: ${(props) => props.theme.colors.primary};
  }

  p {
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.grey.dark};
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Tools = () => (
  <Layout>
    <Wrapper>
      <Helmet title={`Tools | ${config.siteTitle}`} />
      <Header>
        <Link to="/">
          <img src={logo} style={{ height: '25px', paddingRight: '10px' }} />
          {config.siteTitle}
        </Link>
      </Header>
      <Content>
        <h1>Tools</h1>
        <p>
          A collection of tools and projects I have built. These are designed to solve
          specific problems and are available for anyone to use.
        </p>

        <ToolCard>
          <h3>PDF Redaction Checker</h3>
          <p>
            A tool for finding and removing bad redactions in PDF documents. This helps
            identify text that appears redacted visually but is still accessible in the
            document, which can be a security risk.
          </p>
          <a href="/tools/redact-check" target="_blank" rel="noopener noreferrer">
            Launch Tool →
          </a>
        </ToolCard>
      </Content>
    </Wrapper>
  </Layout>
);

export default Tools;
