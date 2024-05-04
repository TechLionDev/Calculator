import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <>
      <div className='flex items-center justify-end top-0 w-full p-4'>
        <ThemeToggle />
      </div>
    </>
  );
};

export default Header;
