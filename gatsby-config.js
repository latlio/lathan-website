require('dotenv').config();

const plugins = [
  {
    resolve: `gatsby-theme-mate`,
    options: {
      accessToken: process.env.ACCESS_TOKEN,
      spaceId: process.env.SPACE_ID,
    },
  },
];

module.exports = {
  plugins,
};
