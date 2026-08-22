import Link from 'next/link'
export default function Navbar(){
 return (
  <nav className="bg-white border-b sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <Link href="/" className="font-bold text-red-600 text-xl">Canada Opportunities</Link>
      <div className="flex gap-3 text-sm">
        <Link href="/jobs" className="font-medium">Jobs</Link>
        <Link href="/visit" className="font-medium">Visit</Link>
        <Link href="/dashboard" className="bg-red-600 text-white px-4 py-1.5 rounded-full">Dashboard</Link>
      </div>
    </div>
  </nav>
 )
}
