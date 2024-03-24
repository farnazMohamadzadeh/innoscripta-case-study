import React from 'react'
import styles from './News.module.scss'
import NewsCard from 'src/modules/news/components/news-card'
import Container from 'src/modules/general/components/container'
import NewsCardSkeleton from '../news-card/news-card-skeleton/NewsCardSkeleton'

export default function News() {
    const news = {
        title: "this is test for news card",
        src: "",
        description: "this is test for news card",
        date: "22 March 2024",
        category: "fashion",
        source: "news api"
    }

  return (
    <Container className={styles.root}>
        <NewsCard
            item={news}
            className={styles.root__card}
        />
        <NewsCardSkeleton className={styles.root__card} />
    </Container>
  )
}