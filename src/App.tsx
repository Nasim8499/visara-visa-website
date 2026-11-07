import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useRoute } from "./components/ui";
import Home from "./pages/Home";
import CategoryPage from "./pages/Category";
import { catBySlug, BRAND } from "./data";

export default function App() {
  const { path, anchor } = useRoute();
  const cat = catBySlug(path);

  useEffect(() => {
    document.title = cat ? `${cat.title} - ${BRAND}` : `${BRAND} - Visa & Immigration Services`;
    if (anchor) {
      const t = setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 44, behavior: "smooth" });
      }, 60);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [path, anchor, cat]);

  return (
    <div className="min-h-screen bg-white">
      <Nav current={path} />
      {cat ? <CategoryPage c={cat} key={cat.slug} /> : <Home />}
      <Footer />
    </div>
  );
}
