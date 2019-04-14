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

My site is backed by [travis-ci](https://docs.travis-ci.com/) for a full CD/CI
pipeline experience. What this means, any pull request will require a successful
verified build by Travis CI before being allowed to be merged up to the branch. 
Once merged into master, Travis CI will build the Gatsby site into a static distributable
to be sent to Netlify to update the production website.

## Powered By 
This website leverages the [gatsby-starter-minimal-blog](https://github.com/LekoArts/gatsby-starter-minimal-blog) project created
by [LekoArts](https://www.lekoarts.de/).
