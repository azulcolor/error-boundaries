import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallBackComponent: ReactNode;
  resetCondition?: any;
  error?: boolean
}

interface State {
  hasError: boolean;
  resetCondition: any;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, resetCondition: props.resetCondition };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.resetCondition !== state.resetCondition) {
      return { hasError: false, resetCondition: props.resetCondition };
    }
    return null;
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    return { hasError: true}
  }

  render() {
    if (this.state.hasError || this.props.error) {
      return this.props.fallBackComponent;
    }

    return this.props.children;
  }
}
