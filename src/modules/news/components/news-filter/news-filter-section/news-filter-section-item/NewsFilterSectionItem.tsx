import React, { useEffect, useState } from 'react'
import styles from './NewsFilterSectionItem.module.scss'

interface InnerProps {
    item: string
    clickable?: boolean
    onChange: (item: string, isActive: boolean) => void
}

export default function NewsFilterSectionItem({
    item,
    onChange,
    clickable = false,
}: InnerProps) {
    const
        [active, setActive] = useState<boolean>(false),

        handleCheckToggle = () => {
            if(clickable){
                setActive(prev => !prev)
            }
        };

    useEffect(() => {
        if (onChange && clickable) {
            onChange(item, active)
        }
    }, [active])

    return (
        <div
            className={`${styles.root} ${(active || !clickable) ? styles.root__active : ""}`}
            onClick={handleCheckToggle}
        >
            {item}
        </div>
    )
}