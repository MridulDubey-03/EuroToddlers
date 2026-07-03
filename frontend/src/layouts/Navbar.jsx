const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-indigo-600">
          EuroToddlers
        </h1>

        <nav className="hidden md:flex gap-8 font-medium">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Programs</a>
          <a href="/">Gallery</a>
          <a href="/">Admissions</a>
          <a href="/">Contact</a>
        </nav>

        <button className="rounded-full bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700">
          Enquire Now
        </button>
      </div>
    </header>
  );
};

export default Navbar;