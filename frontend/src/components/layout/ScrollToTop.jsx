import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// On every page change: scroll to the #hash element if there is one,
// otherwise to the top of the page.
const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for the new page to render before looking for the element
      const timer = setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(timer);
    }

    window.scrollTo(0, 0);
  }, [pathname, search, hash]);

  return null;
};

export default ScrollToTop;
