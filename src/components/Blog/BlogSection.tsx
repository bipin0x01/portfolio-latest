import Link from "next/link";
import BlogCard from "./BlogCard";

export default function BlogSection({children}) {
    return (
        <section id="blog">
            <div className="container col-lg-10 mx-auto mt-5 mb-5">
                <div className="mb-4 text-center">
                    <h1 id="blog"><strong>Latest Blogs</strong></h1>
                </div>
                <div className="row">
                    {children}
                </div>
            </div>
        </section>
    );
}