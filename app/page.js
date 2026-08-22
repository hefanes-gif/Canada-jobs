import Link from 'next/link'

export default function Home(){
 return (
  <main style={{maxWidth:'1000px', margin:'0 auto', padding:'16px'}}>
   <nav style={{display:'flex', justifyContent:'space-between', alignItems:'center', background:'white', padding:'12px 16px', borderRadius:'12px', border:'1px solid #e5e7eb'}}>
     <Link href="/" style={{fontWeight:900, display:'flex', alignItems:'center', gap:'8px'}}><div style={{background:'#dc2626', color:'white', width:'32px', height:'32px', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center'}}>CA</div><span>CANADA OPPORTUNITIES</span></Link>
     <div style={{display:'flex', gap:'12px', fontSize:'14px'}}><Link href="/jobs">Jobs</Link><Link href="/visit">Visit</Link><Link href="/jobs" style={{background:'black', color:'white', padding:'6px 14px', borderRadius:'20px'}}>Find Jobs</Link></div>
   </nav>

   <div style={{background:'#fef3c7', border:'1px solid #f59e0b', padding:'12px', borderRadius:'10px', marginTop:'16px', fontSize:'14px'}}>⚠️ <b>Beware of Scams:</b> We never ask for payment. Verify jobs on jobbank.gc.ca and visas on canada.ca</div>

   <h1 style={{fontSize:'36px', fontWeight:900, marginTop:'24px', lineHeight:'1.1'}}>Discover Legitimate<br/>Canadian Opportunities</h1>
   <p style={{color:'#6b7280', marginTop:'12px', fontSize:'15px'}}>Verified jobs & travel info. We never charge fees - we link only to official Government of Canada sources.</p>

   <div style={{display:'grid', gap:'12px', marginTop:'20px'}}>
     <Link href="/jobs" style={{background:'white', border:'2px solid #111', padding:'20px', borderRadius:'20px', display:'block'}}>
       <div style={{fontWeight:800, fontSize:'18px'}}>💼 Work Opportunities</div>
       <div style={{fontSize:'14px', color:'#6b7280', marginTop:'4px'}}>Job Bank verified positions →</div>
     </Link>
     <Link href="/visit" style={{background:'white', border:'2px solid #111', padding:'20px', borderRadius:'20px', display:'block'}}>
       <div style={{fontWeight:800, fontSize:'18px'}}>✈️ Visit Canada</div>
       <div style={{fontSize:'14px', color:'#6b7280', marginTop:'4px'}}>IRCC official requirements →</div>
     </Link>
   </div>

   <div style={{marginTop:'30px', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'10px', textAlign:'center'}}>
     <div style={{background:'white', padding:'14px', borderRadius:'12px', border:'1px solid #e5e7eb'}}><b>10+</b><br/><span style={{fontSize:'12px', color:'#6b7280'}}>Verified Jobs</span></div>
     <div style={{background:'white', padding:'14px', borderRadius:'12px', border:'1px solid #e5e7eb'}}><b>100%</b><br/><span style={{fontSize:'12px', color:'#6b7280'}}>Free Info</span></div>
     <div style={{background:'white', padding:'14px', borderRadius:'12px', border:'1px solid #e5e7eb'}}><b>0 KES</b><br/><span style={{fontSize:'12px', color:'#6b7280'}}>We Never Charge</span></div>
   </div>

   <p style={{textAlign:'center', fontSize:'11px', color:'#9ca3af', marginTop:'30px'}}>Disclaimer: We are not affiliated with Government of Canada. We do not guarantee jobs, visas or immigration. Always verify on canada.ca and jobbank.gc.ca</p>
   <a href="https://wa.me/254700000000" style={{position:'fixed', bottom:'20px', right:'20px', background:'#22c55e', color:'white', padding:'12px 18px', borderRadius:'30px', fontWeight:800, fontSize:'14px'}}>WhatsApp Us</a>
  </main>
 )
}
