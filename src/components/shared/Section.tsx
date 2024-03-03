import classNames from 'classnames/bind'
import styles from './Section.module.scss'

const cx = classNames.bind(styles)

export default function Section({
  children,
  className,
  title,
}: {
  children: React.ReactNode
  className?: string
  title?: string
}) {
  return (
    <section className={cx(['container', className])}>
      {title && <div className={cx('txt-title')}>{title}</div>}
      {children}
    </section>
  )
}
