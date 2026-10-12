import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zangetsu — Building the future, one product at a time",
  description:
    "Zangetsu is a digital holding company: AI micro-SaaS, developer tools, and digital products. Led by Carlos Reyes, Systems Engineer & AI-assisted developer.",
  keywords: [
    "Zangetsu",
    "micro-SaaS",
    "AI development",
    "digital products",
    "software development",
  ],
  openGraph: {
    title: "Zangetsu",
    description: "Building the future, one product at a time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
