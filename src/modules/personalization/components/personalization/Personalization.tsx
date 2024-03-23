import React from 'react'
import styles from './Personalization.module.scss';
import PersonalizationData from '../personalization-data';
import PersonalizationActions from './personaliation-actions';
import { StepperType } from '../../libraries/personalization-types';
import PersonalizationStep from './personalization-step/PersonalizationStep';


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