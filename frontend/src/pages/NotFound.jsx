import { Link } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";

const NotFound = () => {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="text-6xl font-extrabold text-red-500">404</h1>
        <p className="mt-4 text-slate-600">The page you are looking for does not exist.</p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-red-500 px-6 py-3 font-semibold text-white hover:bg-red-600"
        >
          Back to Home
        </Link>
      </section>
    </PublicLayout>
  );
};

export default NotFound;
