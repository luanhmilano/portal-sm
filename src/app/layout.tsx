import type { Metadata } from "next";
import { inter, playfairDisplay, greatVibes } from "@/lib/fonts";
import { AuthProvider } from "@/contexts/auth-context";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Portal Sementes da Misericórdia",
    template: "%s | Sementes da Misericórdia",
  },
  description:
    "Portal oficial do movimento católico Sementes da Misericórdia. Evangelização, formação e comunidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} ${greatVibes.variable} antialiased`}
        suppressHydrationWarning
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
