type ArrowProps = {
  direction: 'next' | 'prev';
  onClick?: () => void;
  disabled?: boolean;
};

const Arrow = ({ direction, onClick, disabled }: ArrowProps) => {
  const isNext = direction === 'next';

  return (
    <button onClick={onClick} className="arrow-btn" disabled={disabled}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={isNext ? '-mr-1' : 'rotate-180 -ml-1'}
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>
  );
};

export default Arrow;
