import {type SubmitHandler, useForm} from "react-hook-form";
import type {CreatePlaylistArgs} from "@/features/playlists/api/playlistsApi.types.ts";
import {useCreatePlaylistMutation} from "@/features/playlists/api/playlistsApi.ts";
import s from './CreatePlaylistForm.module.css';

type Props = {
    onPlaylistCreated?: () => void;
}

export const CreatePlaylistForm = ({ onPlaylistCreated }: Props) => {
    const { register, handleSubmit, reset} = useForm<CreatePlaylistArgs>()

    const [createPlaylist] = useCreatePlaylistMutation()

    const onSubmit: SubmitHandler<CreatePlaylistArgs> = data => {
        createPlaylist(data).unwrap().then(() => {
            reset()
            onPlaylistCreated?.()
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <h2>Создать новый плейлист</h2>
            <div className={s.formGroup}>
                <input {...register('title')} placeholder={'Название плейлиста'} />
            </div>
            <div className={s.formGroup}>
                <input {...register('description')} placeholder={'Описание плейлиста'} />
            </div>
            <button className={s.submitButton}>Создать плейлист</button>
        </form>
    )
}