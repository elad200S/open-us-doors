const Navbar = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* CTA button on the left */}
        <button
          onClick={scrollToForm}
          className="bg-usa-red text-usa-red-foreground text-sm font-semibold px-5 py-2.5 rounded-lg transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
        >
          השאר פרטים
        </button>

        {/* Logo centered */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <img src="/images/logo.png" alt="Money Overseas" className="h-10" />
        </div>

        {/* Empty spacer for balance */}
        <div className="w-[120px]" />
      </div>
    </nav>
  );
};

export default Navbar;
