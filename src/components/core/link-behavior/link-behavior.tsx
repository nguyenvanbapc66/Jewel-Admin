import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

export const LinkBehavior = React.forwardRef<any, LinkProps>((props, ref) => (
  <Link ref={ref} {...props} />
));
