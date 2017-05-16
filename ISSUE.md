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
