/* @flow */

import React, { Component } from 'react';
import { withTheme } from 'styled-components';

type Props = {
  theme: any,
};

class Bar extends Component {
  props: Props;

  render() {
    return (
      <p>Bar</p>
    );
  }
}

export default withTheme(Bar);
