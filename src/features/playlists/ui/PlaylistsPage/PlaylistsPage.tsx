import {type ChangeEvent, useState} from "react";
import {useFetchPlaylistsQuery} from "@/features/playlists/api/playlistsApi.ts";
import {CreatePlaylistForm} from "@/features/playlists/ui/PlaylistsPage/CreatePlaylistForm/CreatePlaylistForm.tsx";
import s from './PlaylistsPage.module.css';
import {useDebounceValue} from "@/common/hooks/useDebounceValue.ts";
import {Pagination} from "@/common/components/components/Pagination/Pagination.tsx";
import {PlaylistsList} from "@/features/playlists/ui/PlaylistsPage/PlaylistsList/PlaylistsList.tsx";
import {PlaylistsSkeletonLoader} from "@/features/playlists/ui/PlaylistsPage/PlaylistsSkeletonLoader";
import 'react-loading-skeleton/dist/skeleton.css';
import {LinearProgress} from "@/common/components/LinearProgress/LinearProgress.tsx";


export const PlaylistsPage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(2)

    const [search, setSearch] = useState('')
    const debounceSearch = useDebounceValue(search)

    const { data, isLoading, isFetching } = useFetchPlaylistsQuery(
        {
            search: debounceSearch,
            pageNumber: currentPage,
            pageSize,
        },
    )

    const changePageSizeHandler = (size: number) => {
        setPageSize(size)
        setCurrentPage(1)
    }

    const searchPlaylistHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
        setCurrentPage(1)
    }

    if (isLoading) {
        return (
            <div className={s.container}>
                <h1>Мои плейлисты</h1>
                <PlaylistsSkeletonLoader count={pageSize} />
            </div>
        )
    }

    return (
        <div className={s.container}>
            <h1>Мои плейлисты</h1>
            <CreatePlaylistForm />
            <input
                type="search"
                placeholder={'Поиск плейлиста по названию...'}
                onChange={searchPlaylistHandler}
            />
            <PlaylistsList playlists={data?.data || []} isPlaylistsLoading={isLoading} />
            {isFetching && <LinearProgress />}
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pagesCount={data?.meta.pagesCount || 1}
                pageSize={pageSize}
                changePageSize={changePageSizeHandler}
            />
        </div>
    )
}