# @babel/core types breaking in yarn berry #

This shows an example project @babel/core types not being able to be resolved
within yarn berry, but not within npm. I might be able to get around it by
unplugging dependencies (however which ones should I unplug?), plus I'd prefer
to not unplug if at all possible as it's a single project within a mono-repo.

---

To see it working in NPM go inside the `npm` directory, and run:

  - `npm install && npm run build`

There will be an output of javascript files at: `build/tsc/index.js`.

---

To see it break with berry, go inside the `berry` directory, and run:

  - `yarn && yarn run build`

There will be errors that look something like:

```
.yarn/cache/@babel-parser-npm-7.9.4-66a1371672-2.zip/node_modules/@babel/parser/typings/babel-parser.d.ts:11:71 - error TS2307: Cannot find module '@babel/types'.

11 export function parse(input: string, options?: ParserOptions): import('@babel/types').File;
                                                                         ~~~~~~~~~~~~~~

.yarn/cache/@babel-parser-npm-7.9.4-66a1371672-2.zip/node_modules/@babel/parser/typings/babel-parser.d.ts:16:81 - error TS2307: Cannot find module '@babel/types'.

16 export function parseExpression(input: string, options?: ParserOptions): import('@babel/types').Expression;
                                                                                   ~~~~~~~~~~~~~~


Found 2 errors.
```