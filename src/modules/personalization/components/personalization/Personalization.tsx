import React from 'react'
import styles from './Personalization.module.scss';
import PersonalizationActions from './personaliation-actions';
import PersonalizationStep from './personalization-step/PersonalizationStep';
import { StepperType } from 'src/modules/personalization/libraries/personalization-types';
import PersonalizationData from 'src/modules/personalization/components/personalization-data';
import Card from 'src/modules/general/components/card';
import Container from 'src/modules/general/components/container/Container';


export default function Personalization() {
    return (
        <Container className={styles.root}>
            {PersonalizationData && PersonalizationData.length > 0 && (
            <>
                <h1>
                    {`What Is Your Favorite News ?`}
                </h1>
                <p>
                    {`Let's Personalize Your News Feed by 3 Steps`}
                </p>
                <Card>
                    {PersonalizationData.map((step: StepperType, index: number) => (
                        <PersonalizationStep
                            key={`personalization-step-${index}`}
                            step = {step}
                         />
                    ))}
                    <PersonalizationActions />
                </Card>
            </>
            )}
        </Container>
    )
}