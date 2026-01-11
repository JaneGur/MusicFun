import Skeleton from "react-loading-skeleton";
import s from './PlaylistSkeleton.module.css';

export const PlaylistSkeleton = () => {
    return (
        <div className={s.container}>
            {/* Обложка плейлиста */}
            <div className={s.coverContainer}>
                <Skeleton className={s.cover} />
            </div>
            
            {/* Контент */}
            <div className={s.content}>
                {/* Заголовок */}
                <Skeleton height={24} width="80%" style={{ marginBottom: '8px' }} />
                
                {/* Описание (2 строки) */}
                <Skeleton height={16} count={2} style={{ marginBottom: '4px' }} />
                
                {/* Кнопки действий */}
                <div className={s.actions}>
                    <Skeleton height={40} className={s.button} />
                    <Skeleton height={40} className={s.button} />
                </div>
            </div>
        </div>
    );
};
