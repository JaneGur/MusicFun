import type {ChangeEvent} from "react";
import type {Images} from "@/common/types";
import {useDeletePlaylistCoverMutation, useUploadPlaylistCoverMutation} from "@/features/playlists/api/playlistsApi.ts";
import image from '@/assets/default-playlist-cover.png'
import s from './../PlaylistItem.module.css'
import {toast} from "react-toastify";

type Props = {
    playlistId: string
    images: Images
}

export const PlaylistCover = ({ images, playlistId }: Props) => {
    const originalCover = images.main?.find(img => img.type === 'original')
    const src = originalCover ? originalCover?.url : image

    const [uploadCover] = useUploadPlaylistCoverMutation()
    const [deleteCover] = useDeletePlaylistCoverMutation()

    const uploadCoverHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const maxSize = 1024 * 1024 // 1 MB
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']

        const file = event.target.files?.length && event.target.files[0]
        if (!file) return

        if (!allowedTypes.includes(file.type)) {
            toast('Only JPEG, PNG or GIF images are allowed', {type:'error', theme: "colored"})
        }

        if (file.size > maxSize) {
            toast(`The file is too large (max. ${Math.round(maxSize / 1024)} KB)`, {
                type: 'error',
                theme: 'colored',
            })
        }

        uploadCover({ playlistId, file })
    }

    const deleteCoverHandler = () => deleteCover({ playlistId })

    return (
        <div className={s.coverContainer}>
            <img src={src} alt={'cover'} className={s.cover} />
            <div className={s.coverActions}>
                <label className={s.uploadLabel}>
                    <input 
                        type="file" 
                        accept="image/jpeg,image/png,image/gif" 
                        onChange={uploadCoverHandler} 
                        className={s.fileInput}
                    />
                    📷 Upload
                </label>
                {originalCover && (
                    <button onClick={() => deleteCoverHandler()} className={s.deleteCoverButton}>
                        🗑️ Remove
                    </button>
                )}
            </div>
        </div>
    )
}