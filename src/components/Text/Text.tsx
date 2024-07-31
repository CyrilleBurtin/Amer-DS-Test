import { ReactNode } from 'react'
import { classNames } from '../../utils'
import './Text.scss'

interface Text {
  className?: string
  children: string | ReactNode
}

const Text = ({ className, children }: Text) => {
  const classes = {
    text: classNames('slm-text', className)
  }

  return <p className={classes.text}>{children}</p>
}

export default Text
