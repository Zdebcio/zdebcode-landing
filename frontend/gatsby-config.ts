import dotenv from 'dotenv';
import type { GatsbyConfig } from 'gatsby';
import path from 'path';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL || 'http://127.0.0.1:1337',
  collectionTypes: ['skill']
};

const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules'
);

const config: GatsbyConfig = {
  siteMetadata: {
    title: `ZdebCode`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public']
      }
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
        web: [
          {
            name: 'Rubik',
            file: 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -80,
        duration: 1000
      }
    }
  ]
};

export default config;
