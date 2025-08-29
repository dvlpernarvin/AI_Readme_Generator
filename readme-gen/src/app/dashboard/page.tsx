import DashboardSidebar from "../components/DashboardSidebar";
import DashboardTopbar from "../components/DashboardTopbar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-slate-50">
      <DashboardSidebar user={{ name: "John Doe" }} />
      <div className="flex-1 flex flex-col">
        <DashboardTopbar user={{ name: "John Doe" }} notifCount={2} />
        <main className="p-6">
          {/* page content */}
        </main>
      </div>
    </div>
  );
}
