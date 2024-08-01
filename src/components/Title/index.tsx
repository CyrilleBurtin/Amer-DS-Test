import { ReactHTML, ReactNode } from 'react'
import './Title.scss'
import { classNames } from '../../utils'

interface Title {
  is: keyof ReactHTML
  children: string | ReactNode
  variant?: string
  className?: string
}

const Title = ({ is, variant = 'gray', children, className }: Title) => {
  const TitleTag = is

  const classes = {
    title: classNames('slm-title', className, `--${variant}`)
  }

  return <TitleTag className={classes.title}>{children}</TitleTag>
}

export default Title
