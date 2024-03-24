import styles from './Card.module.scss'
import React, { HTMLAttributes } from 'react'

export default function Card({ ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={`${styles.root} ${props?.className ?? ''}`}
        >
            {props.children}
        </div>
    )
}