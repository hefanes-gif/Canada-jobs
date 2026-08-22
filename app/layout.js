import './globals.css'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata = { title: 'Canada Jobs - Legit Opportunities', description: 'Verified Canadian jobs linked to Job Bank' }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        {children}
        <WhatsAppButton/>
      </body>
    </html>
  )
}
