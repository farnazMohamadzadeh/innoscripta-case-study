import React, { useEffect, useState } from 'react'
import styles from './NewsFilterSection.module.scss'
import NewsFilterSectionItem from './news-filter-section-item';
import FilterContainer from 'src/modules/general/components/filter-container'

interface InnerProps extends FilterProps<string[]> {
    items: string[],
}

export default function NewsFilterSection({
    className,
    filterName,
    items,
    onChange
} : InnerProps) {
     const
        [filterList, setFilterList] = useState<string[]>([] as string[]),

        handleChange = (item: string, isActive: boolean) => {
            if (isActive) {
                setFilterList([...filterList, item])
            } else {
                setFilterList(filterList.filter((name: string) => name !== item))
            }
        };
    useEffect(() => {
        if (onChange) {
            onChange(filterName, filterList)
        }
    }, [filterList,])

    return (
        <>
        {items && items.length > 0 && (
            <FilterContainer
            label={filterName}
            className={`${styles.root} ${className ?? ''}`}
        >
            <div className={styles.root__inner}>
                {items.map((item:string, index: number) => (
                    <NewsFilterSectionItem
                        key={`${filterName}-item-${index}`}
                        clickable = {items.length > 1}
                        item={item}
                        onChange={handleChange}
                    />
                ))}
            </div>
        </FilterContainer>
        )}
        </>
    )
}