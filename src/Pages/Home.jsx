import { Card, HowCard, BlogCard } from '../components/AllComponents'
import { useEffect } from 'react';
import './Home.css'
import Showcase from "../assets/showcase.jpg"
import { PiTrolleySuitcaseFill } from "react-icons/pi";
import { FaShippingFast, FaPlus } from "react-icons/fa";
import Data from "../data/test.json"

export const Home = () => {

  useEffect(() => {
    document.title = "All"
  }, [])

  const data = Data;
  return (
    <>
      <div className="main-wrapper">
        <div className="hero-section">
          <h1>SPRING SALE</h1>
          <p>Here's a description of the featured collection or promotion.</p>
          <button>SHOP THE SALE</button>
        </div>
        <div className="latest-arrivals">
          <h3>Latest Arrivals</h3>
          <div className="card-wrapper">
            {
              data.phones.slice(0, 3).map((phone) => {
                return (
                  <li key={phone.id}>
                    <Card data={phone} />
                  </li>
                )
              })
            }
          </div>
        </div>
        <hr className='latest-arrivals-line' />
        <div className="showcase-section">
          <div className="image-side">
            <img src={Showcase} alt="" />
          </div>
          <div className="text-side">
            <h3>Unleash The Beast!!</h3>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptate vero ad. Ipsam, qui odio!</span>
            <a href="#">Learn More</a>
          </div>
        </div>
        <hr className='latest-arrivals-line' />
        <div className="latest-arrivals">
          <h3>Browse The Consoles</h3>
          <div className="card-wrapper">
            {
              data.consoles.slice(0, 3).map((phone) => {
                return (
                  <li key={phone.id}>
                    <Card data={phone} />
                  </li>
                )
              })
            }
          </div>
        </div>
        <hr className='latest-arrivals-line' />
        <div className="how-it-works">
          <h3>How it works?</h3>
          <div className="how-card-wrapper">
            <HowCard CardImage={"src/assets/securepayment.jpg"} TitleText={"Purchase Securely"} DescriptionText={"Lorem ipsum dolor sit amet, consectetur adipiscing."} IndexNumber={"1"} />
            <HowCard CardImage={"src/assets/warehouse.jpg"} TitleText={"Ships from warehouse"} DescriptionText={"Autem vel eum iure reprehenderit qui in ea voluptate velit esse."} IndexNumber={"2"} />
            <HowCard CardImage={"src/assets/latesttech.jpg"} TitleText={"Get Latest Tech"} DescriptionText={"Autem vel eum iure reprehenderit qui in ea voluptate velit esse."} IndexNumber={"3"} />
          </div>
        </div>
        <hr className='latest-arrivals-line' />
        <div className="blog-section">
          <h3>Blog Posts</h3>
          <div className="blogs-wrapper">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
        <hr className='latest-arrivals-line' />
        <div className="newsletter">
          <h3>Subscribe to our mailing list</h3>
          <p>Sign up to receive inspiration, product updates, and special offers from our team.</p>
          <div className="email-input-area">
            <input type="email" name="email" id="email" placeholder='Email Address' />
            <button className='btn-primary'>SUBSCRIBE</button>
          </div>
          <span>We’ll never share your details. View our  <a href="#">Privacy Policy</a>.</span>
        </div>
        <hr className='latest-arrivals-line' />
        <div className="perks-section">
          <span>
            <PiTrolleySuitcaseFill />
            <h5>Fuss Free Returns</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, in!</p>
          </span>
          <span>
            <FaShippingFast />
            <h5>Priority Shipping</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, in!</p>
          </span>
          <span>
            <FaPlus />
            <h5>NepTech Care Included</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, in!</p>
          </span>
        </div>
      </div>
    </>
  )
}
