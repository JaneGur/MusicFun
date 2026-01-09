import s from '../Pagination.module.css';

type Props = {
    pageSize: number;
    changePageSize: (page: number) => void;
}

export const PageSizeSelector = ({pageSize, changePageSize}: Props) => {
    return (
        <label className={s.pageSizeSelector}>
            Показывать по
            <select value={pageSize} onChange={e => changePageSize(Number(e.target.value))}>
                {[2, 4, 8, 16, 32].map(size => (
                    <option value={size} key={size}>
                        {size}
                    </option>
                ))}
            </select>
            на странице
        </label>
    );
};
