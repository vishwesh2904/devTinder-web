import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-base-100 text-base-content p-10 border-t border-base-300">
        {/* Brand Section */}
        <aside>
          <Link to="/" className="text-3xl font-extrabold">
            <span className="text-primary">dev</span>
            <span className="text-secondary">Tinder</span>
            <span className="text-primary"> ♥</span>
          </Link>

          <p className="text-base-content/60 mt-2">
            Find your perfect coding partner.
            <br />
            Connect. Collaborate. Code together.
          </p>
        </aside>

        {/* Explore */}
        <nav>
          <h6 className="footer-title">Explore</h6>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/profile" className="link link-hover">
            Profile
          </Link>
          <Link to="/login" className="link link-hover">
            Login
          </Link>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="/about" className="link link-hover">
            About Us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <Link to="/privacy" className="link link-hover">
            Privacy Policy
          </Link>
        </nav>

        {/* Social Links */}
        <nav>
          <h6 className="footer-title">Connect</h6>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="link link-hover"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="link link-hover"
          >
            LinkedIn
          </a>
        </nav>
      </footer>

      {/* Copyright bar, full width */}
      <footer className="footer footer-center bg-base-200 text-base-content/60 p-4 text-sm">
        <p>
          © {new Date().getFullYear()} devTinder. Made with ❤️ for developers.
        </p>
      </footer>
    </>
  );
};

export default Footer;