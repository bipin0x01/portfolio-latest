import Image from "next/image";

export default function ContactSection() {
    return (
        <>
            <section id="contact">
    <div className="container col-lg-10 mx-auto mt-5 mb-5">
        <div className="mb-4 text-center">
            <h1 id="contact"><strong>Contact</strong></h1>
        </div>
        <div className="row contact-form">
            <div className="col-xl-6">
                <form className="form">
                    <p >Name:<input placeholder="Write your name here.."></input></p>
                    <p>Email:<input placeholder="Let us know how to contact you back.."></input></p>
                    <p>Message:<textarea rows={6} cols={20} placeholder="What would you like to tell us.."></textarea></p>
                    <button>Send Message</button>
                    <div className="bot">
                        <span className="fa fa-phone"></span>+977 986071####
                        <span className="fa fa-envelope-o"></span> mr.btkaji@gmail.com
                    </div>
                </form>
            </div>
            <div className="col-xl-6 Image-fluid d-none d-xl-block">
                <Image src="/static/contact.svg" width={600} alt="Contact" height={500} layout="responsive"/>
            </div>
        </div>
    </div>
</section>
        </>
    );
}