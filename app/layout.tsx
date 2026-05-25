import type { Metadata } from 'next'
import { Geist, Geist_Mono, Saira_Stencil_One } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ChatwootWidget from '@/components/ChatwootWidget';
import CookieConsent from '@/components/CookieConsent';
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const sairaStencil = Saira_Stencil_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-saira-stencil',
});

export const metadata: Metadata = {
  title: 'Crivity Visual Design — AI Agent Infrastructure & Intelligent Workflow Automation',
  description: 'Deploy autonomous AI agents to automate workflows, coordinate systems, and optimize operations in real time.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sairaStencil.variable} dark`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <ChatwootWidget />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
