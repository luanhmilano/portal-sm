import { AdminSidebar } from "@/components/admin-sidebar";
import { RoleSwitcher } from "@/components/role-switcher";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col md:h-screen md:flex-row md:overflow-hidden">
      <AdminSidebar />
      <main className="flex-1 bg-[var(--color-off-white)] md:overflow-y-auto">
        <div className="p-4 sm:p-6 md:p-8">{children}</div>
      </main>
      <RoleSwitcher />
    </div>
  );
}
