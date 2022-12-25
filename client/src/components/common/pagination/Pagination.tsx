import React, {FC, useEffect, useState} from 'react';
import './Pagination.scss'


interface PaginationProps {
    onChangedPage: (selectedPage: number) => void,
    totalCount: number,
    currentPage: number
}


const Pagination: FC <PaginationProps> = ({
                                              onChangedPage,
                                              currentPage,
                                              totalCount,
                                          }) => {

    const toPrev = (): void => {
        setPortionNumber(portionNumber - 1)
    }

    const toNext = (): void => {
        setPortionNumber(portionNumber + 1)
    }

    let pageCount: number = Math.ceil(totalCount / 10 );

    let pages = [];

    for(let i = 1; i <= pageCount; i++){
        pages.push(i);
    }


    let portionSize = 5;
    let portionCount = Math.ceil(pageCount / portionSize);
    const [portionNumber, setPortionNumber] = useState<number>(1);
    let leftPortionPageNumber: number = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber: number = portionNumber * portionSize;


    return (

            <div className={'pagesBlock'}>
                {portionNumber > 1 ? <button className={'pageNumber'} onClick={toPrev} >&#8678;</button> : <button className={'disabled'} disabled>&#8678;</button>}

                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber )
                    .map(p => {
                        return    <span onClick={() => {onChangedPage(p)}} className={currentPage === p ? 'activePage' : 'pageNumber'} key={p}>{p}</span>
                    })}
                {portionCount > portionNumber ? <button className={'pageNumber'} onClick={toNext}>&#8680;</button> : <button className={'disabled'} disabled>&#8680;</button>}
            </div>
    )
}



export default Pagination;