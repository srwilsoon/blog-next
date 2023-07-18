import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import {navConfig} from "@/config/menu";
import {Layout} from "@/components/Layout";
import {Footer} from "@/components/Footer";
import {BackToTop} from "@/components/BackToTop";

export const metadata = {
  title: {
    template: '%s | Next.js Blog Starter',
    default: 'Next.js Blog Starter',
  },
  description: 'Next.js Blog Starter',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-gray-100">
        <Header items={navConfig.items}/>
        <Layout>
          <div className="py-20">
            {children}
          </div>
        </Layout>
        <BackToTop />
        <Footer items={navConfig.items} />
      </body>
    </html>
  )
}
