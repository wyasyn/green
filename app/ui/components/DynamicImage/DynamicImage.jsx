import axios from "axios";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

export default async function DynamicImage({ src }) {
    const buffer = await axios(src).then(async (res) => {
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            blurDataURL={base64}
        />
    );
}
