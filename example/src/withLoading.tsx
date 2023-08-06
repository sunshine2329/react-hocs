import { Component } from "react";

type ComponentProps = {
  loading: boolean;
};

const withLoading = (WrappedComponent: React.FC<ComponentProps>) => {
  class WithLoading extends Component {
    state = {
      isLoading: true,
    };
    static displayName: string;

    componentDidMount() {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 2000);
    }

    render() {
      return (
        <WrappedComponent {...this.props} loading={this.state.isLoading} />
      );
    }
  }

  WithLoading.displayName = `withLoading(${
    WrappedComponent.displayName ?? WrappedComponent.name
  })`;

  return WithLoading;
};

export default withLoading;
