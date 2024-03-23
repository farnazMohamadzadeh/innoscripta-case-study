import { ReactNode } from 'react'

interface PersonalizationOptionType {
    title: string
    icon: ReactNode
}

interface StepperType {
    key: PersonalizationType
    options: PersonalizationOptionType[]
}

interface PersonalizationItem {
    key: PersonalizationType
    list: string[]
}

interface UpdateCurrentStepPayload {
    step: number
}

interface PersonalizationState {
    favorites: PersonalizationItem[]
    currentStep: number
}

interface UpdateInterestsPayload {
    key: PersonalizationType
    value: string
}