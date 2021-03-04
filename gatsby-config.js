require('dotenv').config();

plugins: [
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `ebg4nec2a5y1`,
      accessToken: `d9mXUrB4X38qVz5mZVx7SYNf3zgM2Mhp4wLdH7NdPdg`,
    },
  },
]

module.exports = {
  plugins,
};
