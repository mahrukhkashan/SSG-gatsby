module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
    description: "A simple site built with Gatsby",
    author: "Mahrukh Kashan", // Add this line
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts/`,
      },
    },
    "gatsby-transformer-remark",
  ],
};