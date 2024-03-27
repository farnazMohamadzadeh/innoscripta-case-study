import React from 'react'
import styles from './SearchInput.module.scss'
import FilterContainer from '../filter-container'
import SearchIcon from 'src/modules/general/components/icons/search'

export default function SearchInput({
    className,
    filterName,
    onChange
} : FilterProps<string>) {

    return (
        <FilterContainer
            label={'search'}
            className={`${styles.root} ${className ?? ''}`}
        >
            <div className={styles.root__row}>
                <input
                    className={styles.root__row__input}
                />
                <SearchIcon />
            </div>
        </FilterContainer>
    )
}