const Navbar = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-lg font-bold tracking-tight text-foreground">Garage Door</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
        </div>
        <button
          onClick={scrollToForm}
          className="border border-foreground text-foreground text-sm font-medium px-5 py-2 rounded-sm transition-colors duration-200 hover:bg-foreground hover:text-background active:scale-[0.97]"
        >
          השאר פרטים
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
