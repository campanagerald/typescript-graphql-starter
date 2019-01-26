import { Context } from 'apollo-server-core';

const Query = {
  healthCheck: (_: Object, args: Object, ctx: Context) => {
    return 'OK';
  }
};

export = {
  Query
};
