import styles from './SearchInput.module.scss'
import FilterContainer from '../filter-container'
import React, { InputHTMLAttributes } from 'react'
import SearchIcon from 'src/modules/general/components/icons/search'

export default function SearchInput({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <FilterContainer
            label={'search'}
            className={`${styles.root} ${props?.className ?? ''}`}
        >
            <div className={styles.root__row}>
                <input
                    {...props}
                    className={styles.root__row__input}
                />
                <SearchIcon />
            </div>
        </FilterContainer>
    )
}