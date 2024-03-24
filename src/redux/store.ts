import { configureStore } from '@reduxjs/toolkit'
import newsSlice from 'src/modules/news/store/news-slice';
import personalizationSlice from 'src/modules/personalization/store/personalization-slice';

export const store = configureStore({
    reducer: {
        personalizationReducer: personalizationSlice,
        newsReducer: newsSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;