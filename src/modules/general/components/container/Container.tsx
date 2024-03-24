import styles from './Container.module.scss'
import React, { HTMLAttributes } from 'react'

export default function Container({ ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={`${styles.root} ${props?.className ?? ''}`}
        >
            {props.children}
        </div>
    )
}