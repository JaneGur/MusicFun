import {useUpdatePlaylistMutation} from "@/features/playlists/api/playlistsApi.ts";
import type {SubmitHandler, UseFormHandleSubmit, UseFormRegister} from "react-hook-form";
import type {UpdatePlaylistArgs} from "@/features/playlists/api/playlistsApi.types.ts";
import s from './EditPlaylistForm.module.css';

type Props = {
    playlistId: string
    register: UseFormRegister<UpdatePlaylistArgs>
    handleSubmit: UseFormHandleSubmit<UpdatePlaylistArgs>
    editPlaylist: (playlist: null) => void
    setPlaylistId: (playlistId: null) => void
}

export const EditPlaylistForm = ({
                                     playlistId,
                                     handleSubmit,
                                     register,
                                     editPlaylist,
                                     setPlaylistId,
                                 }: Props) => {
    const [updatePlaylist] = useUpdatePlaylistMutation()

    const onSubmit: SubmitHandler<UpdatePlaylistArgs> = data => {
        if (!playlistId) return
        updatePlaylist({ playlistId, body: data }).then(() => {
            setPlaylistId(null)
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <h2>Edit playlist</h2>
            <div className={s.formGroup}>
                <input {...register('title')} placeholder={'Playlist title'} />
            </div>
            <div className={s.formGroup}>
                <input {...register('description')} placeholder={'Playlist description'} />
            </div>
            <div className={s.actions}>
                <button type={'submit'} className={s.saveButton}>Save</button>
                <button type={'button'} className={s.cancelButton} onClick={() => editPlaylist(null)}>
                    Cancel
                </button>
            </div>
        </form>
    )
}