import React, { HTMLAttributes } from 'react'
import styles from './PersonalizationStepItem.module.scss'
import { PersonalizationOptionType } from 'src/modules/personalization/libraries/personalization-types'

interface PersonalizationStepItemProps extends HTMLAttributes<HTMLDivElement> {
    item: PersonalizationOptionType
    selected: boolean
}

export default function PersonalizationStepItem({
    item,
    selected,
     ...props
}: PersonalizationStepItemProps) {

    return (
        <div
        {...props}
         className={`${styles.root} ${selected ? styles.root__selected : ''}`}
         >
            {item.icon}
            <span>
                {item.title}
            </span>
        </div>
    )
}