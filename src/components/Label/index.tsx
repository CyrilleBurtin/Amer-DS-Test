import { type Label } from '../../interfaces/label'
import './Label.scss'
import { classNames } from '../../utils'
import './Label.scss'

const Label = ({ variant = 'gray', children }: Label) => {
  const classes = {
    label: classNames('slm-label', `--${variant}`)
  }

  return <span className={classes.label}>{children}</span>
}

export default Label
