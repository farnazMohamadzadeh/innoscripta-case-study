export function getFormattedDate(date: string ): string {
    const
        language = 'en-GB',
        seperator = ' - ',
        basicDate = new Date(date),
        year = basicDate.toLocaleString(language, { year: 'numeric', }),
        month = basicDate.toLocaleString(language, { month: 'numeric', }).padStart(2, '0'),
        day = basicDate.toLocaleString(language, { day: 'numeric', }).padStart(2, '0')
        
        return `${day}${seperator}${month}${seperator}${year}`;
}

export function handleScrollToRoot() {
    window.scroll({
        behavior: 'smooth',
        top: 0,
    });
}