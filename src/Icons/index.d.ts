type ArrowProps = {
    direction: 'next' | 'prev';
    onClick?: () => void;
    disabled?: boolean;
};
declare const Arrow: ({ direction, onClick, disabled }: ArrowProps) => import("react/jsx-runtime").JSX.Element;
export default Arrow;
