import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
export default async function Priority({ src }) {
    const buffer = await fetch(src).then(async (res) => {
        return Buffer.from(await res.arrayBuffer());
    });
    const { base64 } = await getPlaiceholder(buffer);
    return (
        <Image
            src={src}
            alt="Dynamic image"
            className="w-full h-full object-cover object-center "
            width={1920}
            height={1280}
            priority
            blurDataURL={base64}
        />
    );
}
