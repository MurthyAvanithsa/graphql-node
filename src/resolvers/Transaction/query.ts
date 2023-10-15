import {intArg, list, queryField, stringArg} from 'nexus';

export const transaction = queryField('transaction', {
  type: list('Transaction'),

  resolve: (parent, args, ctx) => {
    return ctx.prisma.transaction.findMany();
  },
});
