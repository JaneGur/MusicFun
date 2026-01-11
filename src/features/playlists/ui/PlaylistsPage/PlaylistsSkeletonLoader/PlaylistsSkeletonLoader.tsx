import { PlaylistSkeleton } from '../PlaylistSkeleton';
import s from './PlaylistsSkeletonLoader.module.css';

type Props = {
    count?: number;
};

export const PlaylistsSkeletonLoader = ({ count = 6 }: Props) => {
    return (
        <div className={s.items}>
            {Array.from({ length: count }).map((_, index) => (
                <PlaylistSkeleton key={index} />
            ))}
        </div>
    );
};
