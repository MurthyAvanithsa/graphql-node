import {list, objectType} from 'nexus';

export const Transaction = objectType({
  name: 'Transaction',
  definition(t) {
    t.id('id');
    t.string('type');
    t.string('amount');
  },
});
