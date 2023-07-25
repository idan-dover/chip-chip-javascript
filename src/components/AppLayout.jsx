import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="grid h-screen w-screen grid-rows-[auto_1fr_auto] dark:bg-gray-800">
      <Header />
      <main className="max-w-3xl mx-auto overflow-scroll xl:max-w-7xl container-snap">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
