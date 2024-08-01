import { ReactHTML, ReactNode } from 'react';
import { TITLE_VARIANT } from './constants';
import { classNames } from '../../utils';
import './Title.scss';

interface Title {
  is: keyof ReactHTML;
  children: string | ReactNode;
  variant?: string;
  className?: string;
}

const Title = ({
  is,
  variant = TITLE_VARIANT.GRAY,
  children,
  className
}: Title) => {
  const TitleTag = is;

  const classes = {
    title: classNames('slm-title', className, `--${variant}`)
  };

  return <TitleTag className={classes.title}>{children}</TitleTag>;
};

export default Title;
