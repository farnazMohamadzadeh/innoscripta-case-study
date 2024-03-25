import { NEW_YORK_TIMES_URL } from './news-constants';
import { SourceType } from 'src/modules/personalization/libraries/personalization-constants';
import { PersonalizationItem } from 'src/modules/personalization/libraries/personalization-types';

export const customizeGuardianNewsResponse = (data: GuardianNewsResult[]): News[] | undefined => {
    let response;
    if (data && data.length > 0) {
        response = data.map((item: GuardianNewsResult) => {
            return ({
                title: item.fields.headline,
                src: item.fields.thumbnail,
                source: SourceType.Guardian,
                category: item.sectionName,
                date: item.fields.firstPublicationDate
            } as News)
        })
    }
    return response;
}

export const CustomizeNewYorkTimesNewsResponse = (items: NewYorkTimesNews[]): News[] | undefined => {
    let response;
    if (items && items.length > 0) {
        response = items.map((item: NewYorkTimesNews) => {
            return ({
                title: item.headline.main,
                src: `${NEW_YORK_TIMES_URL}/${item.multimedia[0]?.url}`,
                source: SourceType.NewYorkTimes,
                category: item.section_name,
                date: item.pub_date,
            } as News)
        })
    }
    return response;
}

export const customizeNewsApiNewsResponse = (items: NewsApiNews[]): News[] | undefined => {
    let response;
    if (items && items.length > 0) {
        response = items.map((item: NewsApiNews) => {
            return ({
                title: item.title,
                src: item.urlToImage ?? '/images/empty.jpg',
                source: SourceType.NewsApi,
                category: '',
                date: item.publishedAt,
            } as News)
        })
    }
    return response;
}

export const newYorkTimesCategoryMapping: Record<string, string> = {
    'sport': 'Sports',
    'film': 'Movies',
    'technology':'Technology',
    'food':'Food',
    'culture':"Culture",
    'fashion':'Fashion'
  };

export const customizeNewYorkTimesCategory = (categories: string[]): string[] => {
    return categories.map(category => newYorkTimesCategoryMapping[category.toLowerCase()] || category);
  };

export function checkEmptyFavorites(favorites:PersonalizationItem[]){
    let isEmpty = true;

    favorites.map((step:PersonalizationItem)=> 
    {if(step.list.length > 0){

        isEmpty=false
    }})

    return isEmpty;
  }