import React, { useEffect, useState } from 'react'
import styles from './SearchInput.module.scss'
import FilterContainer from '../filter-container'
import SearchIcon from 'src/modules/general/components/icons/search'

export default function SearchInput({
    className,
    filterName,
    onChange
} : FilterProps<string>) {
    const
        [keyword, setKeyword] = useState<string>(''),

        handleChange = (value: string) => {
            setKeyword(value)
        };

  useEffect(() => {
    if (onChange) {
      onChange(filterName, keyword)
    }
  }, [keyword])

    return (
        <FilterContainer
            label={'search'}
            className={`${styles.root} ${className ?? ''}`}
        >
            <div className={styles.root__row}>
                <input
                    value={keyword}
                    placeholder={'Enter Keyword'}
                    onChange={(e) => handleChange(e.currentTarget.value)}
                    className={styles.root__row__input}
                />
                <SearchIcon />
            </div>
        </FilterContainer>
    )
}