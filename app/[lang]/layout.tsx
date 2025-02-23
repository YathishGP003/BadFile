import "./globals.css";
import { Bungee, Atkinson_Hyperlegible } from "next/font/google";
import { Metadata, ResolvingMetadata } from "next";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { Analytics } from "@vercel/analytics/react";

type Props = {
  params: { lang: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const lang = params.lang;

  const description = await getDictionary(lang).then(
    (dictionary) => dictionary.meta.description
  );

  return {
    title: "BADFILE.ZIP",
    description: description,
  };
}

const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
});
const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bungee.variable} ${atkinson.variable} font-sans selection:bg-red-500 selection:text-white bg-[#EEEEEE]`}
    >
      <body className="font-atkinson">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
