import {PlaylistItem} from "@/features/playlists/ui/PlaylistsPage/PlaylistItem/PlaylistItem.tsx";
import {useState} from "react";
import {useForm} from "react-hook-form";
import type {PlaylistData, UpdatePlaylistArgs} from "@/features/playlists/api/playlistsApi.types.ts";
import {useDeletePlaylistMutation} from "@/features/playlists/api/playlistsApi.ts";
import {EditPlaylistForm} from "@/features/playlists/ui/PlaylistsPage/EditPlaylistForm/EditPlaylistForm.tsx";
import s from './PlaylistsList.module.css'

type Props = {
    playlists: PlaylistData[]
    isPlaylistsLoading: boolean
}

export const PlaylistsList = ({ playlists, isPlaylistsLoading }: Props) => {
    const [playlistId, setPlaylistId] = useState<string | null>(null)
    const [editingPlaylist, setEditingPlaylist] = useState<PlaylistData | null>(null)

    const { register, handleSubmit, reset } = useForm<UpdatePlaylistArgs>()

    const [deletePlaylist] = useDeletePlaylistMutation()

    const deletePlaylistHandler = (playlistId: string) => {
        if (confirm('Вы уверены, что хотите удалить плейлист?')) {
            deletePlaylist(playlistId)
        }
    }

    const editPlaylistHandler = (playlist: PlaylistData | null) => {
        if (playlist) {
            setPlaylistId(playlist.id)
            setEditingPlaylist(playlist)
            reset({
                title: playlist.attributes.title,
                description: playlist.attributes.description,
                tagIds: playlist.attributes.tags.map(t => t.id),
            })
        } else {
            setPlaylistId(null)
            setEditingPlaylist(null)
            reset({
                title: '',
                description: '',
                tagIds: [],
            })
        }
    }

    return (
        <div className={s.items}>
            {!playlists.length && !isPlaylistsLoading && <h2>Плейлисты не найдены</h2>}
            {playlists.map(playlist => {
                const isEditing = playlistId === playlist.id

                return (
                    <div className={s.item} key={playlist.id}>
                        {isEditing ? (
                            <EditPlaylistForm
                                playlistId={playlistId}
                                playlist={editingPlaylist}
                                handleSubmit={handleSubmit}
                                register={register}
                                editPlaylist={editPlaylistHandler}
                                setPlaylistId={setPlaylistId}
                            />
                        ) : (
                            <PlaylistItem
                                playlist={playlist}
                                deletePlaylist={deletePlaylistHandler}
                                editPlaylist={editPlaylistHandler}
                            />
                        )}
                    </div>
                )
            })}
        </div>
    )
}