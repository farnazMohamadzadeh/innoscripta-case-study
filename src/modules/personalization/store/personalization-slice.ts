import { createSlice } from '@reduxjs/toolkit'
import {
    initPersonalizationHelper,
    initPersonalizationState,
    updateCurrentStepHelper,
    updatePersonalizationHelper,
} from './personalization-helper'

export const personalizationSlice = createSlice({
    name: 'personalization',
    initialState: initPersonalizationState,
    reducers: {
        personalizationReset: initPersonalizationHelper,
        updatePersonalization: updatePersonalizationHelper,
        updateCurrentStep: updateCurrentStepHelper
    },
})

export const {
    personalizationReset,
    updatePersonalization,
    updateCurrentStep
} = personalizationSlice.actions

export default personalizationSlice.reducer