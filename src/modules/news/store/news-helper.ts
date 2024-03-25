import { PayloadAction } from '@reduxjs/toolkit';
import { PersonalizationItem } from 'src/modules/personalization/libraries/personalization-types';
import { DEFAULT_LIMIT, FiltersType, PaginationType } from 'src/modules/news/libraries/news-constants';
import { CategoryType, PersonalizationType, SourceType } from 'src/modules/personalization/libraries/personalization-constants';

export const initNewsState: NewsState = {
    list: [],
    filters: {
        source: [] as SourceType[],
        category: [] as CategoryType[],
        keyword: '',
        date: ''
    },
    pagination:{
        currentPage: 1,
        totalPage: 0,
        pageRangeDisplayed: DEFAULT_LIMIT,
        pageList: []
    },
    loading: false,
}

// -----------news

export const newsResetHelper = () => initNewsState;

export const updateNewsListHelper = (state: NewsState, action: PayloadAction<UpdateNewsListPayload>) => {
    const sortedNewsList = action.payload.items.sort((a, b) => (a.date && b.date ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0));
    state.list = sortedNewsList;
}

export const updateNewsFiltersHelper = (state: NewsState, action: PayloadAction<UpdateItemType<FiltersType,string|string[]>>) => {
    state.filters = Object.assign({}, state.filters, { [action.payload.itemName]: action.payload.itemValue, });

}

// -----------filters

export const initFilters = (filters: NewsFilter, favorites: PersonalizationItem[]): NewsFilter => {
    const
        favoriteSources = favorites.filter((item: PersonalizationItem) => item.key === PersonalizationType.source)[0].list,
        favoriteCategories = favorites.filter((item: PersonalizationItem) => item.key === PersonalizationType.category)[0].list;

    return ({
        ...filters,
        source: filters.source?.length === 0 ? favoriteSources : filters.source,
        category: filters.category?.length === 0 ? favoriteCategories : filters.category
    } as NewsFilter)
}

// -----------pagination

export const updatePaginationFulfilled = (state: NewsState, list:News[]) =>{
    const {
        currentPage, pageRangeDisplayed,
    } = state.pagination

state.pagination.totalPage = Math.ceil(list.length / pageRangeDisplayed);
state.pagination.pageList = list.slice(currentPage * pageRangeDisplayed, (currentPage + 1) * pageRangeDisplayed)
}

export const updatePaginationHelper = (state: NewsState, action: PayloadAction<UpdateItemType<PaginationType,number>>) => {
    state.pagination = Object.assign({}, state.pagination, { [action.payload.itemName]: action.payload.itemValue, });
    updatePaginationFulfilled(state,state.list)
}