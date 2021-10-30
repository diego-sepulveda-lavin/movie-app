import { Props } from './types';

export const Paginator = (props: Props) => {
  const { currentPage, totalPages = 0, onClick } = props;

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map(page => (
        <div key={page} onClick={() => onClick(page)}>
          {page}
        </div>
      ))}
    </div>
  );
};
