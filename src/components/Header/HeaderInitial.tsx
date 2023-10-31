const HeaderInitial = () => {
  return (
    <header className="flex w-full h-20 bg-primary items-center justify-center">
      <figure>
        <img src="/icons/logo-rre.svg" className="w-32 h-11" />
      </figure>
    </header>
  );
};

export const Header = {
  Initial: HeaderInitial
};
