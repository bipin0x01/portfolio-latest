import Image from "next/image";

export default function BlogCard({ title, Img, description, tags, date, author }) {
    return (
        <>
           <div className="col-lg-4">
           <div className="container px-4">
                <div className="blogcard">
                    <div className="blogcard-header">
                        <Image src="/static/pp.jpg" alt="" height={200} width={300} layout="responsive" />
                    </div>
                    <div className="blogcard-body">
                        <div className="d-inline">
                        {tags.map((item, i) => {
                            return (
                                <span key={i} className="badge badge-pill text-primary border border-primary tag mx-1">{item}</span>
                            )
                        })
                        }
                        </div>
                        <h4>{title}</h4>
                        <p>
                            {description}
                        </p>
                        <div className="user">
                            <div className="author-img mx-1">
                                <Image src={Img} alt="Author" height={45} width={45} />
                            </div>
                            <div className="user-info">
                                <h5>{author}</h5>
                                <small>{date}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </>
    );
}