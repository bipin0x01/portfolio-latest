import Image from "next/image";

interface ISkillLogo {
  img: string;
  alt: string;
  size: number;
}

export default function SkillLogo({ img, alt, size }: ISkillLogo) {
  return (
    <>
      <Image
        className="Image-fluid p-4"
        src={img}
        alt={alt}
        height={200}
        width={size * 100}
      />
    </>
  );
}
