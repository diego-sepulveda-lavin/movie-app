export interface Props {
  currentPage?: number;
  totalPages?: number;
  onClick: (page: number) => void;
}
