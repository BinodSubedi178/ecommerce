import Blog from '../assets/securepayment.jpg'
import './BlogCard.css'
export const BlogCard = () => {
    return (
        <div className="blog-card">
            <img src={Blog} alt="" />
            <p>Dec 2025</p>
            <h4>Blog Title Here</h4>
        </div>
    )
}