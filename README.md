# react-hocs

How to Use Higher-Order Components in React

## Benefits of Using Higher-Order Components in React

1. Reusability: HOCs allow you to reuse component logic across multiple components, which can save time and reduce code duplication.
2. Flexibility: HOCs can take additional arguments, which allows you to customize the behavior of the HOC. This makes them a flexible way to add functionality to your components.
3. Separation of concerns: HOCs can help separate concerns in your code by encapsulating certain functionality in a separate component. This can make the code easier to read and maintain.
4. Composition: HOCs can be composed together to create more complex functionality. This allows you to build up functionality from smaller, reusable pieces.
5. Higher-order components can be used to implement cross-cutting concerns in your application such as authentication, error handling, logging, performance tracking, and many other features.

## Higher-Order Component Structure

1. Define the HOC function

```javascript
const hoc = (WrappedComponent) => {
  // ...
};
```

2. Define the new component

```javascript
class NewComponent extends React.Component {
  // ...
  render() {
    // ...
  }
}
```

3. pass props to the WrappedComponent. In the render() method of the NewComponent, pass all the props (including the additional props added by the HOC) to the WrappedComponent

```javascript
render() {
  return <WrappedComponent {...this.props} additionalProp={additionalProp} />
}
```

### When to Use HOCs in your React Code

#### Authentication

Suppose you have an application with various routes, some of which require the user to be authenticated before accessing them.

Instead of duplicating the authentication logic in each component or route, you can create an HOC called withAuth that checks if the user is authenticated and redirects them to the login page if not. Then, you can wrap the specific components or routes that need authentication with this HOC, reducing duplication and enforcing consistent authentication behavior.

#### Logging

Imagine you want to log some data every time a specific set of components mount or update. Rather than adding the logging logic to each component, you can create an HOC called withLogger that handles the logging functionality.

By wrapping the relevant components with withLogger, you can achieve consistent logging across those components.

#### Styling and Theming

You might have a design system with reusable styles and themes. You can create an HOC named withTheme that provides the necessary theme-related props to a component.

This way, the wrapped component can easily access and apply the appropriate styles based on the provided theme.
