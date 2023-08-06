import { useEffect, ComponentType, ComponentProps } from "react";

const withLogger = (WrappedComponent: ComponentType) => {
  const WithLogger = (props: ComponentProps<typeof WrappedComponent>) => {
    useEffect(() => {
      // Log data on component mount
      console.log(`Component ${WrappedComponent.name} mounted.`);
      return () => {
        // Log data on component unmount
        console.log(`Component ${WrappedComponent.name} unmounted.`);
      };
    }, []);

    useEffect(() => {
      // Log data on component update
      console.log(`Component ${WrappedComponent.name} updated.`);
    });

    return <WrappedComponent {...props} />;
  };

  WithLogger.displayName = `withLogger(${
    WrappedComponent.displayName ?? WrappedComponent.name
  })`;
  return WithLogger;
};

export default withLogger;
