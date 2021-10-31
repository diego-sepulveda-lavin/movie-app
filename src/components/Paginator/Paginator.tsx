import { Props } from './types';

import './paginator.scss';

export const Paginator = (props: Props) => {
  const { currentPage, totalPages = 0, onClick } = props;

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  // Implement a next prev button in case there are too many pages with results
  return (
    <div className="paginator-container">
      {pages.map(page => (
        <div
          className={`paginator-item ${currentPage === page ? 'active' : ''}`}
          key={page}
          onClick={() => onClick(page)}
        >
          <span>{page}</span>
        </div>
      ))}
    </div>
  );
};
