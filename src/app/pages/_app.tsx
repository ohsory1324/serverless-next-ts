import App, { Container } from 'next/app';
import { Fragment } from 'react';

import Nav from '../components/Nav';

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Fragment>
          <Nav />
          <Component {...pageProps} />
        </Fragment>
      </Container>
    );
  }
}

export default MyApp;
