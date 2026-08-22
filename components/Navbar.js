import Link from 'next/link'
export default function Navbar(){
 return (
  <nav className="bg-white border-b sticky top-0 z-40">
   <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
    <Link href="/" className="flex items-center gap-2">
      <div className="w-9 h-9 bg-red-600 text-white font-black rounded-lg flex items-center justify-center">CA</div>
      <div><p className="font-bold leading-none">CANADA</p><p className="text-[11px] text-red-600 font-bold tracking-widest leading-none">OPPORTUNITIES</p></div>
    </Link>
    <div className="flex gap-5 text-sm font-medium">
      <Link href="/jobs" className="hover:text-red-600">Jobs</Link>
      <Link href="/visit" className="hover:text-red-600">Visit Guide</Link>
      <Link href="/jobs" className="bg-black text-white px-4 py-1.5 rounded-full">Find Jobs</Link>
    </div>
   </div>
  </nav>
 )
}
