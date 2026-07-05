import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../config/theme';
const logo = '/images/logo.svg';
import { SEO } from '../components';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${(props) => props.theme.fontFamily.sansSerif};
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: ${(props) => props.theme.colors.homepageCard};
    font-family: ${(props) => props.theme.fontFamily.sansSerif};
    font-weight: normal;
  }

  * {
    box-sizing: inherit;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;

  min-height: 100vh;
  padding: 3.5rem 1.25rem 3rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 420px;
  color: ${(props) => props.theme.colors.primaryFontColor};
`;

const Logo = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  margin-bottom: 1.25rem;
`;

const Name = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.serif};
  font-size: 1.75rem;
  margin: 0 0 0.4rem;
  color: ${(props) => props.theme.colors.primaryFontColor};
`;

const Tagline = styled.p`
  text-align: center;
  font-size: 1rem;
  opacity: 0.8;
  margin: 0 0 2.25rem;
`;

const LinkList = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 1rem;

  a {
    display: block;
    width: 100%;
    padding: 1rem 1.5rem;
    border-radius: 2rem;
    border: 1px solid rgba(255, 236, 219, 0.3);

    color: ${(props) => props.theme.colors.primaryFontColor};
    text-align: center;
    font-size: 1.05rem;
    font-weight: 600;
    text-decoration: none;

    transition: all ${(props) => props.theme.transitions.normal};

    &:hover,
    &:focus {
      background: ${(props) => props.theme.colors.primary};
      border-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.primaryFontColor};
      transform: translateY(-2px);
    }
  }
`;

const links = [
  {
    label: 'Instagram — @jon.gear.dev',
    href: 'https://www.instagram.com/jon.gear.dev',
  },
  {
    label: 'Threads — @jongeardev',
    href: 'https://www.threads.com/@jongeardev',
  },
  {
    label: 'GitHub — @jongear',
    href: 'https://github.com/jongear',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const LinksPage = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Container>
        <Card>
          <Logo src={logo} alt="Jon Gear" />
          <Name>Jon Gear</Name>
          <Tagline>
            Distributed systems, machine learning &amp; brain-computer
            interfaces.
          </Tagline>
          <LinkList>
            {links.map((link) => (
              <LinkItem key={link.href}>
                <a
                  href={link.href}
                  target={link.href.startsWith('/') ? undefined : '_blank'}
                  rel={
                    link.href.startsWith('/')
                      ? undefined
                      : 'noopener noreferrer'
                  }
                >
                  {link.label}
                </a>
              </LinkItem>
            ))}
          </LinkList>
        </Card>
      </Container>
    </>
  </ThemeProvider>
);

export const Head = () => (
  <SEO
    title="Links"
    description="Find Jon Gear across the web — Instagram, Threads, GitHub, and more."
  />
);

export default LinksPage;
