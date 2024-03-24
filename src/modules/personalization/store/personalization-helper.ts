import { PayloadAction } from '@reduxjs/toolkit';
import { PersonalizationType } from 'src/modules/personalization/libraries/personalization-constants';
import {
    PersonalizationState, UpdateCurrentStepPayload, UpdatePersonalizationPayload
} from 'src/modules/personalization/libraries/personalization-types';

export const initPersonalizationState: PersonalizationState = {
    favorites: [
         {
            key: PersonalizationType.source,
            list: []
        },
        {
            key: PersonalizationType.category,
            list: []
        },
        {
            key: PersonalizationType.author,
            list: []
        }
    ],
    currentStep: 0
}

export const initPersonalizationHelper = () => initPersonalizationState;

export const updatePersonalizationHelper = (state: PersonalizationState, action: PayloadAction<UpdatePersonalizationPayload>) => {
    const updatedItemIndex = state.favorites.findIndex((item) => item.key === action.payload.key);
    const currentList = state.favorites[updatedItemIndex].list;

    if (currentList.includes(action.payload.value)) {
        state.favorites[updatedItemIndex].list = currentList.filter((item) => item !== action.payload.value);
    } else {
        currentList.push(action.payload.value);
        state.favorites[updatedItemIndex].list = currentList;
    }
}

export const updateCurrentStepHelper = (state: PersonalizationState, action: PayloadAction<UpdateCurrentStepPayload>) => {
    state.currentStep = action.payload.step
}