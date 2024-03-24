import React from 'react'
import CbsIcon from 'src/modules/general/components/icons/cbs'
import FilmIcon from 'src/modules/general/components/icons/film'
import FoodIcon from 'src/modules/general/components/icons/food'
import SportIcon from 'src/modules/general/components/icons/sport'
import FashionIcon from 'src/modules/general/components/icons/fashion'
import NewsApiIcon from 'src/modules/general/components/icons/news-api'
import BenzingaIcon from 'src/modules/general/components/icons/benzinga'
import GuardianIcon from 'src/modules/general/components/icons/guardian'
import TechnologyIcon from 'src/modules/general/components/icons/technology'
import NikkeiAsiaIcon from 'src/modules/general/components/icons/nikkei-asia'
import NewYorkTimesIcon from 'src/modules/general/components/icons/new-york-times'
import { StepperType } from 'src/modules/personalization/libraries/personalization-types'
import { AuthorType, CategoryType, PersonalizationType, SourceType } from 'src/modules/personalization/libraries/personalization-constants'

const PersonalizationData: StepperType[] = [
    {
        key: PersonalizationType.source,
        options: [
            {
                title: SourceType.Guardian,
                icon: <GuardianIcon />
            },
            {
                title: SourceType.NewsApi,
                icon: <NewsApiIcon />
            },
            {
                title: SourceType.NewYorkTimes,
                icon: <NewYorkTimesIcon />
            },
        ]
    },
     {
        key: PersonalizationType.category,
        options: [
             {
                title: CategoryType.Sport,
                icon: <SportIcon />
            },
            {
                title: CategoryType.Fashion,
                icon: <FashionIcon />
            },
            {
                title: CategoryType.Food,
                icon: <FoodIcon />
            },
            {
                title: CategoryType.Film,
                icon: <FilmIcon />
            },
            {
                title: CategoryType.Technology,
                icon: <TechnologyIcon />
            },
        ]
    },
    {
        key: PersonalizationType.author,
        options: [
            {
                title: AuthorType.CBS,
                icon: <CbsIcon />
            },
            {
                title: AuthorType.NikkeiAsia,
                icon: <NikkeiAsiaIcon />
            },
            {
                title: AuthorType.Benzinga,
                icon: <BenzingaIcon />
            },
        ]
    }
]

export default PersonalizationData