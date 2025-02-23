"use client"

import { useState } from 'react';
import Image from 'next/image';

interface Props {
    dictionary: {
        placeholder: string;
        safeLink: string;
        unsafeLink: string;
        invalidLink: string;
    }
}

export default function LinkTest ({dictionary}: Props) {
    const [value, setValue] = useState("");
    const [isZipDomain, setIsZipDomain] = useState<boolean | undefined>(undefined);
    const [isValidLink, setIsValidLink] = useState<boolean | undefined>(undefined);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);

        try {
            new URL(e.target.value);
            setIsValidLink(true);
            setIsZipDomain(testForZipDomain(e.target.value));
        } catch (_) {
            setIsValidLink(false);
        }
        
    };

    const testForZipDomain = (url: string) => {
        // Checks for unicode characters resembling forward slash and @ followed by .zip TLD
        const regex = /[@](.*\.zip)$/u;
        const unicodeSlashRegex = /[\u2044\u2215]/;
        return regex.test(url) && unicodeSlashRegex.test(url);
    };

    return (
        <div className="flex gap-4 items-center">
            <input 
                value={value}
                onChange={handleInputChange}
                className={`rounded-full ${!isValidLink ? "border-black" : isZipDomain ? "border-red-500 focus:outline-red-500" : "border-green-500 focus:outline-green-500"} border-2 border-opacity-50 px-4 py-1 w-full lg:w-[50%] `}
                placeholder={dictionary.placeholder}
            />
            <div>{isValidLink === undefined ? <></> : isValidLink === false ? <div className="text-sm opacity-50">{dictionary.invalidLink}</div> : !isZipDomain ? <div className="flex gap-1 items-center"><Image src="/images/check.png"  height={20} width={20} alt="green checkmark emoji" /> {dictionary.safeLink}</div> : <div className="flex gap-1 items-center"><Image src="/images/cross.png"  height={20} width={20} alt="red cross emoji"  />{dictionary.unsafeLink}</div>}</div>
        </div>
    )
}
