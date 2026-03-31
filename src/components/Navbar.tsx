const Navbar = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 items-center justify-center flex flex-row">
        {/* Logo centered */}
        <span className="text-xl font-black tracking-tight text-foreground font-serif"></span>
      </div>
    </nav>
  );
};

export default Navbar;
