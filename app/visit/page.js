import Link from 'next/link'
export default function Visit(){
 return(
  <main style={{maxWidth:'800px', margin:'0 auto', padding:'16px'}}>
   <Link href="/" style={{fontSize:'14px'}}>← Back Home</Link>
   <h1 style={{fontSize:'28px', fontWeight:900, marginTop:'12px'}}>Visit Canada Guide</h1>
   <div style={{marginTop:'16px', display:'grid', gap:'12px'}}>
     <div style={{background:'white', border:'1px solid #e5e7eb', borderRadius:'12px', padding:'16px'}}><b>1. Visitor Visa</b><p style={{fontSize:'13px', marginTop:'6px'}}>Apply only on canada.ca. Need bank statements, passport, ties to Kenya.</p><a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html" target="_blank" style={{fontSize:'13px', color:'blue', textDecoration:'underline'}}>Official link →</a></div>
     <div style={{background:'white', border:'1px solid #e5e7eb', borderRadius:'12px', padding:'16px'}}><b>2. Work Permit - Real Process</b><p style={{fontSize:'13px', marginTop:'6px'}}>Find LMIA job on Job Bank → Employer gives LMIA → Apply work permit. No one can sell you LMIA.</p></div>
     <div style={{background:'#fef2f2', border:'1px solid #fecaca', borderRadius:'12px', padding:'16px'}}><b style={{color:'#dc2626'}}>🚨 Scam Alert</b><p style={{fontSize:'13px', marginTop:'6px'}}>If someone says pay 300k for guaranteed job + visa, it's 100% SCAM.</p></div>
   </div>
  </main>
 )
}
