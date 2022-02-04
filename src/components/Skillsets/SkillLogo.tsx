import Image from "next/image";

interface ISkillLogo {
  img: string;
  alt: string;
}

export default function SkillLogo({ img, alt }) {
  return (
    <>
      <Image
        className="img-fluid p-3 m-3"
        src={img}
        alt={alt}
        height={180}
        width={200}
      />
    </>
  );
}
