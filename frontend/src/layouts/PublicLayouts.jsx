import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const PublicLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PublicLayout;