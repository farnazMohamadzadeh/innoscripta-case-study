import { RootState } from '@/src/redux/store';
import Button from 'src/modules/general/button'
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './PersonalizationActions.module.scss'
import { updateCurrentStep } from 'src/modules/personalization/store/personalization-slice';


export default function PersonalizationActions() {
     const
        navigate = useNavigate(),
        dispatch = useDispatch(),
        state = useSelector((state: RootState) => state.personalizationReducer),
        currentStep = state.favorites[state.currentStep],
        list = state.favorites[state.currentStep].list,
        [isLastStep, setIsLastStep] = useState<boolean>(false),
        [isFirstStep, setIsFirstStep] = useState<boolean>(true),

        handleBackClick = () => {
            if (!isFirstStep) {
                dispatch(updateCurrentStep({ step: state.currentStep - 1 }))
            }
        },

        handleNextClick = () => {            
            if (list.length > 0) {
                if (isLastStep) {
                    navigate('/news');
                } else {
                    dispatch(updateCurrentStep({ step: state.currentStep + 1 }))
                }
            }
        };

    useEffect(() => {
        setIsLastStep(state.currentStep === (state?.favorites.length-1));
    }, [currentStep])

    useEffect(() => {
        setIsFirstStep(state.currentStep === 0)
    }, [state])

    return (
        <div className={`${styles.root} ${isFirstStep ? styles.root__firstStep : ''}`}>
            {!isFirstStep && (
                <Button
                    onClick={handleBackClick}
                    variant='text'
                >
                    {`Back`}
                </Button>
            )}
            <Button
                onClick={handleNextClick}
                variant='text'
                 aria-disabled={list.length === 0}
            >
                {`next`}
            </Button>
        </div>
    )
}