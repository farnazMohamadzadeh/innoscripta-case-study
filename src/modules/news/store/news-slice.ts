import { createSlice } from '@reduxjs/toolkit'
import { initNewsListThunk } from './news-thunk';
import {
    initNewsState,
    newsResetHelper,
    updateNewsListHelper,
    updateNewsFiltersHelper,
    updatePaginationHelper,
    updatePaginationFulfilled,
} from './news-helper'

export const newsSlice = createSlice({
    name: 'news',
    initialState: initNewsState,
    reducers: {
        newsReset: newsResetHelper,
        updateNewsList: updateNewsListHelper,
        updateNewsFilters: updateNewsFiltersHelper,
        updatePagination: updatePaginationHelper
    },
    extraReducers: (builder) => {
        builder
            .addCase(initNewsListThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(initNewsListThunk.fulfilled, (state) => {
                updatePaginationFulfilled(state,state.list)
                state.loading = false;
            })
            .addCase(initNewsListThunk.rejected, (state) => {
                state.loading = false;
            });
    },
})

export const {
    newsReset,
    updateNewsList,
    updateNewsFilters,
    updatePagination
} = newsSlice.actions

export default newsSlice.reducer