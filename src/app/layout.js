import './globals.css'

export const metadata = {
  title: 'ACC API Scavenger Hunt',
  description: 'API for the ACC Intro to APIs workshop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
