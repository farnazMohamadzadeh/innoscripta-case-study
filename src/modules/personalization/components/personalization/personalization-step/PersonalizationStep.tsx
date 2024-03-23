import React from 'react'
import styles from './PersonalizationStep.module.scss'
import PersonalizationStepItem from './personalization-step-item'
import { PersonalizationOptionType, StepperType } from '../../../libraries/personalization-types'
interface InterestsStepProps {
    step: StepperType
}

export default function PersonalizationStep({ step }: InterestsStepProps) {
   
    return (
        <>
            {step.key === 1 && (
                <div className={styles.root}>
                    <div className={styles.root__step}>
                        <h2 className={styles.root__step__number}>
                            {step.key}
                        </h2>
                        <h5 className={styles.root__step__title}>
                           {`Choose Preferred Sources`}
                        </h5>
                    </div>
                    <div className={styles.root__container}>
                        {step.options && step.options.length > 0 && step.options.map((item: PersonalizationOptionType, index: number) => (
                            <PersonalizationStepItem
                                key={`step-item-${index}`}
                                item={item}
                                className={styles.root__item}
                                onClick={undefined}
                                selected={false}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}