import { PublicNavbar } from "@/components/public-navbar";
import { Footer } from "@/components/footer";
import { RoleSwitcher } from "@/components/role-switcher";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PublicNavbar />
      <main className="min-h-[calc(100vh-4rem)]">{children}</main>
      <Footer />
      <RoleSwitcher />
    </>
  );
}
