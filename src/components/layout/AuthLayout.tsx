import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-warm-white">
      <div className="w-full max-w-md mx-4">
        <p className="font-manrope font-extrabold text-2xl text-red-karlabash mb-8 text-center">
          Karlabash
        </p>
        <Outlet />
      </div>
    </div>
  );
}
