import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import {navConfig} from "@/config/menu";

export const metadata: Metadata = {
  title: 'Blog Wilson',
  description: 'Blog Wilson',
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
        {children}
      </body>
    </html>
  )
}
