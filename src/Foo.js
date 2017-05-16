/* @flow */

import React from 'react';
import { withTheme } from 'styled-components';

type Props = {
  theme: any,
};

const Foo = (props: Props) => (
  <p>Foo</p>
);

export default withTheme(Foo);
