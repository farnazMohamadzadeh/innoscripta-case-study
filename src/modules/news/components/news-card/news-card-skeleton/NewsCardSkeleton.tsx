import React from 'react'
import styles from './NewsCardSkeleton.module.scss'
import Card from 'src/modules/general/components/card'

export default function NewsCardSkeleton({className = ''}: {className: string}) {

    return (
        <Card className={`${styles.root} ${className}`}>
            <div className={styles.root__image} />
            <div className={styles.root__row}>
                <p />
                <p />
            </div>
            <div className={styles.root__title} />
             <div className={styles.root__row}>
                <p />
                <p />
            </div>
        </Card>
    )
}