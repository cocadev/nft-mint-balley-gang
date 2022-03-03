import React, { ReactNode } from 'react';
import cx from 'classnames';

import s from './index.module.scss';

type Props = {
  children: ReactNode;
  align?: 'center' | 'left' | 'right';
  color?: 'main';
  id?: string;
  className?: string;
};

const createHeading =
  (type: string) =>
  ({ children, className = '', align = 'center', color = 'main', ...rest }: Props) => {
    const hProps = {
      className: cx(
        s[`type_${type}`],
        s[`align_${align}`],
        s[`color_${color}`],
        s.title,
        className,
      ),
      children,
      ...rest,
    };
    return React.createElement(type, hProps, children);
  };

export const H1 = createHeading('h1');
export const H2 = createHeading('h2');
export const H3 = createHeading('h3');
export const H4 = createHeading('h4');
export const H5 = createHeading('h5');
export const H6 = createHeading('h6');
