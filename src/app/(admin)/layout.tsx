import { AdminSidebar } from "@/components/admin-sidebar";
import { RoleSwitcher } from "@/components/role-switcher";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto bg-[var(--color-off-white)]">
        <div className="p-6 sm:p-8">{children}</div>
      </main>
      <RoleSwitcher />
    </div>
  );
}
