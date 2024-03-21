import "./globals.css";
import Navbar from "../src/components/Navbar";

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="container mx-auto h-screen flex justify-center
      "
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
