## Version
1.4.6

## Reproduction

https://github.com/hongymagic/bug-withTheme-styled-components

## Steps to reproduce

Pull above repo, then run `yarn && yarn flow`

## Expected Behavior

No errors to be reported by flow

## Actual Behavior

Flow reports errors. Seems like Flow interprets the `class Bar extends Component` as class type which is incompatible with `React$Component`.

```
yarn flow v0.24.5
$ flow
src/App.js:18
 18:         <Bar />
             ^^^^^^^ React element `Bar`. Expected React component instead of
 18: export default withTheme(Bar);
                    ^^^^^^^^^^^^^^ React$Component. See: src/Bar.js:18

src/Bar.js:18
 18: export default withTheme(Bar);
                    ^^^^^^^^^^^^^^ function call
 18: export default withTheme(Bar);
                              ^^^ class type: Bar. This type is incompatible with
 32:     withTheme: (component: Component) => React$Component<*, ThemeProviderProps, *>,
                                ^^^^^^^^^ union: type application of identifier `React$Component` | function type. See lib: flow-typed/npm/styled-components_v1.4.x.js:32
  Member 1:
   21:     | React$Component<*, *, *>
             ^^^^^^^^^^^^^^^^^^^^^^^^ type application of identifier `React$Component`. See lib: flow-typed/npm/styled-components_v1.4.x.js:21
  Error:
   18: export default withTheme(Bar);
                                ^^^ class type: Bar. This type is incompatible with
   21:     | React$Component<*, *, *>
             ^^^^^^^^^^^^^^^^^^^^^^^^ React$Component. See lib: flow-typed/npm/styled-components_v1.4.x.js:21
  Member 2:
   22:     | (props: *) => React$Element<*>;
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. See lib: flow-typed/npm/styled-components_v1.4.x.js:22
  Error:
   22:     | (props: *) => React$Element<*>;
             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ function type. Callable signature not found in. See lib: flow-typed/npm/styled-components_v1.4.x.js:22
   18: export default withTheme(Bar);
                                ^^^ statics of Bar


Found 2 errors
```
