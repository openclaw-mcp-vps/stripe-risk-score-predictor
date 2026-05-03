import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Risk Score Predictor',
  description: 'Predict Stripe account suspension risk before it happens. Analyze transaction patterns and flag potential risk factors.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6a371d6c-df81-468a-9173-b526f11be0b8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
