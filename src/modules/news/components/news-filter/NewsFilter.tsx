import React, { useEffect } from 'react'
import styles from './NewsFilter.module.scss'
import NewsFilterSection from './news-filter-section';
import { FiltersType } from '../../libraries/news-constants';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import DateInput from 'src/modules/general/components/date-input';
import SearchInput from 'src/modules/general/components/search-input';
import { updateNewsFilters } from 'src/modules/news/store/news-slice';
import { initNewsListThunk } from 'src/modules/news/store/news-thunk';
import { PersonalizationItem } from 'src/modules/personalization/libraries/personalization-types';
import { PersonalizationType } from 'src/modules/personalization/libraries/personalization-constants';

export default function NewsFilter() {
    const
        dispatch = useAppDispatch(),
        filters = useAppSelector((state) => state.newsReducer.filters),
        favorites = useAppSelector((state) => state.personalizationReducer.favorites),
        sourceItems = favorites.filter((item: PersonalizationItem) => item.key === PersonalizationType.source)[0].list || [] as string[],
        categoryItems = favorites.filter((item: PersonalizationItem) => item.key === PersonalizationType.category)[0].list || [] as string[],

        handleFilterChange = (filterName: FiltersType, value: string | string[]) => {
            dispatch(updateNewsFilters({ itemName: filterName, itemValue: value }))
        };

    useEffect(() => {
        dispatch(initNewsListThunk());
    }, [filters])
        
    return (
        <div className={styles.root}>
            <div className={styles.root__row}>
                <SearchInput
                    onChange={handleFilterChange}
                    filterName={FiltersType.Date}
                    className={styles.root__row__item}
                />
                <DateInput
                    className={styles.root__row__item}
                    onChange={handleFilterChange}
                    filterName={FiltersType.Date}
                />
            </div>
            <div className={styles.root__row}>
                <NewsFilterSection
                    filterName={FiltersType.Source}
                    className={styles.root__row__item}
                    items={sourceItems}
                    onChange={handleFilterChange}
                 />
                <NewsFilterSection
                    filterName={FiltersType.Category}
                    className={styles.root__row__item}
                    items={categoryItems}
                    onChange={handleFilterChange}
                />
            </div>
        </div>
    )
}