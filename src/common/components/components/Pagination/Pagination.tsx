
import s from './Pagination.module.css'
import {PageSizeSelector} from "@/common/components/components/Pagination/PageSizeSelector/PageSizeSelector.tsx";
import {PaginationControls} from "@/common/components/components/Pagination/PaginationControls/PaginationControls.tsx";

type Props = {
    currentPage: number
    setCurrentPage: (page: number) => void
    pagesCount: number
    pageSize: number
    changePageSize: (pageSize: number) => void
}

export const Pagination = ({ currentPage, setCurrentPage, pagesCount, changePageSize, pageSize }: Props) => {
    if (pagesCount <= 1) return null

    return (
        <div className={s.container}>
            <PaginationControls currentPage={currentPage} pagesCount={pagesCount} setCurrentPage={setCurrentPage} />
            <PageSizeSelector pageSize={pageSize} changePageSize={changePageSize} />
        </div>
    )
}