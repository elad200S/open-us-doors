import navbarBg from "@/assets/navbar-bg.png";

const Navbar = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border bg-cover"
      style={{ backgroundImage: `url(${navbarBg})`, backgroundPosition: "top center" }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative max-w-6xl mx-auto px-6 h-16 items-center justify-center flex flex-row">
        {/* Logo centered */}
        <span className="text-xl font-black tracking-tight text-white font-serif">M-O-S</span>
      </div>
    </nav>
  );
};

export default Navbar;
