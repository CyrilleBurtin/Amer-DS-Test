import { ReactNode } from 'react';
import { classNames } from '../../utils';
import './Label.scss';
import { LABEL_VARIANT } from './constants';

interface Label {
  variant?: string;
  children: string | ReactNode;
}

const Label = ({ variant = LABEL_VARIANT.GRAY, children }: Label) => {
  const classes = {
    label: classNames('slm-label', `--${variant}`)
  };

  return <span className={classes.label}>{children}</span>;
};

export default Label;
