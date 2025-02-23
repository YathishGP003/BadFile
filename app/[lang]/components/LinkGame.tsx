"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  dictionary: {
    good: string;
    bad: string;
    headlineOne: string;
    headlineTwo: string;
    badResult: string;
    goodResult: string;
    correct: string;
    retry: string;
  };
}

const links = [
  {
    display: "https://github.com/YathishGP003",
    url: "https://github.com/YathishGP003",
    good: true,
  },
  {
    display: "https://drive.google.com/1235.zip",
    url: "https://drive.google.com/1235.zip",
    good: true,
  },

  {
    display: "https://github.com⁄word.zip",
    url: "https://github.com⁄@word.zip",
    good: false,
  },
  {
    display: "https://dropbox.com∕@images.zip",
    url: "https://dropbox.com∕@images.zip",
    good: false,
  },
  {
    display: "https://dropbox.com/1235.zip",
    url: "https://dropbox.com/1235.zip",
    good: true,
  },
  {
    display: "https://github.com⁄@transformers.zip",
    url: "https://github.com⁄@transformers.zip",
    good: false,
  },
  {
    display: "https://mega.nz⁄myfiles.zip",
    url: "https://mega.nz⁄@myfiles.zip",
    good: false,
  },
  {
    display: "https://drive.google.com∕@application.zip",
    url: "https://drive.google.com∕@application.zip",
    good: false,
  },
  {
    display: "https://onedrive.com⁄@desktop.zip",
    url: "https://onedrive.com⁄@desktop.zip",
    good: false,
  },
  {
    display: "https://mega.nz/vacation.zip",
    url: "https://mega.nz/vacation.zip",
    good: true,
  },
];

export default function LinkGame({ dictionary }: Props) {
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(0);
  const [currentLink, setCurrentLink] = useState(links[0]);

  const nextLink = (isGood: boolean) => {
    if (round === 10) {
      return;
    }

    if (isGood === currentLink.good) {
      setScore(score + 1);
    }
    setRound(round + 1);
  };

  useEffect(() => {
    setCurrentLink(links[round]);
  }, [round]);

  const retry = () => {
    setScore(0);
    setRound(0);
    setCurrentLink(links[0]);
  };

  return (
    <div className=" flex flex-col lg:items-end mt-32 lg:mt-0">
      <div className="w-[350px]">
        <div className="h-[150px]">
          <h2 className="font-bold flex items-center gap-2 text-2xl tracking-wider mb-5 ">
            {dictionary.headlineOne}{" "}
            <span className="flex flex-col leading-[.9em] -translate-y-0.5 font-bungee text-3xl text-red-500 select-none">
              <span>B</span>
              <span>A</span>
              <span>D</span>
            </span>{" "}
            {dictionary.headlineTwo}
          </h2>
          <div className="flex">
            {round === 10 ? (
              <div>
                <p className={`${score < 5 ? "text-red-500" : ""}`}>
                  {score < 5 ? dictionary.badResult : dictionary.goodResult}
                </p>
                <p>
                  {score} {dictionary.correct}
                </p>
              </div>
            ) : (
              <a
                href={currentLink.url}
                className="flex tracking-wider bg-black p-2 text-white"
              >
                {currentLink.display}
              </a>
            )}
          </div>
        </div>
        <div className="flex gap-5 mt-8 items-center">
          <button
            className="bg-white rounded-lg border-black flex gap-2 items-center px-2 py-1  hover:border-green-500 border-2"
            onClick={() => nextLink(true)}
          >
            {dictionary.good}
            <Image
              src="/images/check.png"
              height={20}
              width={20}
              alt="green checkmark emoji"
            />
          </button>
          <button
            className="bg-white border-2 rounded-lg border-black flex gap-2 items-center px-2 py-1  hover:border-red-500"
            onClick={() => nextLink(false)}
          >
            {dictionary.bad}
            <Image
              src="/images/cross.png"
              height={20}
              width={20}
              alt="red cross emoji"
            />
          </button>
          <div>
            {round !== 10 ? (
              <>
                <span>{round}</span>/<span>10</span>
              </>
            ) : (
              <button
                onClick={() => retry()}
                className="border-2 rounded-lg border-black flex gap-2 items-center px-2 py-1 bg-black text-white"
              >
                {dictionary.retry}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
