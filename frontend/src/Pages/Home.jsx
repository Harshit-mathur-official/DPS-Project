import React, { useEffect } from "react";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";

import AOS from "aos";
import 'aos/dist/aos.css';
import 'animate.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "video-react/dist/video-react.css";
import affiliation from '../images/AFFILIATION_CBSE.jpg';
import collabaration from '../images/COLLABORATION_ATL.jpg';
import membership from '../images/MEMBERSHIP_NPSC.jpg';
import accrediation from '../images/ACCREDITATION_IDS.jpg';
import infra1 from '../images/infra-1.jpg';
import infra2 from '../images/infra-2.jpg';
import infra3 from '../images/infra-3.jpg';
import event1 from '../images/event-1.jpg';
import achieve1 from '../images/achieve-1.png';
import achieve2 from '../images/achieve-2.png';
import achieve3 from '../images/achieve-3.png';
import achieve4 from '../images/achieve-4.png';
import { Player } from "video-react";
import NumberCounter from 'number-counter';
import Banner from '../images/SiteSlider.mp4'
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

function Home() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 200,
            offset: 100,
        });
    }, []);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <>

            <Header/>
            
            {/* Slider Section Starts of DPS */}
            <section>
                <div class="container-fluid slider px-0" style={{ backgroundColor: 'black' }}>
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-inner">
                            <Player src={Banner} className="d-block w-100" autoPlay muted />
                        </div>
                    </div>
                </div>
            </section>

            {/* News Update Section Start of DPS */}
            <section>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-2 col-12 text-center news-update">
                            <h3 class="">News Update</h3>
                        </div>
                        <div class="col-lg-10 col-12 news-update-list">
                            <Marquee direction="left" speed={30} delay={0} play pauseOnHover>
                                <ul>
                                    <li>
                                        <a href="#">CBSE Class XII and X Results (2022-23)</a>
                                    </li>
                                    <li>
                                        <a href="">National Technology Day</a>
                                    </li>
                                    <li>
                                        <a href="">Financial Literacy Program by Wealth Vidya</a>
                                    </li>
                                    <li>
                                        <a href="">Investiture Ceremony 2023-24</a>
                                    </li>
                                    <li>
                                        <a href="">Career Counselling by Pratham Institute New Delhi</a>
                                    </li>
                                    <li>
                                        <a href="">DPSJ Crowned with Sterling Silver</a>
                                    </li>
                                </ul>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </section>

            {/* Welcome Section Of DPS */}
            <section>
                <div className="container">
                    <div className="row m-auto">
                        <div className="col-lg-9 col-12 welcome-dps">
                            <p className="py-4">The Beginning of Delhi Public School Jodhpur dates back to 1998 when the long
                                cherished dream of
                                Mr. Dinesh Chand Kothari, Pro Vice Chairman, DPS Jodhpur, materialised in the form of a school.
                                The motivational force behind this noble endeavour of Mr. Kothari was Mr. D.R. Mehta, the then
                                Chairman, SEBI, Who encouraged Mr. Kothari to open an educational institution for the children
                                of Jodhpur to equip them to face the challenges of our ever changing global word. The herculean
                                task loomed large and was to be completed. At this juncture, the DPS Society, pioneer in the
                                field of education, reached out and provide the propelling force, the motivation and guidance to
                                Mr. D.C. Kothari, supporting him with everything that they could, to make it possible for him to
                                realise his dream in setting up the school. Thus the school stands today the dream child of Mr.
                                D.C. Kothari nurtured by the able guidance of the DPS Society. DPS Jodhpur which is promoted by
                                Shugan Chandra Kothari trust and managed by Delhi Public School Society because functional on
                                20th April 1998 at Ratanada with 280 children enrolled initially. The institution offering
                                comprehensive education for the school children gradually progressed and shifted to its own
                                building at Pal in the year 2001. Today the school stands proud amidst 15 acres of lush green
                                landscape, houses approx. 5000 students, and promises to give to the world learned &
                                intellectual citizens of tomorrow.</p>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className="notice-circular">
                                <div className="inside-notice-circular">
                                    <h3>Notices & Circulars</h3>
                                </div>
                                <div className="holder" style={{ border: '2px groove darkblue', padding: '10px' }}>
                                    <marquee direction="up" scrollamount="1" scrolldelay="10" onmouseover="this.stop();"
                                        onmouseout="this.start();" style={{ height: '250px' }}>
                                        <ul>
                                            <li>
                                                <a href="#">Notice - Examination Notice</a>
                                            </li>
                                            <li>
                                                <a href="#">Circular- Latest Timings in New Session 2023-24</a>
                                            </li>
                                            <li>
                                                <a href="#">Newsletter - March 2023</a>
                                            </li>
                                        </ul>
                                    </marquee>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 pt-lg-0 pt-4">
                            <div className="text-center about-img">
                                <img src={affiliation} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 pt-lg-0 pt-4">
                            <div className="text-center about-img">
                                <img src={collabaration} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 pt-lg-0 pt-2">
                            <div className="text-center about-img">
                                <img src={membership} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 pt-lg-0 pt-2">
                            <div className="text-center about-img">
                                <img src={accrediation} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure Section */}
            <section>
                <div className="container py-5">
                    <div className="row pt-4">
                        <div className="col-lg-4 col-md-6 col-12 pb-lg-0 pb-3">
                            <div className="blogs">
                                <div className="blog-img">
                                    <a href="primary-wing.html" target="_blank">
                                        <img src={infra1} className="img-fluid w-100" alt="" />
                                    </a>
                                </div>
                                <div className="blog-content">
                                    <p>
                                        <Link to={'/primary-wing'} target="_blank"> PRIMARY BLOCK</Link>
                                    </p>
                                    <p className="mt-0" style={{ color: 'green', fontSize: '18px', fontWeight: '600' }}>
                                        <Link to={'/primary-wing'}>CLASS NURSERY, KG, PREP, I-III</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 pb-lg-0 pb-3">
                            <div className="blogs">
                                <div className="blog-img">
                                    <a href="middle-wing.html" target="_blank">
                                        <img src={infra2} className="img-fluid w-100" alt="" />
                                    </a>
                                </div>
                                <div className="blog-content">
                                    <p>
                                        <Link to={'/middle-wing'} target="_blank">MIDDLE BLOCK</Link>
                                    </p>
                                    <p className="mt-0" style={{ color: 'green', fontSize: '18px', fontWeight: '600' }}>
                                        <Link to={'/middle-wing'}>CLASSES IV-VIII</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="blogs">
                                <div className="blog-img">
                                    <a href="senior-wing.html" target="_blank">
                                        <img src={infra3} className="img-fluid w-100" alt="" />
                                    </a>
                                </div>
                                <div className="blog-content">
                                    <p>
                                        <Link to={'/senior-wing'} target="_blank">SENIOR BLOCK</Link>
                                    </p>
                                    <p className="mt-0" style={{ color: 'green', fontSize: '18px', fontWeight: '600' }}>
                                        <Link to={'/senior-wing'}>CLASSES IX-XII</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Slick Slider of Events Gallery Section */}
            <section className="event_gallery pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center">Events <span style={{ color: '#00a651' }}>Gallery</span></h2>
                            <Slider {...settings}>
                                <div className="item">
                                    <div className="events">
                                        <div className="event-img">
                                            <a href="primary-wing.html" target="_blank">
                                                <img src={event1} className="img-fluid w-100" alt="" />
                                            </a>
                                            <div className="event-date-wrap">
                                                <span className="event-date">6<sup>th</sup></span>
                                                <span>Dec</span>
                                            </div>
                                        </div>
                                        <div className="event-content">
                                            <h3>
                                                <a href="primary-wing.html" target="_blank">REPUBLIC DAY 2023 CELERATION</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="events">
                                        <div className="event-img">
                                            <a href="primary-wing.html" target="_blank">
                                                <img src={event1} className="img-fluid w-100" alt="" />
                                            </a>
                                            <div className="event-date-wrap">
                                                <span className="event-date">6<sup>th</sup></span>
                                                <span>Dec</span>
                                            </div>
                                        </div>
                                        <div className="event-content">
                                            <h3>
                                                <a href="primary-wing.html" target="_blank">REPUBLIC DAY 2023 CELERATION</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="events">
                                        <div className="event-img">
                                            <a href="primary-wing.html" target="_blank">
                                                <img src={event1} className="img-fluid w-100" alt="" />
                                            </a>
                                            <div className="event-date-wrap">
                                                <span className="event-date">6<sup>th</sup></span>
                                                <span>Dec</span>
                                            </div>
                                        </div>
                                        <div className="event-content">
                                            <h3>
                                                <a href="primary-wing.html" target="_blank">REPUBLIC DAY 2023 CELERATION</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="events">
                                        <div className="event-img">
                                            <a href="primary-wing.html" target="_blank">
                                                <img src={event1} className="img-fluid w-100" alt="" />
                                            </a>
                                            <div className="event-date-wrap">
                                                <span className="event-date">6<sup>th</sup></span>
                                                <span>Dec</span>
                                            </div>
                                        </div>
                                        <div className="event-content">
                                            <h3>
                                                <a href="primary-wing.html" target="_blank">REPUBLIC DAY 2023 CELERATION</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievement Section */}
            <section>
                <div class="container-fluid pt-5">
                    <div class="container">
                        <div class="row m-auto">
                            <div class="col-lg-3 col-md-6 col-6">
                                <div class="counter counter-one">
                                    <div class="counter-img">
                                        <img src={achieve1} alt="" />
                                    </div>
                                    <div class="counter-content">
                                        <h2>4.5K +</h2>
                                        <span>STUDENTS</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-6">
                                <div class="counter-two counter">
                                    <div class="counter-img">
                                        <img src={achieve2} alt="" />
                                    </div>
                                    <div class="counter-content">
                                        <h2><NumberCounter end={175} className="increment" /></h2>
                                        <span>TEACHERS</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-6">
                                <div class="counter-three counter">
                                    <div class="counter-img">
                                        <img src={achieve3} alt="" />
                                    </div>
                                    <div class="counter-content">
                                        <h2>1K +</h2>
                                        <span>AWARDS</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-6">
                                <div class="counter-four counter">
                                    <div class="counter-img">
                                        <img src={achieve4} alt="" />
                                    </div>
                                    <div class="counter-content">
                                        <h2><NumberCounter end={120} className="increment" /></h2>
                                        <span>SMART CLASSES</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore Us Section */}
            <section>
                <div class="container explore-us">
                    <div class="row pt-5">
                        <div class="col-lg-6 col-12">
                            <div class="dps-location pb-3">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.1819385428707!2d72.96465817510106!3d26.22327727706479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394189384a6aab61%3A0x65574cfc6e1f07a8!2sDPS%20Jodhpur!5e0!3m2!1sen!2sin!4v1684765372029!5m2!1sen!2sin"
                                    width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                        <div class="col-lg-6 col-12">
                            <div class="dps-videos pb-3">
                                <iframe width="100%" height="450" src="https://www.youtube.com/embed/eJG1noHnV-4"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default Home;