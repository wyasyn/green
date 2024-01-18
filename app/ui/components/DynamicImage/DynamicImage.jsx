import Image from "next/image";

export default function DynamicImage({ src }) {
    return (
        <Image
            src={src}
            alt="Dynamic image"
            className="w-full h-full object-cover object-center "
            width={1920}
            height={1280}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
    );
}
