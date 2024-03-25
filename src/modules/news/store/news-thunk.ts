import { initFilters } from './news-helper';
import { updateNewsList } from './news-slice';
import { RootState } from '@/src/redux/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { SourceType } from 'src/modules/personalization/libraries/personalization-constants';
import { GuardianNewsSource, NewYorkTimesNewsSource, NewsApiNewsSource } from './api/news-api';

export const initNewsListThunk = createAsyncThunk<void, void, { state: RootState }>(
    'news/initList',
    async (_, { getState, dispatch }) => {

        const filters = initFilters(getState().newsReducer.filters, getState().personalizationReducer.favorites);
        const getPromises: Promise<void>[] = [];
        const finalPromise: { items: News[], source: SourceType }[] = [];

        if (filters.source) {
            for (const source of filters.source) {
                let newsSource;
                switch (source) {
                    case SourceType.Guardian:
                        newsSource = new GuardianNewsSource();
                        break;
                    case SourceType.NewsApi:
                        newsSource = new NewsApiNewsSource();
                        break;
                    case SourceType.NewYorkTimes:
                        newsSource = new NewYorkTimesNewsSource();
                        break;
                    default:
                        break;
                }

                if (newsSource) {
                    const getPromise = (async () => {
                        try {
                            const response = await newsSource.initNewsList(filters) || [];
                            finalPromise.push({ items: response, source: source as SourceType });
                        } catch (e) {
                            console.error(`Error fetching data:`, e);
                        }
                    })();

                    getPromises.push(getPromise);
                }
            }

            await Promise.all(getPromises);

            const result = finalPromise.reduce((accumulator, currentValue) => {
                return { items: [...accumulator.items, ...currentValue.items], source: currentValue.source };
            }, { items: [], source: SourceType.Guardian }); 
            dispatch(updateNewsList(result));
        }
    }
);
