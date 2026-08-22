import "./globals.css";
export const metadata = { title: "Canada Opportunities", description: "Legit Canadian jobs and travel" };
export default function RootLayout({ children }) {
  return (<html lang="en"><body className="bg-gray-50">{children}</body></html>);
}
