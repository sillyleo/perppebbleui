import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FigmaRewardStatus from "./pages/FigmaRewardStatus";
import Hel from "./pages/Hel";
import Working from "./pages/Working";
import NotWroking from "./pages/NotWroking";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/hel":
        title = "";
        metaDescription = "";
        break;
      case "/working":
        title = "";
        metaDescription = "";
        break;
      case "/not-wroking":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<FigmaRewardStatus />} />

      <Route path="/hel" element={<Hel />} />

      <Route path="/working" element={<Working />} />

      <Route path="/not-wroking" element={<NotWroking />} />
    </Routes>
  );
}
export default App;
