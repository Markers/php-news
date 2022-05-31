interface Props {
  onOpenDrawer: () => void;
}
const MobileButton = ({ onOpenDrawer }: Props) => {
  return (
    <button
      className="lg:hidden hover:text-orange-500 transition-all ease-out"
      onClick={onOpenDrawer}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  );
};

export default MobileButton;
