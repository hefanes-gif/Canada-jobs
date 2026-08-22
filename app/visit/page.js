import Navbar from '../../components/Navbar'
import Link from 'next/link'

export default function Visit(){
 return(
  <main>
   <Navbar/>
   <div className="max-w-3xl mx-auto p-4 py-8">
    <h1 className="text-3xl font-bold">Visit Canada Guide 2026</h1>
    <p className="text-sm text-gray-600 mt-2">Legit info only. Official source: canada.ca</p>
    
    <div className="mt-6 space-y-6">
      <div className="bg-white border rounded-xl p-5">
        <h2 className="font-bold">1. Visitor Visa (TRV)</h2>
        <p className="text-sm mt-2">For tourism, family visit. 6 months max. Need: passport, bank statements (6 months), invitation letter if family, proof of ties to Kenya.</p>
        <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html" target="_blank" className="text-sm text-blue-600 underline">Official IRCC Link →</a>
      </div>
      <div className="bg-white border rounded-xl p-5">
        <h2 className="font-bold">2. Work Permit - How it REALLY works</h2>
        <ul className="text-sm list-disc ml-5 mt-2 space-y-1">
          <li>Step 1: Find LMIA-approved job on jobbank.gc.ca</li>
          <li>Step 2: Employer gives you job offer + LMIA number</li>
          <li>Step 3: Apply for work permit on canada.ca</li>
          <li>NO ONE can sell you LMIA - it's free, employer pays $1000</li>
        </ul>
      </div>
      <div className="bg-white border rounded-xl p-5">
        <h2 className="font-bold">3. Cost - Be Prepared</h2>
        <p className="text-sm mt-2">Visa fee: ~$100 CAD (~13k KES) • Biometrics: $85 CAD • No agent should charge 500k for job. Real cost is visa + flight + medical.</p>
      </div>
      <div className="bg-red-50 border border-red-200 rounded-xl p-5">
        <h2 className="font-bold text-red-700">🚨 Scam Alert</h2>
        <p className="text-sm mt-2">If someone says: "Pay 300k I will give you Canada job & visa guaranteed" - It's 100% SCAM. Report to DCI Kenya.</p>
      </div>
    </div>
    <Link href="/" className="text-sm text-blue-600 underline mt-8 inline-block">← Back Home</Link>
   </div>
  </main>
 )
}
