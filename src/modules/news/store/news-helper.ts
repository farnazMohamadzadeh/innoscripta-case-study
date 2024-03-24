import { PayloadAction } from '@reduxjs/toolkit';
import { FiltersType } from 'src/modules/news/libraries/news-constants';
import { PersonalizationItem } from 'src/modules/personalization/libraries/personalization-types';
import { CategoryType, PersonalizationType, SourceType } from 'src/modules/personalization/libraries/personalization-constants';

export const initNewsState: NewsState = {
    list: [],
    filters: {
        source: [] as SourceType[],
        category: [] as CategoryType[],
        keyword: '',
        date: ''
    },
    loading: false,
}


export const newsResetHelper = () => initNewsState;

export const updateNewsListHelper = (state: NewsState, action: PayloadAction<UpdateNewsListPayload>) => {
    const sortedNewsList = action.payload.items.sort((a, b) => (a.date && b.date ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0));
    state.list = sortedNewsList;
}

export const updateNewsFiltersHelper = (state: NewsState, action: PayloadAction<UpdateKeyWord<FiltersType,string|string[]>>) => {
    state.filters = Object.assign({}, state.filters, { [action.payload.itemName]: action.payload.itemValue, });

}

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