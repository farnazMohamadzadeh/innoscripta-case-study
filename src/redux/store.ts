import { configureStore } from '@reduxjs/toolkit'
import personalizationSlice from 'src/modules/personalization/store/personalization-slice';

export const store = configureStore({
    reducer: {
        personalizationReducer: personalizationSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;