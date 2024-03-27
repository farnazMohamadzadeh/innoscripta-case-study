import React from 'react'
import styles from './NewsList.module.scss'
import NewsCard from 'src/modules/news/components/news-card';
import ResponsivePagination from 'react-responsive-pagination';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { updatePagination } from 'src/modules/news/store/news-slice';
import NewsCardSkeleton from 'src/modules/news/components/news-card/news-card-skeleton';
import { DEFAULT_LIMIT, PaginationType } from 'src/modules/news/libraries/news-constants';

export default function NewsList() {
    const
        dispatch = useAppDispatch(),
        loading = useAppSelector((state) => state.newsReducer.loading),

        {
            currentPage,
            totalPage,
            pageList,
        } = useAppSelector((state) => state.newsReducer.pagination),

        handleScrollToRoot = () => {
            window.scroll({
                behavior: 'smooth',
                top: 0,
            });
        },

        handlePageChange = (page: number) => {
            dispatch(updatePagination({ itemName: PaginationType.currentPage, itemValue: page }))
            handleScrollToRoot()
        }
      
    return (
        <div className={styles.root}>
            {loading ? (
                <>
                    {[...Array(DEFAULT_LIMIT)].map(() => (
                        <NewsCardSkeleton
                            key= {`news-skeleton-${Math.random()}`}
                            className={styles.root__card}
                        />
                    ))}
                </>
            ) : ( 
                <>
                  {pageList && pageList.length > 0 ? (
                    <>
                        {pageList.map((item: News, index: number) => (
                            <NewsCard
                                key={`news-${index}`}
                                item = {item}
                                className={styles.root__card}
                            />
                        ))}
                        <ResponsivePagination
                            current={currentPage}
                            total={totalPage - 1}
                            className={'pagination'}
                            onPageChange={page => handlePageChange(page)}
                            maxWidth={3}
                        />
                    </>
                ) : (
                    <div className={styles.root__empty}>
                        <img src={'/images/no-result.webp'}/>
                        <p>
                        {`No News !!`}
                        </p>
                    </div>
                )}
            </>
        )}
    </div>
    )
}