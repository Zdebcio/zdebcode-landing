import { GatsbyNode } from 'gatsby';

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
  actions.createTypes(`
    type MainInfoQuery {
      strapiMainInfo: StrapiMainInfo!
    }

    type StrapiMainInfo {
      github: String!
      linkedin: String!
      email: String!
      name: String!
      position: String!
    }
  `);
};
