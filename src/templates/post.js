import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import ReactDisqusComments from 'react-disqus-comments';
import logo from '../images/logo.svg';
import { Layout, Wrapper, Header, Subline, SEO, PrevNext } from '../components';
import config from '../config/website';

const Content = styled.article`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  border-radius: 1rem;
  padding: 2rem 4.5rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  p {
    font-size: 1.1rem;
    letter-spacing: -0.003em;
    line-height: 1.58;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1rem;
    }
  }

  .prism-code {
    padding: 0.75rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    font-size: 16px;
  }

  .img-container {
    text-align: center;

    img {
      max-width: 100%;
    }
  }
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const PostContent = styled.div`
  margin-top: 4rem;
`;

const DisqusContainer = styled.div`
  margin-top: 2rem;
`;

const Post = ({
  pageContext: { slug, prev, next },
  data: { mdx: postNode, site },
  location,
}) => {
  const post = postNode.frontmatter;

  const disqus = {
    shortname: config.disqusShortName,
    url: `${site.siteMetadata.siteUrl}${location.pathname}`,
    identifier: location.pathname,
    title: post.title.text,
    language: 'en',
  };

  return (
    <Layout>
      <Wrapper>
        <SEO postPath={slug} postNode={postNode} article />
        <Header>
          <Link to="/blog">
            <img src={logo} style={{ height: '25px', paddingRight: '10px' }} />
            {config.blogTitle}
          </Link>
        </Header>
        <Content>
          <Title>{post.title}</Title>
          <Subline>
            {post.date} &mdash; {postNode.timeToRead} Min Read &mdash; In{' '}
            {post.categories.map((cat, i) => (
              <React.Fragment key={cat}>
                {!!i && ', '}
                <Link to={`/categories/${kebabCase(cat)}`}>{cat}</Link>
              </React.Fragment>
            ))}
          </Subline>
          <PostContent>
            <MDXRenderer>{postNode.code.body}</MDXRenderer>
          </PostContent>
          <PrevNext prev={prev} next={next} />
          <DisqusContainer>
            <ReactDisqusComments {...disqus} />
          </DisqusContainer>
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    next: PropTypes.object,
    prev: PropTypes.object,
  }).isRequired,
  data: PropTypes.shape({
    mdx: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

Post.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null,
  }),
};

export const postQuery = graphql`
  query postBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
      excerpt(pruneLength: 300)
      frontmatter {
        title
        date(formatString: "MM/DD/YYYY")
        categories
      }
      timeToRead
      parent {
        ... on File {
          mtime
          birthtime
        }
      }
    }
  }
`;
