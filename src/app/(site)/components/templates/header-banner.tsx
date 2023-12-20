import Image from "next/image";

interface Props {
    image: any;
    altText: string;
    blurData: string;
    title: string;
}

export default function HeaderBanner({ altText, image, blurData, title }: Props) {

    return (
        <div className="relative isolate inset-0 overflow-hidden md:h-[30vh] h-60">
            <Image
                src={image}
                alt={altText}
                placeholder={blurData ? 'blur' : 'empty'}
                blurDataURL={blurData}
                // width={2000}
                // height={683}
                fill={true}
                className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/80"></div>
            <div className="flex justify-center items-center relative z-50 h-full content">
                <h1 className="!text-white">{title}</h1>
            </div>
        </div>
    );
}