import "@/styles/globals.css"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MainNav } from "@/components/main-nav"
import { navConfig } from "@/config/nav"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={navConfig.mainNav} />
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}
