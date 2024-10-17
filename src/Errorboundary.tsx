import React, { ReactNode } from 'react';

interface MyComponentProps {
  children?: ReactNode;
}

interface MyComponentState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<MyComponentProps, MyComponentState> {
  constructor(props: MyComponentProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): MyComponentState {
    // Update state to display the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Log error information to an error reporting service
    console.error("Error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children || null;
  }
}

export default ErrorBoundary;
