import styles from './Button.module.scss'
import React, { HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: 'contained' | 'outlined' | 'text'
}

export default function Button({
    variant = 'contained',
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            className={`${styles.root} ${props?.className ?? ''} variant_${variant}`}
        >
            {props.children}
        </button>
    )
}