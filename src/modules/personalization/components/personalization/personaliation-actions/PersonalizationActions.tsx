import React from 'react'
import Button from 'src/modules/general/button'
import styles from './PersonalizationActions.module.scss'


export default function PersonalizationActions() {

    return (
        <div className={styles.root}>
            <Button
                variant='text'
                 aria-disabled={true}
            >
                {`previous`}
            </Button>
            <Button
                variant='text'
            >
                {`continue`}
            </Button>
        </div>
    )
}