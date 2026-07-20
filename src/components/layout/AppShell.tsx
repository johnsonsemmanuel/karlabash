import { Outlet } from "react-router-dom";
import Header from "./Header";
import TabBar from "./TabBar";

export default function AppShell() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="pt-14 pb-20 flex-1">
        <div className="max-w-6xl mx-auto px-4">
          <Outlet />
        </div>
      </main>
      <TabBar />
    </div>
  );
}
