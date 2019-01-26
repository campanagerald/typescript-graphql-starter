import { gql } from 'apollo-server-express';

const HealthQuerySchema = gql`
  type Query {
    healthCheck: String
  }
`;

export = HealthQuerySchema;
