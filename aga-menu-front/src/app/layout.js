import { Archivo } from "next/font/google";
import "./globals.css";

const alexandria = Archivo({ subsets: ["latin"] });

export const metadata = {
  title: "AgaMenu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={alexandria.className}>{children}</body>
    </html>
  );
}
