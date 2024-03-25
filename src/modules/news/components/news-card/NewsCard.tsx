import React from 'react'
import styles from './NewsCard.module.scss'
import Card from 'src/modules/general/components/card'
import Button from 'src/modules/general/components/button'
import { getFormattedDate } from 'src/modules/general/libraries/general-utils'

interface NewsCardProps {
    item: News
    className: string
}

export default function NewsCard({
    item,
    className,
}: NewsCardProps) {

    return (
        <Card className={`${styles.root} ${className ?? ''}`}>
            <div className={styles.root__image}>
                <img src={item.src} />
            </div>
            <div className={styles.root__row}>
                <p>
                    {item.category}
                </p>
                <p>
                    {item.source}
                </p>
            </div>
            <h5 className={styles.root__title}>
                {item.title}
            </h5>
            <div className={styles.root__row}>
                <p>
                    {getFormattedDate(item.date)}
                </p>
                <Button
                    variant='text'
                    className={styles.root__button}
                >
                    {`read more`}
                </Button>
            </div>
        </Card>
    )
}