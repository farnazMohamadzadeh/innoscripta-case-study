import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import styles from './DateInput.module.scss'
import React, { useEffect, useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css';
import FilterContainer from 'src/modules/general/components/filter-container'

export default function DateInput({
    className,
    filterName,
    onChange
} : FilterProps<string>) {
    const
        [selectedDate, setSelectedDate] = useState<Date>(),

        handleChange = (newDate: Date) => {
            setSelectedDate(newDate)
        };

    useEffect(() => {
        if (onChange) {
            onChange(filterName, selectedDate ? format(selectedDate, 'yyyy-MM-d') : '')
        }
    }, [selectedDate])

    return (
        <FilterContainer
            label={'date'}
            className={`${styles.root} ${className ?? ""}`}
        >
            <div className={styles.root__datepicker}>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleChange}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select a date"
                />
            </div>
        </FilterContainer>
    )
}