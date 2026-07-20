import { Outlet } from "react-router-dom";
import Header from "./Header";
import TabBar from "./TabBar";
import Footer from "./Footer";

export default function AppShell() {
  return (
    <div className="min-h-screen bg-warm-white flex flex-col">
      <Header />
      <main className="flex-1 pt-14 md:pt-16 pb-20 md:pb-0">
        <Outlet />
      </main>
      <TabBar />
      <Footer />
    </div>
  );
}
