

# eslint-plugin-mattermost

**This package has been replaced by [`@mattermost/eslint-plugin`](https://www.npmjs.com/package/@mattermost/eslint-plugin). It's source code is located [here](https://github.com/mattermost/mattermost/tree/master/webapp/platform/eslint-plugin).**

----

An ESLint plugin containing the configuration used by Mattermost as well as support for custom rules specific to the Mattermost code base.

More information on our style guide is available [here](https://docs.mattermost.com/developer/style-guide.html).

## Custom Rules

### no-dispatch-getstate

Prevents passing a [redux](https://redux.js.org/) store's `getState` into its `dispatch` as an unnecessary second argument.

We started doing this accidentally at some point because of a misunderstanding about how [redux-thunk](https://github.com/reduxjs/redux-thunk) worked, so this stops anyone from making that same mistake again.

Examples of **incorrect** code for this rule:
```javascript
export function someAction() {
    return (dispatch, getState) => {
        dispatch(doSomething(), getState);
    };
}
```

Examples of **correct** code for this rule:
```javascript
export function someAction() {
    return (dispatch) => {
        dispatch(doSomething());
    };
}
```
