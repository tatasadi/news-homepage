import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], weight: ["400", "700", "800"] })

export const metadata: Metadata = {
  title: "News Homepage",
  description: "A Challenge from Frontend Mentor!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${inter.className} mx-auto flex min-h-screen max-w-[90rem] flex-col bg-off-white text-very-dark-blue`}
      >
        {children}
      </body>
    </html>
  )
}
