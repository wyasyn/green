import Image from "next/image";

export default function ProfilePic() {
    return (
        <div className="w-10 h-10 rounded-full overflow-clip grid place-items-center">
            <Image
                className="w-full h-full object-cover object-center "
                src="/images/logo-gradient.svg"
                width={24}
                height={24}
                alt="profile pic"
            />
        </div>
    );
}
