import './globals.css'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '600'], })

export const metadata = {
  title: 'Frontend Mentor | NFT preview card component',
  description: 'Preview of an NFT called Equilibrium',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  )
}
