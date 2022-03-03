import { FC } from 'react';
import cn from 'classnames';

import s from './index.module.scss';

import { Loader } from 'assets';

interface IProps {
  onClick: () => void;
  className?: string;
  loading?: boolean;
}

const Button: FC<IProps> = ({ children, onClick, className, loading }) => {
  return (
    <button disabled={loading} className={cn(s.button, className)} onClick={onClick} type="button">
      {children}
      {loading && <Loader height="20px" />}
    </button>
  );
};

export default Button;
