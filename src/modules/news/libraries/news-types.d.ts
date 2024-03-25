
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
    pagination: Pagination
    loading: boolean
}

interface Pagination {
    totalPage: number
    pageRangeDisplayed: number
    currentPage: number
    pageList: News[]
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

interface UpdateItemType<K,V> {
    itemName: K,
    itemValue: V
}


interface GuardianNewsFields {
    headline: string
    firstPublicationDate: string
    thumbnail: string
    shortUrl: string
    sectionName:string
}

interface GuardianNewsResult {
    apiUrl: string
    description: string
    id: string
    references: object
    sectionId: string
    sectionName: string
    type: string
    webTitle: string
    webUrl: string
    webPublicationDate: string
    isHosted: boolean
    pillarId: string
    pillarName: string
    fields: GuardianNewsFields
}

interface GuardianNewsResponse {
    currentPage: number
    pageSize: number
    pages: number
    results: GuardianNewsResult[]
    startIndex: number
    status: string
    total: number
    userTier: string
}

interface GuardianNews {
    response: GuardianNewsResponse
}

interface ResponseEntity<T> {
    config: object
    data: T
    header: object
    request: object
    status: number
    statusText: string
}


interface NewYorkTimesNewsMedia {
    rank: number,
    url: string
    height: number,
    width: number,
    legacy: object,
}

interface NewYorkTimesNewsHeadline {
    main: string
    kicker: string | null,
    content_kicker: null,
    print_headline: string
    name: string | null,
    seo: string | null,
    sub: string | null
}

interface NewYorkTimesNews {
    abstract: string
    web_url: string
    snippet: string
    lead_paragraph: string
    print_section: string
    section_name:string
    multimedia: NewYorkTimesNewsMedia[]
    headline: NewYorkTimesNewsHeadline
    keywords: object
    pub_date: string
}

interface NewYorkTimesNewsResponse {
    docs: NewYorkTimesNews[]
    meta: object
}

interface NewYorkTimesNews {
    status: string
    copyright: string
    response: NewYorkTimesNewsResponse
}

interface NewsApiNews {
    author: string
    title: string
    urlToImage: string
    publishedAt: string
}

interface NewsApiNews {
    status: string
    totalResults: number
    articles: NewsApiNews[]
}

interface NewsApiNews {
    status: string
    totalResults: number
    articles: NewsApiNews[]
}