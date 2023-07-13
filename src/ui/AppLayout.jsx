import Header from "./Header";
import { Outlet } from "react-router-dom";
//NOTE: I am not sure if this is used
function AppLayout() {
  return (
    <div className="grid h-screen w-screen grid-rows-[auto_1fr_auto] ">
      <Header />
      <div className="overflow-scroll">
        <main className="max-w-3xl mx-auto overflow-scroll xl:max-w-6xl container-snap">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
