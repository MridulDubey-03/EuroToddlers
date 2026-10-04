import { Toaster } from "react-hot-toast";

import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
      <Toaster position="top-center" />
    </>
  );
}

export default App;
