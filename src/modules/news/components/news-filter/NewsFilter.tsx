import React, { useState } from 'react'
import styles from './NewsFilter.module.scss'
import SearchInput from 'src/modules/general/components/search-input/SearchInput'
import FilterContainer from 'src/modules/general/components/filter-container';
import { FiltersType } from '../../libraries/news-constants';

export default function NewsFilter() {
    const 
        [value, setValue] = useState<string>(''),

        handleChange = (newValue: string) => {
            setValue(newValue)
        };
        
    return (
        <div className={styles.root}>
            <div className={styles.root__row}>
                <SearchInput
                    value={value}
                    onChange={(e) => handleChange(e.currentTarget.value)}
                    className={styles.root__row__item}
                />
                <SearchInput
                    value={value}
                    onChange={(e) => handleChange(e.currentTarget.value)}
                    className={styles.root__row__item}
                />
            </div>
            <div className={styles.root__row}>
                <FilterContainer
                    label={FiltersType.Source}
                    className={styles.root__row__item}
                 />
                <FilterContainer
                    label={FiltersType.Category}
                    className={styles.root__row__item}/>
            </div>
        </div>
    )
}