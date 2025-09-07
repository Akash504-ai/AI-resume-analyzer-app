import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full top-0 left-0 z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        
        {/* Logo / Title */}
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-wide">
          AI <span className="text-orange-500">Resume</span> Analyzer
        </h1>

        {/* Upload Button */}
        <Link
          to="/upload"
          className="w-fit flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500 text-white font-medium shadow-lg hover:bg-orange-600 hover:scale-105 transition-all duration-300"
        >
          Upload Resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
