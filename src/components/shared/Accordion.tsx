import styles from './Accordion.module.scss'
import classNames from 'classnames/bind'
import { PropsWithChildren, useState } from 'react'

const cx = classNames.bind(styles)

interface AccordionProps {
  label: string
}

export default function Accordion({
  label,
  children,
}: PropsWithChildren<AccordionProps>) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  return (
    <div className={cx('wrap-accordion', isExpanded && 'open')}>
      <div
        className={cx('wrap-header')}
        onClick={() => {
          setIsExpanded((prev) => !prev)
        }}
      >
        <span>{label}</span>
        <IconArrowDown className={cx('ico-arrow-down')} />
      </div>
      <div className={cx('wrap-content')}>{children}</div>
    </div>
  )
}

function IconArrowDown({ className }: { className: string }) {
  return (
    <svg className={className} version="1.1" viewBox="0 0 512 512">
      <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 " />
    </svg>
  )
}
