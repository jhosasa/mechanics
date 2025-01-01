import Image from "@/components/Image";
import Tipografy from "@/components/Tipografy";

interface AvatarWithTextProps {
    src: string;
    alt: string;
    text: string;
    classNameAvatar?: string;
}

export default function AvatarWithText({
    src,
    alt,
    text,
    classNameAvatar,
}: AvatarWithTextProps) {
    return (
        <div className="flex items-center gap-4 cursor-pointer">
            <Image src={src} alt={alt} className={classNameAvatar} />
            <Tipografy as="h6">{text}</Tipografy>
        </div>
    );
}
