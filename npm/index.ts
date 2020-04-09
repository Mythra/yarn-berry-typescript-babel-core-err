import * as Babel from '@babel/core';

export default function VisitorPlugin(): Babel.PluginObj {
  return {
    name: 'visitor-plugin',
    visitor: {},
  };
}