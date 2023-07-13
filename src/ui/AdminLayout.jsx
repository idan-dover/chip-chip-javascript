import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div>
      <span>AdminLayout</span>
      <Outlet />
    </div>
  );
}

export default AdminLayout;
