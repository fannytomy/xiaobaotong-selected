import type { Metadata } from "next";
import "./globals.css";
import { baseUrl } from './sitemap'
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "小报童专栏精选导航站",
  description: "小报童专栏精选导航站",
  keywords: '小报童, 小报童精选, 小报童专栏, 小报童导航, 小报童导航站, 小报童专栏精选导航站',
  icons: ["/favicon.ico"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Nav />
          {children}
          <Footer /> 
        </main>
      </body>
    </html>
  );
}
