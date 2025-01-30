import "./globals.css";
import { DM_Sans, Roboto_Mono } from 'next/font/google'
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";


const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${roboto_mono.variable}`}>
      <head>
        <GoogleAnalytics />
      </head>
      <body className="bg-[#070815] text-white">
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
