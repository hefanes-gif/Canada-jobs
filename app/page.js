import Navbar from '../components/Navbar'
import Link from 'next/link'

export default function Home(){
 return (
  <main>
   <Navbar/>
   {/* HERO */}
   <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center">
     <div>
       <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">✓ VERIFIED • NO FEES • OFFICIAL LINKS ONLY</span>
       <h1 className="text-4xl md:text-5xl font-black mt-4 leading-tight">Legit Path to <span className="text-red-600">Canada.</span> No Scams.</h1>
       <p className="text-gray-600 mt-4 text-sm md:text-base">We link you directly to Canada's official Job Bank. We never offer jobs, never ask for money. Just honest guidance to avoid fraud that costs Kenyans millions.</p>
       <div className="flex gap-3 mt-6">
         <Link href="/jobs" className="bg-black text-white px-6 py-3 rounded-full text-sm font-bold">Browse 10 Verified Jobs →</Link>
         <Link href="/visit" className="border px-6 py-3 rounded-full text-sm font-bold">How to Apply</Link>
       </div>
       <div className="flex gap-6 mt-8 text-xs">
         <div><p className="font-black text-lg">10+</p><p className="text-gray-500">Verified Links</p></div>
         <div><p className="font-black text-lg">100%</p><p className="text-gray-500">Free Info</p></div>
         <div><p className="font-black text-lg">0 KES</p><p className="text-gray-500">We Never Charge</p></div>
       </div>
     </div>
     <div className="bg-white border rounded-3xl p-6 shadow-sm">
       <h3 className="font-bold">Why Trust Us?</h3>
       <ul className="mt-4 space-y-3 text-sm">
         <li className="flex gap-2"><span>🛡️</span> Every job links to jobbank.gc.ca (Government of Canada)</li>
         <li className="flex gap-2"><span>🚫</span> We DO NOT sell LMIA, jobs, or visas - illegal</li>
         <li className="flex gap-2"><span>✅</span> Clear scam checklist before you pay anyone</li>
         <li className="flex gap-2"><span>📚</span> Official IRCC links only for visas</li>
       </ul>
       <div className="mt-6 bg-yellow-50 border border-yellow-200 p-3 rounded-xl text-xs">
         <b>Real talk:</b> Canada does not have agents in Kenya selling jobs. If someone asks 300k-800k for guaranteed visa, it's a scam.
       </div>
     </div>
   </section>

   {/* TRUST BAR */}
   <section className="bg-black text-white py-3 text-center text-xs tracking-wide">
     Official sources: jobbank.gc.ca • canada.ca • ircc.canada.ca — Always verify
   </section>

   <section className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-4">
     <div className="bg-white border rounded-2xl p-5"><h4 className="font-bold">For Job Seekers</h4><p className="text-sm text-gray-600 mt-2">Find LMIA-approved employers, learn how work permit really works.</p><Link href="/jobs" className="text-sm underline mt-3 inline-block">View Jobs →</Link></div>
     <div className="bg-white border rounded-2xl p-5"><h4 className="font-bold">For Visitors</h4><p className="text-sm text-gray-600 mt-2">Tourist visa, documents, bank statement guide, processing times.</p><Link href="/visit" className="text-sm underline mt-3 inline-block">Read Guide →</Link></div>
     <div className="bg-white border rounded-2xl p-5"><h4 className="font-bold">Report a Scam</h4><p className="text-sm text-gray-600 mt-2">Were you scammed? Chat us on WhatsApp. We will guide you to report to DCI.</p><a href="https://wa.me/254700000000" className="text-sm underline mt-3 inline-block">Chat on WhatsApp →</a></div>
   </section>

   <footer className="text-center text-[11px] text-gray-400 py-8">© 2026 Canada Opportunities • Not affiliated with Government of Canada • Info only, not immigration advice</footer>
  </main>
 )
}
