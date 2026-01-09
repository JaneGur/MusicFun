import type {PlaylistData} from "@/features/playlists/api/playlistsApi.types.ts";
import {PlaylistDescription} from "@/features/playlists/ui/PlaylistsPage/PlaylistItem/PlaylistDescription/PlaylistDescription.tsx";
import {PlaylistCover} from "@/features/playlists/ui/PlaylistsPage/PlaylistItem/PlaylistCover/PlaylistCover.tsx";
import s from './PlaylistItem.module.css';

type Props = {
    playlist: PlaylistData
    deletePlaylist: (playlistId: string) => void
    editPlaylist: (playlist: PlaylistData) => void
}

export const PlaylistItem = ({ playlist, editPlaylist, deletePlaylist }: Props) => {
    return (
        <div className={s.container}>
            <PlaylistCover playlistId={playlist.id} images={playlist.attributes.images} />
            <div className={s.content}>
                <PlaylistDescription attributes={playlist.attributes} />
                <div className={s.actions}>
                    <button className={s.editButton} onClick={() => editPlaylist(playlist)}>Редактировать</button>
                    <button className={s.deleteButton} onClick={() => deletePlaylist(playlist.id)}>Удалить</button>
                </div>
            </div>
        </div>
    )
}