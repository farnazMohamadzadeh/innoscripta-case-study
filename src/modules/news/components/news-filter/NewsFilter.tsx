import React, { useEffect, useState } from 'react'
import styles from './NewsFilter.module.scss'
import NewsFilterSection from './news-filter-section';
import Button from 'src/modules/general/components/button';
import { FiltersType } from '../../libraries/news-constants';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import DateInput from 'src/modules/general/components/date-input';
import FilterIcon from 'src/modules/general/components/icons/filter';
import SearchInput from 'src/modules/general/components/search-input';
import { updateNewsFilters } from 'src/modules/news/store/news-slice';
import { initNewsListThunk } from 'src/modules/news/store/news-thunk';
import { PersonalizationItem } from 'src/modules/personalization/libraries/personalization-types';
import { PersonalizationType } from 'src/modules/personalization/libraries/personalization-constants';

export default function NewsFilter() {
    const
        dispatch = useAppDispatch(),
        [open, setOpen] = useState<boolean>(false),
        filters = useAppSelector((state) => state.newsReducer.filters),
        favorites = useAppSelector((state) => state.personalizationReducer.favorites),
        sourceItems = favorites.filter((item: PersonalizationItem) => item.key === PersonalizationType.source)[0].list || [] as string[],
        categoryItems = favorites.filter((item: PersonalizationItem) => item.key === PersonalizationType.category)[0].list || [] as string[],

        handleFilterChange = (filterName: FiltersType, value: string | string[]) => {
            dispatch(updateNewsFilters({ itemName: filterName, itemValue: value }))
        },

        handleOpenToggle = () => {
            setOpen(prev => !prev)
        };

    useEffect(() => {
        dispatch(initNewsListThunk());
    }, [filters])
        
    return (
        <div className={styles.root}>
            <Button
                variant='outlined'
                onClick={handleOpenToggle}
            >
                <FilterIcon />
                {` filters`}
            </Button>
            <div className={`${styles.root__collapse} ${open ? styles.root__collapse__open : ''}`}>
                <div className={styles.root__collapse__row}>
                    <SearchInput
                    onChange={handleFilterChange}
                    filterName={FiltersType.Keyword}
                    className={styles.root__collapse__row__item}
                    />
                    <DateInput
                    className={styles.root__collapse__row__item}
                    onChange={handleFilterChange}
                    filterName={FiltersType.Date}
                    />
                </div>
                <div className={styles.root__collapse__row}>
                    <NewsFilterSection
                    filterName={FiltersType.Source}
                    className={styles.root__collapse__row__item}
                    items={sourceItems}
                    onChange={handleFilterChange}
                    />
                    <NewsFilterSection
                    filterName={FiltersType.Category}
                    className={styles.root__collapse__row__item}
                    items={categoryItems}
                    onChange={handleFilterChange}
                    />
                </div>
            </div>
        </div>
    )
}