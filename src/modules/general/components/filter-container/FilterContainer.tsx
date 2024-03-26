import Container from '../container'
import styles from './FilterContainer.module.scss'
import React, { ReactNode } from 'react'

export default function FilterContainer({
    className,
    label,
    children
}: {
    className?: string;
    label?: string;
    children?: ReactNode
}) {
 

  return (
    <Container className={`${styles.root} ${className ?? ""}`}>
        <div className={styles.root__label}>
            {label}
        </div>
        {children}
    </Container>
  )
}