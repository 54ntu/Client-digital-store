const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] text-gray-300 px-10 py-12 mt-auto">
      <div className="container mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-3 gap-10 mb-10">
          {/* Brand col */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#00b4a6] rounded-md flex items-center justify-center">
                <span className="text-white text-sm font-bold">H</span>
              </div>
              <span className="text-white text-lg font-semibold">HDokaan</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Ridiculus mus mauris vitae ultricies leo integer malesuada nunc.
            </p>
            {/* Social icon buttons */}
            <div className="flex gap-3">
              {[
                {
                  label: "Twitter",
                  href: "https://twitter.com/",
                  icon: "T",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/",
                  icon: "G",
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-md border border-white/15 bg-white/5 flex items-center justify-center text-gray-400 text-sm font-medium hover:bg-[#00b4a6] hover:text-white hover:border-[#00b4a6] transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Important Links col */}
          <div>
            <h2 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">
              Important Links
            </h2>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Terms & Conditions", href: "https://codebushi.com" },
                { label: "Privacy Policy", href: "https://codebushi.com" },
                { label: "FAQ", href: "#" },
                { label: "Shipping Info", href: "#" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-gray-400 hover:text-[#00b4a6] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About col */}
          <div>
            <h2 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">
              About Us
            </h2>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Our Story", href: "#" },
                { label: "Contact Us", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Reviews", href: "#" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-gray-400 hover:text-[#00b4a6] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/10 mb-5" />

        {/* Bottom bar */}
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">
            © 2026 HDokaan. All rights reserved.
          </span>
          <div className="flex gap-6">
            {["Sitemap", "Cookies", "Accessibility"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-gray-500 hover:text-[#00b4a6] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
