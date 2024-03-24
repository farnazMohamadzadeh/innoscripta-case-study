import React from 'react'
import styles from './Personalization.module.scss';
import PersonalizationActions from './personaliation-actions';
import PersonalizationStep from './personalization-step/PersonalizationStep';
import { StepperType } from 'src/modules/personalization/libraries/personalization-types';
import PersonalizationData from 'src/modules/personalization/components/personalization-data';


export default function Personalization() {
    return (
        <div className={styles.root}>
            {PersonalizationData && PersonalizationData.length > 0 && (
            <>
                <h1>
                    {`What Is Your Favorite News ?`}
                </h1>
                <p>
                    {`Let's Personalize Your News Feed by 3 Steps`}
                </p>
                <div className={styles.root__container}>
                    {PersonalizationData.map((step: StepperType, index: number) => (
                        <PersonalizationStep
                            key={`personalization-step-${index}`}
                            step = {step}
                         />
                    ))}
                    <PersonalizationActions />
                </div>
            </>
            )}
        </div>
    )
}