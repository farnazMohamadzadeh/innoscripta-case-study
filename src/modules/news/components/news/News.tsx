import styles from './News.module.scss'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NewsList from 'src/modules/news/components/news-list'
import Container from 'src/modules/general/components/container'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { initNewsListThunk } from 'src/modules/news/store/news-thunk'
import { checkEmptyFavorites } from 'src/modules/news/libraries/news-utils'

export default function News() {
  const
    navigate = useNavigate(),
    dispatch = useAppDispatch(),
    favorites = useAppSelector((state) => state.personalizationReducer.favorites);

  useEffect(() => {
    if (checkEmptyFavorites(favorites)) {
      navigate('/');
    }else{
      dispatch(initNewsListThunk());
    }
  }, [])

  return (
    <Container className={styles.root}>
      <NewsList />
    </Container>
  )
}