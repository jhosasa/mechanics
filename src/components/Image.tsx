interface ImageProps {
    src: string;
    alt: string;
    className?: string;
}

export default function Image({ src, alt, className }: ImageProps) {
    return <img src={src} alt={alt} className={`object-cover ${className}`} loading="lazy" />;
}