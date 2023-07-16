import { Outlet } from "react-router-dom";
import Header from "../../ui/Header";

function CustomerLayout() {
  return (
    <div className="grid h-screen w-screen grid-rows-[auto_1fr_auto] dark:bg-gray-800 ">
      <Header />
      <div className="overflow-scroll">
        <main className="max-w-3xl mx-auto overflow-scroll xl:max-w-6xl container-snap">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default CustomerLayout;
