import Image from "next/image";

interface ISkillLogo{
    img: string;
    alt: string;
}

export default function SkillLogo({img, alt}) {
    return (
        <>
            <Image className="Image-fluid"
                                src={img}
                                alt={alt} height={200} width={200}/>
        </>
    );
}