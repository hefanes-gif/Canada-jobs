'use client'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import { useState } from 'react'

const jobs = [
  { id: 1, title: "Farm Worker - Seasonal", location: "Ontario, AB, BC", type: "LMIA Approved", salary: "$17-22/hr", link: "https://www.jobbank.gc.ca/jobsearch?searchstring=farm+worker" },
  { id: 2, title: "Home Support Worker / Caregiver", location: "Toronto, Vancouver", type: "Caregiver Program", salary: "$19-26/hr", link: "https://www.jobbank.gc.ca/jobsearch?searchstring=caregiver" },
  { id: 3, title: "Long Haul Truck Driver", location: "Alberta, Saskatchewan", type: "LMIA Available", salary: "$28-35/hr", link: "https://www.jobbank.gc.ca/jobsearch?searchstring=truck+driver" },
  { id: 4, title: "Food Service Supervisor", location: "Calgary, Montreal", type: "Hospitality", salary: "$18-24/hr", link: "https://www.jobbank.gc.ca/jobsearch?searchstring=food+service+supervisor" },
  { id: 5, title: "Cleaner / Housekeeping", location: "Multiple Cities", type: "Entry Level", salary: "$16-20/hr", link: "https://www.jobbank.gc.ca/jobsearch?searchstring=cleaner" },
  { id: 6, title: "Construction Helper", location: "Ontario, Quebec", type: "High Demand", salary: "$20-28/hr", link: "https://www.jobbank.gc.ca/jobsearch?searchstring=construction" },
  { id: 7, title: "Early Childhood Educator", location: "BC, Ontario", type: "ECE", salary: "$22-30/hr", link: "https://www.jobbank.gc.ca/jobsearch?searchstring=early+childhood+educator" },
  { id: 8, title: "Cook", location: "Nationwide", type: "LMIA", salary: "$17-25/hr", link: "https://www.jobbank.gc.ca/jobsearch?searchstring=cook" },
  { id: 9, title: "Warehouse Worker", location: "Mississauga, Edmonton", type: "Logistics", salary: "$18-23/hr", link: "https://www.jobbank.gc.ca/jobsearch?searchstring=warehouse" },
  { id: 10, title: "Personal Support Worker PSW", location: "Ontario", type: "Healthcare", salary: "$21-28/hr", link: "https://www.jobbank.gc.ca/jobsearch?searchstring=personal+support+worker" },
]

export default function Jobs(){
 const [q,setQ]=useState("")
 const filtered = jobs.filter(j => (j.title+j.location+j.type).toLowerCase().includes(q.toLowerCase()))
 return (
  <main>
   <Navbar/>
   <div className="max-w-6xl mx-auto p-4 py-8">
    <h1 className="text-3xl font-bold">Verified Canadian Jobs</h1>
    <p className="text-sm text-gray-600 mt-2">We do NOT hire. All links go to official jobbank.gc.ca</p>
    <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search: driver, farm, caregiver..." className="w-full mt-5 p-3 border rounded-full text-sm"/>
    <div className="grid md:grid-cols-2 gap-4 mt-6">
      {filtered.map(job => (
        <div key={job.id} className="bg-white border rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between"><h3 className="font-bold">{job.title}</h3><span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{job.type}</span></div>
          <p className="text-sm text-gray-500 mt-1">{job.location} • {job.salary}</p>
          <a href={job.link} target="_blank" className="inline-block mt-4 bg-black text-white text-sm px-4 py-2 rounded-full">View on Job Bank →</a>
        </div>
      ))}
    </div>
    {filtered.length===0 && <p className="text-center text-sm text-gray-500 mt-10">No jobs found for "{q}"</p>}
    <Link href="/" className="text-sm text-blue-600 underline mt-8 inline-block">← Back Home</Link>
   </div>
  </main>
 )
}
