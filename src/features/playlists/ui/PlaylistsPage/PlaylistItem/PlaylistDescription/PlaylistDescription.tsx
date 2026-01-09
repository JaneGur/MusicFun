import type {PlaylistAttributes} from "@/features/playlists/api/playlistsApi.types.ts";
import s from './../PlaylistItem.module.css';

type Props = {
    attributes: PlaylistAttributes
}

export const PlaylistDescription = ({ attributes }: Props) => {
    return (
        <>
            <h3 className={s.title}>{attributes.title}</h3>
            {attributes.description && <p className={s.description}>{attributes.description}</p>}
            <div className={s.description}>by {attributes.user.name}</div>
        </>
    )
}