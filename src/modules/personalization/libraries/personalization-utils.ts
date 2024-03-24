import { PersonalizationType } from './personalization-constants';

export const getPersonalizationStepTitle = (key: number): string => {
    let title = '';
    switch (key) {
        case PersonalizationType.source:
            title = 'Sources'
            break;
        case PersonalizationType.category:
            title = 'Categories'
            break;
        case PersonalizationType.author:
            title = 'Authors'
            break;
    }
    return title;
}