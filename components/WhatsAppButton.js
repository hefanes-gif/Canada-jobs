export default function WhatsAppButton(){
  const number = "254700000000"; // <-- CHANGE TO YOUR NUMBER
  const msg = encodeURIComponent("Hi, I saw your Canada Jobs site. I need help verifying a job offer.");
  return (
    <a href={`https://wa.me/${number}?text=${msg}`} target="_blank"
       className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 text-sm font-bold z-50">
       WhatsApp Us
    </a>
  )
}
