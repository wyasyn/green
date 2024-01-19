import Image from "next/image";
import { images } from "../../images";

export default function ProfilePic() {
    return (
        <div className="icon w-6 h-6 rounded-full overflow-clip bg-main pt-1">
            <Image
                className="w-full h-full object-cover object-top "
                src={images.prof}
                width={24}
                height={24}
                alt="profile pic"
                placeholder="blur"
            />
        </div>
    );
}
