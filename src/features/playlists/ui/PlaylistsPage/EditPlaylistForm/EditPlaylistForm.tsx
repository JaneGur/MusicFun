import {useUpdatePlaylistMutation} from "@/features/playlists/api/playlistsApi.ts";
import type {SubmitHandler, UseFormHandleSubmit, UseFormRegister} from "react-hook-form";
import type {PlaylistData, UpdatePlaylistArgs} from "@/features/playlists/api/playlistsApi.types.ts";
import s from './EditPlaylistForm.module.css';

type Props = {
    playlistId: string
    playlist: PlaylistData | null
    register: UseFormRegister<UpdatePlaylistArgs>
    handleSubmit: UseFormHandleSubmit<UpdatePlaylistArgs>
    editPlaylist: (playlist: null) => void
    setPlaylistId: (playlistId: null) => void
}

export const EditPlaylistForm = ({
                                     playlistId,
                                     playlist,
                                     handleSubmit,
                                     register,
                                     editPlaylist,
                                     setPlaylistId,
                                 }: Props) => {
    const [updatePlaylist] = useUpdatePlaylistMutation()

    const onSubmit: SubmitHandler<UpdatePlaylistArgs> = data => {
        if (!playlistId) return
        updatePlaylist({ playlistId, body: data })
        setPlaylistId(null)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <h2>Редактирование плейлиста</h2>
            <div className={s.formGroup}>
                <input 
                    {...register('title')} 
                    placeholder={'Название плейлиста'}
                    defaultValue={playlist?.attributes.title || ''}
                />
            </div>
            <div className={s.formGroup}>
                <input 
                    {...register('description')} 
                    placeholder={'Описание плейлиста'}
                    defaultValue={playlist?.attributes.description || ''}
                />
            </div>
            <div className={s.actions}>
                <button type={'submit'} className={s.saveButton}>Сохранить</button>
                <button type={'button'} className={s.cancelButton} onClick={() => editPlaylist(null)}>
                    Отмена
                </button>
            </div>
        </form>
    )
}