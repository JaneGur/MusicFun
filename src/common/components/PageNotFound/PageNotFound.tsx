import s from './PageNotFound.module.css'

export const PageNotFound = () => {
    return (
        <div className={s.container}>
            <h1 className={s.title}>404</h1>
            <h2 className={s.subtitle}>page not found</h2>
            <p className={s.description}>
                The page you're looking for doesn't exist or has been moved.
            </p>
        </div>
    )
}