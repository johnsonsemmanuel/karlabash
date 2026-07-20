import { Link, Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-warm-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link
          to="/"
          className="font-manrope font-extrabold text-2xl text-ink mb-8 text-center block"
        >
          Karlabash
        </Link>
        <Outlet />
      </div>
    </div>
  );
}
