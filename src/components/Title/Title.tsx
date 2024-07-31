import { ElementType, ReactNode } from 'react'
import { TITLE_VARIANT } from './constants'
import './Title.scss'
import { classNames } from '../../utils'

interface Title {
  is: ElementType
  children: string | ReactNode
  variant?: string
}

const Title = ({ is, variant, children, ...props }: Title) => {
  const TitleTag = is

  const classes = {
    title: classNames('slm-title', `--${variant}`)
  }

  return (
    <TitleTag className={classes.title} {...props}>
      {children}
    </TitleTag>
  )
}

export default Title
