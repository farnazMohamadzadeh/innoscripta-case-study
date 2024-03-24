import { createSlice } from '@reduxjs/toolkit'
import {
    initNewsState,
    newsResetHelper,
    updateNewsListHelper,
    updateNewsFiltersHelper,
} from './news-helper'

export const newsSlice = createSlice({
    name: 'news',
    initialState: initNewsState,
    reducers: {
        newsReset: newsResetHelper,
        updateNewsList: updateNewsListHelper,
        updateNewsCriteria: updateNewsFiltersHelper,
    }
})

export const {
    newsReset,
    updateNewsList,
    updateNewsCriteria,
} = newsSlice.actions

export default newsSlice.reducer