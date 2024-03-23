import React, { HTMLAttributes } from 'react'
import styles from './PersonalizationStepItem.module.scss'
import { PersonalizationOptionType } from '@/src/modules/personalization/libraries/personalization-types'

interface InterestsStepItemProps extends HTMLAttributes<HTMLDivElement> {
    item: PersonalizationOptionType
    selected: boolean
}

export default function PersonalizationStepItem({
    item,
    selected,
}: InterestsStepItemProps) {

    return (
        <div className={styles.root}>
            {item.icon}
            {item.title}
        </div>
    )
}