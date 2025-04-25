const { GraphQLDefinitionsFactory } = require('@nestjs/graphql');
const { join } = require('path');

const definitionsFactory = new GraphQLDefinitionsFactory();

definitionsFactory.generate({
  typePaths: ['src/*.gql'],
  path: join(process.cwd(), 'graphql.ts'),
  outputAs: 'class',
  watch: false,
  skipResolverArgs: true,
  additionalHeader: '/* eslint-disable */\n/* tslint:disable */\n',
  nullableByDefault: true,
});
