**[Setup](#setup)** | **[Development](#development)** | **[Deployment](#deployment)**

# Jon Gear's Website And Blog

Thanks for checking out my site. This is the complete code for my website and blog.

## Setup

```sh
npm install
```

## Development

```sh
npm start
```

## Deployment

My site is backed by [Travis CI](https://docs.travis-ci.com/) for a full CD/CI
pipeline experience. What this means, any pull request will require a successful
verified build by Travis CI as well as a successfully deployed preview site from [Netlify](https://www.netlify.com/)
before being allowed to be merged up to the branch. Once merged into master,
Netlify will build the Gatsby site into a static distributable and publish it to the production website.

### Why Include Travis?

True, Netlify can render previews and publish on it's own but there is one piece
that Netlify cannot do which I deem critical to long term stability. That piece is
running linting and testing checks. It is important to me that not only my code builds
and deploys properly but that it adheres to a set standard to help enforce clenliness
and longevity of the project.

## Powered By

This website leverages the [gatsby-starter-minimal-blog](https://github.com/LekoArts/gatsby-starter-minimal-blog) project created
by [LekoArts](https://www.lekoarts.de/).
