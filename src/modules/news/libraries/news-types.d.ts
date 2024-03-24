
interface News {
    title: string
    src: string
    description: string
    date: string
    category: string
    source: string
}

interface NewsState {
    list: News[]
    filters: NewsFilter
    loading: boolean
}

interface NewsFilter {
    keyword: string,
    date: string,
    source: SourceType[]
    category: CategoryType[]
}

interface UpdateNewsListPayload {
    items: News[],
    source:string
}

interface UpdateKeyWord<K,V> {
    itemName: K,
    itemValue: V
}