import axios from 'axios';
import { NewsSource } from './news-api-utils';
import { 
  GUARDIAN_API_KEY, NEWS_API_API_KEY,
  NEWS_LIMIT, NEW_YORK_TIMES_API_KEY
} from 'src/modules/news/libraries/news-constants';
import { 
  CustomizeNewYorkTimesNewsResponse, customizeGuardianNewsResponse,
  customizeNewYorkTimesCategory, customizeNewsApiNewsResponse
} from 'src/modules/news/libraries/news-utils';

//---------NewsApi Source

export class NewsApiNewsSource extends NewsSource {

  private initNewsParams(filters: NewsFilter): string {
    const
      keyword = `&q=${filters.category && filters.category.map(category => `${category.toLowerCase()}`).join(' OR ')}${filters.keyword ? `AND ${filters.keyword}` : ''}`,
      date = filters.date ? `&from=${filters.date}` : '',
      apiKey = `apiKey=${NEWS_API_API_KEY}`,
      searchIn = '&searchIn=title'

    return `${apiKey}${searchIn}${date}${keyword}`;
  }


  private getNewsApiUrl(filters: NewsFilter): string {
    const
      baseUrl = 'https://newsapi.org/v2/everything',
      queryParams = this.initNewsParams(filters);
    return `${baseUrl}?${queryParams}`;
  }

  protected async getNewsData(filters: NewsFilter): Promise<News[] | undefined> {
    const apiUrl = this.getNewsApiUrl(filters);

    try {
      const
        response: ResponseEntity<NewsApiNews> = await axios.get(apiUrl),
        newsList = response?.data?.articles
          ? customizeNewsApiNewsResponse(response.data.articles)
          : undefined;

      if (newsList) {
        return (newsList);
      }
    } catch (error) {
      console.error(`Error fetching NewsApi data:`, error);
    }
  }
}

//---------Guardian Source

export class GuardianNewsSource extends NewsSource {

  private initNewsParams(filters: NewsFilter): string {
    const
      format = 'format=json',
      pageSize = `&page-size=${NEWS_LIMIT}`,
      fields = '&show-fields=all',

      keyword = filters.keyword ? `&q=${filters.keyword}` : '',
      date = filters.date ? `&from-date=${filters.date}` : '',
      apiKey = `&api-key=${GUARDIAN_API_KEY}`;

    let categories = '';
    if (filters.category && filters.category.length > 0) {
      categories = filters.category.map(category => `section=${category.toLowerCase()}`).join('&');
    }

    return `${format}${pageSize}${fields}${keyword}${date}${`&${categories}`}${apiKey}`;
  }


  private getNewsApiUrl(filters: NewsFilter): string {
    const
      baseUrl = 'https://content.guardianapis.com/search',
      Params = this.initNewsParams(filters);
    return `${baseUrl}?${Params}`;
  }

  protected async getNewsData(filters: NewsFilter): Promise<News[] | undefined> {
    const apiUrl = this.getNewsApiUrl(filters);

    try {
      const
        response: ResponseEntity<GuardianNews> = await axios.get(apiUrl),
        newsList = response?.data?.response?.results
          ? customizeGuardianNewsResponse(response?.data?.response?.results)
          : undefined;

      if (newsList) {
        return (newsList);
      }
    } catch (error) {
      console.error(`Error fetching Guardian data:`, error);
    }
  }
}

//---------NewYorkTimes Source

export class NewYorkTimesNewsSource extends NewsSource {

  private initNewsParams(filters: NewsFilter): string {
    const
      pageSize = `&page-size=${NEWS_LIMIT}`,
      keyword = filters.keyword ? `&q=${filters.keyword}` : '',
      date = filters.date ? `&fq=pub_date:("${filters.date}")` : '',
      apiKey = `api-key=${NEW_YORK_TIMES_API_KEY}`;

    let filter = '';

    if (filters.category && filters.category.length > 0) {
      const
        castedCategories = customizeNewYorkTimesCategory(filters.category),
        categoryFilters = castedCategories.map(category => `"${category}"`);
      filter += `&fq=section_name:(${categoryFilters.join(',')})`;
    }

    return `${apiKey}${pageSize}${keyword}${date}${filter}`;
  }

  private getNewsApiUrl(filters: NewsFilter): string {
    const
      baseUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
      queryParams = this.initNewsParams(filters);
    return `${baseUrl}?${queryParams}`;
  }

  protected async getNewsData(filters: NewsFilter): Promise<News[] | undefined> {
    const apiUrl = this.getNewsApiUrl(filters);

    try {
      const
        response: ResponseEntity<NewYorkTimesNews> = await axios.get(apiUrl),
        newsList = response?.data?.response?.docs
          ? CustomizeNewYorkTimesNewsResponse(response.data.response.docs)
          : undefined;

      if (newsList) {
        return (newsList);
      }
    } catch (error) {
      console.error(`Error fetching New York Times data:`, error);
    }
  }
}