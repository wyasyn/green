import Image from "next/image";

export default async function Priority({ src }) {
    return (
        <Image
            src={src}
            alt="Dynamic image"
            className="w-full h-full object-cover object-center "
            width={1920}
            height={1280}
            priority
        />
    );
}
