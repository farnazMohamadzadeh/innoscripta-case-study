export const NEWS_LIMIT = 100
export const DEFAULT_LIMIT = 8

export enum FiltersType {
    Keyword = 'keyword',
    Date = 'date',
    Category = 'category',
    Source = 'source'
}

export enum PaginationType{
    totalPage= 'totalPage',
    pageRangeDisplayed = 'pageRangeDisplayed',
    currentPage = 'currentPage',
    pageList = 'pageList'
}