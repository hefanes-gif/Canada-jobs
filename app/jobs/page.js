import Link from 'next/link'
const jobs = [
 {title:"Farm Worker", loc:"Ontario", pay:"$17-22/hr", link:"https://www.jobbank.gc.ca/jobsearch?searchstring=farm+worker"},
 {title:"Caregiver / Home Support", loc:"Toronto", pay:"$19-26/hr", link:"https://www.jobbank.gc.ca/jobsearch?searchstring=caregiver"},
 {title:"Truck Driver", loc:"Alberta", pay:"$28-35/hr", link:"https://www.jobbank.gc.ca/jobsearch?searchstring=truck+driver"},
 {title:"Cleaner", loc:"Multiple", pay:"$16-20/hr", link:"https://www.jobbank.gc.ca/jobsearch?searchstring=cleaner"},
 {title:"Cook", loc:"Nationwide", pay:"$17-25/hr", link:"https://www.jobbank.gc.ca/jobsearch?searchstring=cook"},
]
export default function Jobs(){
 return (
  <main style={{maxWidth:'800px', margin:'0 auto', padding:'16px'}}>
   <Link href="/" style={{fontSize:'14px'}}>← Back Home</Link>
   <h1 style={{fontSize:'28px', fontWeight:900, marginTop:'12px'}}>Verified Canadian Jobs</h1>
   <p style={{fontSize:'13px', color:'#6b7280', marginTop:'6px'}}>All links go to official jobbank.gc.ca</p>
   <div style={{display:'grid', gap:'12px', marginTop:'16px'}}>
    {jobs.map((j,i)=>(<div key={i} style={{background:'white', border:'1px solid #e5e7eb', borderRadius:'16px', padding:'16px'}}><b>{j.title}</b><div style={{fontSize:'13px', color:'#6b7280'}}>{j.loc} • {j.pay}</div><a href={j.link} target="_blank" style={{display:'inline-block', marginTop:'10px', background:'black', color:'white', padding:'8px 14px', borderRadius:'20px', fontSize:'13px'}}>View on Job Bank →</a></div>))}
   </div>
  </main>
 )
}
