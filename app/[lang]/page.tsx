import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import LocaleSwitcher from "./components/LocaleSwitcher";
import LinkGame from "./components/LinkGame";
import Image from "next/image";
import LinkTest from "./components/LinkTest";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <nav className="z-10 sticky top-0 flex justify-end px-[3%] pt-[20px]">
        <LocaleSwitcher lang={lang} />
      </nav>
      <div className="flex flex-col mx-[5%] items-center">
        <main className="flex flex-col gap-[120px] lg:gap-[200px] mx-[5%] w-full max-w-[973px] mb-[200px] lg:mb-[400px]">
          <section className="mt-[100px] lg:mt-[20vh] flex lg:flex-row flex-col lg:justify-between lg:items-center">
            <div>
              <h4 className="font-bungee flex items-center -translate-x-3 select-none ">
                <span className="flex flex-col text-lg leading-[0.8em] -translate-y-0.5 text-red-500">
                  <span>B</span>
                  <span>A</span>
                  <span>D</span>
                </span>
                <span className="text-xl">FILE.ZIP</span>
              </h4>
              <h1 className="text-[60px] leading-[1em] max-w-[270px] font-bungee select-none tracking-[0.17em]">
                {dictionary.hero.title}
              </h1>
              <p className="max-w-[230px] mt-2 ml-1 text-xl">
                {dictionary.hero.opener}
              </p>
            </div>
            <LinkGame dictionary={dictionary.linkGame}/>
          </section>
          <section className="mt-10 ">
            <h2 className="font-bold flex items-center gap-2 text-2xl tracking-wider mb-4">{dictionary.summary.title}</h2>
            <div className="flex flex-col lg:grid lg:grid-cols-2 mt-6 gap-4">
              <div className="bg-white rounded-xl p-10 relative">
                <p className="absolute -left-2 top-8 font-bungee text-4xl text-red-500">1</p>
                <h3 className="font-bold tracking-wider text-lg mb-2">{dictionary.summary.first.title}</h3>
                <p>{dictionary.summary.first.description}</p>
                <div className="relative h-[20px] mt-4">
                <p className="select-none flex gap-[0.5px]">https://dropbox.com/<span className="text-xl w-5 flex justify-center items-center leading-[1em] border border-red-500">@</span>badfile.zip</p>
                </div>
              </div>
              <div className="row-span-2 bg-white rounded-xl p-10  relative">
              <p className="absolute -left-2 top-8 font-bungee text-4xl text-red-500">2</p>
                <h3 className="font-bold tracking-wider text-lg mb-2">{dictionary.summary.second.title}</h3>
                <p>{dictionary.summary.second.description}</p>
                <video src="/images/hover.webm" className="mt-4" autoPlay muted loop></video>
              </div>
              <div className="row-span-3 bg-white rounded-xl p-10  relative">
              <p className="absolute -left-2 top-8 font-bungee text-4xl text-red-500">3</p>
                <h3 className="font-bold tracking-wider text-lg mb-2">{dictionary.summary.third.title}</h3>
                <p>{dictionary.summary.third.description}</p>
                <div className="relative h-[200px] mt-4">
                <Image src="/images/mail.jpg" alt="e-mail client screenshot, e-mail with link, where @ sign is not visible" className="object-contain" fill/>
                </div>
              </div>
              <div className="row-span-2 bg-white rounded-xl p-10  relative">
              <p className="absolute -left-2 top-8 font-bungee text-4xl text-red-500">4</p>
                <h3 className="font-bold tracking-wider text-lg mb-2">{dictionary.summary.fourth.title}</h3>
                <div className="flex flex-col gap-4">
                <p>{dictionary.summary.fourth.paragraphOne}</p>
                <p>{dictionary.summary.fourth.paragraphTwo}</p>
                <div className="flex gap-2">
                  <p className="text-xl w-4 flex justify-center items-center leading-[1em] border border-red-500">∕</p>
                  <p className="text-xl w-4 flex justify-center items-center leading-[1em] border border-red-500">⁄</p>
                  <p className="text-xl w-4 flex justify-center items-center leading-[1em] border border-green-500">/</p>
                </div>
                </div>
              </div>

            </div>
          </section>
          <section className="flex flex-col">
            <h2 className="font-bold flex items-center gap-2 text-2xl tracking-wider mb-2">{dictionary.test.title}</h2>
            <p>{dictionary.test.description}</p>
            <div className="mt-4 -translate-x-2">
            <LinkTest dictionary={dictionary.test}/>
            </div>
          </section>
          <section className="max-w-[380px]">
            <h2 className="font-bold flex items-center gap-2 text-2xl tracking-wider mb-4">{dictionary.about.title}</h2>
            <div className="flex flex-col gap-4">
            <p>{dictionary.about.firstParagraph}</p>
            <p>{dictionary.about.secondParagraph}</p>
            <p>{dictionary.about.thirdParagraph}</p>
            </div>
          </section>
          <section>
            <h2 className="font-bold flex items-center gap-2 text-2xl tracking-wider mb-4">{dictionary.sources.title}</h2>
            <div className="flex flex-col gap-2">
              <div>
            <a className="underline" href="https://medium.com/@bobbyrsec/the-dangers-of-googles-zip-tld-5e1e675e59a5" target="_blank" rel="noopener noreferrer">The dangers of Google’s .zip TLD</a>
            </div>
            <div>
            <a className="underline flex" href="https://en.wikipedia.org/wiki/Zip_bomb" target="_blank" rel="noopener noreferrer">Zip Bombs</a>
            </div>
            <div>
            <a className="underline flex" href="https://en.wikipedia.org/wiki/Supply_chain_attack" target="_blank" rel="noopener noreferrer">Supply Chain Attacks</a>
            </div>
            <div>
            <a className="underline flex" href="https://en.wikipedia.org/wiki/Watering_hole_attack" target="_blank" rel="noopener noreferrer">Watering Hole Attacks</a>
            </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
