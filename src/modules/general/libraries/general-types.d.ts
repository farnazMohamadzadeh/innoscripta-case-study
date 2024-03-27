interface FilterProps<T> {
    className: string
    filterName: FilterType
    onChange: (filterName: FilterType, value: T) => void
}