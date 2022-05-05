import { IResolvers } from 'graphql-tools';
import type from './type';
import query from './query';

export const LIST: string[] = [];
const resolvers: IResolvers = {
  ...query,
  ...type,
};

export default resolvers;
