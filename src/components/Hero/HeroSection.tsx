import Image from "next/image";
import Particles from "react-tsparticles";
import { particlesOptions } from "./particlesConfig";
import Tilt from "react-parallax-tilt";
import styles from "./HeroSection.module.css";
import Typewriter, { Options } from "typewriter-effect";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

interface IHeroSectionProps {
    title?: string | string[];
    name?: string;
    img?: string;
    bio?: string;
}

const defaultProps = {
    title: ["Full Stack Web Developer", "Content Writer", "Crypto Trader", "CyberSecurity Enthusiast", "SEO Practitioner"],
    name: "Bipin Thapa",
    img: "/static/pp.jpg",
    bio: "I am a web developer with a passion for building and designing beautiful and functional websites. I am currently working as a freelancer and I am looking for a new challenge to work on."
}


export default function HeroSection({ title, name, img, bio }: IHeroSectionProps) {

    return (
        <section id="home">
            <div id="particles-js">
            
            <div className={styles.particles}>
                <Particles options={particlesOptions} />
            </div>
            <div className="header">

                <div className="width-auto">
                    <Tilt>
                        <Image className={styles.ProfilePic}
                            src={img}
                            alt="Profile Picture" height={240} width={240} placeholder="blur" blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" />
                    </Tilt>
                </div>

                <h1 style={{marginBottom: "-20px"}}>
                    <span className="site-title mb-2">{name}</span>
                    <span className="site-description pt-1"
                    >
                        <Typewriter
                            options={{
                                strings: title,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </h1>
                <h5 className="text-muted">{bio}</h5>
            </div>
            <div className={styles.down}>
                <Link href="#about">
                    <a>
                        <FaChevronDown />
                    </a>
                </Link>
            </div>
        </div>
        </section>
    );
}

HeroSection.defaultProps = defaultProps;