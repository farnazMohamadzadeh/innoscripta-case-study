import React from 'react'
import { RootState } from '@/src/redux/store'
import styles from './PersonalizationStep.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import PersonalizationStepItem from './personalization-step-item'
import { updatePersonalization } from 'src/modules/personalization/store/personalization-slice'
import { getPersonalizationStepTitle } from 'src/modules/personalization/libraries/personalization-utils'
import { PersonalizationOptionType, StepperType } from 'src/modules/personalization/libraries/personalization-types'
interface PersonalizationStepProps {
    step: StepperType
}

export default function PersonalizationStep({ step }: PersonalizationStepProps) {
     const
        dispatch = useDispatch(),
        currentStep = useSelector((state: RootState) => state.personalizationReducer.currentStep),
        favorites = useSelector((state: RootState) => state.personalizationReducer.favorites),
        currentFavoritsList = favorites.filter((item) => item.key === step.key)[0].list,
        stepIndex = favorites.findIndex((item => item.key === step.key)),

        handleClick = (item: PersonalizationOptionType) => {
            dispatch(updatePersonalization({ value: item.title, key: step.key }))
        };
   
    return (
        <>
            {currentStep === stepIndex && (
                <div className={styles.root}>
                    <div className={styles.root__step}>
                        <h2 className={styles.root__step__number}>
                            {step.key}
                        </h2>
                        <h5 className={styles.root__step__title}>
                           {`Select Preferred ${getPersonalizationStepTitle(step.key)}`}
                        </h5>
                    </div>
                    <div className={styles.root__container}>
                        {step.options && step.options.length > 0 && step.options.map((item: PersonalizationOptionType, index: number) => (
                            <PersonalizationStepItem
                                key={`step-item-${index}`}
                                item={item}
                                className={styles.root__item}
                                onClick={() => handleClick(item)}
                                selected={currentFavoritsList.includes(item.title)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}