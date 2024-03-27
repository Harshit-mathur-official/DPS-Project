import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dpslogo from '../images/dpslogo.png';
import dpslogopng1024x1024 from '../images/dpslogopng1024x1024.png'
import logo from '../images/logo.png'
import { faEnvelope, faHouse, faLocationDot, faPhone, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faSquareXTwitter, faTwitter, faWhatsapp, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
function Header() {
    const data = { ename: "", email: "", emobile: "", ecomment: "", efile: "" };
    const [inputData, setInputdata] = useState(data);

    const handleData = (e) => {
        setInputdata({ ...inputData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        // setInputdata(
        //     { ename: "", email: "", emobile: "", ecomment: "", efile: "" }
        // )
        e.preventDefault();
        axios.post("http://localhost:5000/api/enquiry/add", inputData)
            .then(function (response) {
                console.log(response)
            })
            .catch(error => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data); // Log the response data
                    console.log(error.response.status); // Log the status code
                    console.log(error.response.headers); // Log the response headers
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })
    }


    const sendMessage = () => {
        const phoneNumber = '7737880141';
        const message = encodeURIComponent('Hello!');

        // Construct the WhatsApp API URL
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

        // Open the WhatsApp URL in a new window
        window.open(whatsappUrl);
    };

    return (
        <>
            {/* Model Section */}
            <section>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                    aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5 ps-lg-5" id="staticBackdropLabel">
                                    <img src={dpslogo} alt="" className="img-fluid" />
                                    <a href="index.html"></a>
                                </h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="modalform">
                                            <h2 className="text-center fs-4">Send your query</h2>
                                            <form method="post">
                                                <div>
                                                    <input type="text" name='ename' value={inputData.ename} className="form-control" placeholder="Your Name *" required onChange={handleData} />
                                                </div>
                                                <div>
                                                    <input type="text" name='email' value={inputData.email} className="form-control" placeholder="Your Email *" required onChange={handleData} />
                                                </div>
                                                <div>
                                                    <input type="tel" name='emobile' value={inputData.emobile} className="form-control " title="Please Enter 10 Digit Number"
                                                        placeholder="Mobile Number*" pattern="[1-9]{1}[0-9]{9}"
                                                        required="required" onChange={handleData} />
                                                </div>
                                                <div>
                                                    <textarea className="w-100 form-control" name='ecomment' value={inputData.ecomment} rows="4" placeholder="Comment*"
                                                        required="required" onChange={handleData}></textarea>
                                                </div>
                                                <div>
                                                    <input type="file" name='efile' value={inputData.efile} className="form-control" placeholder="Attach File" onChange={handleData} />
                                                </div>
                                                <div className="mx-auto mt-3 text-center">
                                                    <button type="submit" className="btn btn-outline-dark" onClick={handleSubmit}>Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Media Icons Section */}
            <section>
                <div className="icons">
                    <div className="twittericons">
                        <a href="https://twitter.com/DPSJOD" target="_blank">
                            <FontAwesomeIcon icon={faXTwitter} style={{ color: 'white', border: 'none' }} />
                        </a>
                    </div>
                    <div className="whatsappicons">
                        <a href="#" onClick={sendMessage} target='_blank'>
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </div>
                    <div className="facebookicons">
                        <a href="https://www.facebook.com/DelhiPublicSchoolJodhpur/" target="_blank">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </div>
                </div>
            </section>

            {/*  */}
            <section className="sticky-top">
                <div className="container-fluid marquees sticky-top">
                    <div className="row">
                        <div className="col-12">
                            <marquee width="100%" direction="alternate" behavior="alternate" scrollamount="4" scrolldelay="0">
                                <a href="">
                                    <b>ClassNclassName XI Admission Process (Session 2023-24)</b>
                                </a>
                                <span style={{ color: 'yellow' }}> &nbsp;&nbsp;.:::.&nbsp;&nbsp; </span>
                                <a href="">
                                    <b>Our Star Achievers of ClassNclassName XII</b>
                                </a>
                                <span style={{ color: 'yellow' }}> &nbsp;&nbsp;.:::.&nbsp;&nbsp; </span> <a href="">
                                    <b>Summer Break Schedule</b>
                                </a>
                            </marquee>
                        </div>
                    </div>
                </div>

                <div className="container-fluid top-header pb-0 contact-header sticky-top">
                    <div className="row text-center">
                        <div className="col-xxl-9 col-lg-8 col-md-8 p-0">
                            <ul className="d-flex align-items-center">
                                <li>
                                    <a href="tel:+0291-2766886">
                                        <FontAwesomeIcon icon={faPhone} className='pe-2' />0291-2766886/887, 2946886/887
                                    </a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faEnvelope} className='px-2' />
                                    <a href="mailto:info@dpsjodhpur.in">info@dpsjodhpur.in</a>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCircleQuestion} className='px-2' />
                                    <a href="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Enquiry</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-md-4 laptop me-0">
                            <ul className="d-flex align-items-center ">
                                <li>
                                    <a href="https://www.facebook.com/DelhiPublicSchoolJodhpur/" target="_blank">                                                               <FontAwesomeIcon icon={faFacebookF} style={{ borderRight: '2px  solid #fff', paddingRight: '10px' }} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UC7oJPEebMcsc9Cl0wQJ3SoA" target="_blank">
                                        <FontAwesomeIcon icon={faYoutube} style={{ color: '#f50000', borderRight: '2px solid #fff', paddingRight: '10px' }} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/DPSJOD" target="_blank">
                                        <FontAwesomeIcon icon={faXTwitter} style={{ borderRight: '2px solid #fff', paddingRight: '10px' }} />
                                    </a>
                                </li>
                                <li>
                                    <a className="fw-bolder"
                                        href="https://www.dpsjodhpur.in/DPSJodhpur/UserSpace/UserName/admin/DynamicFolder/2020-21/News/Bank_Link_Page.html"
                                        target="_blank" style={{ fontSize: '14px', borderRight: '2px solid #fff', paddingRight: '10px' }}>PAY FEE</a>
                                </li>
                                <li>
                                    <a className="fw-bolder" href=" #" style={{ color: 'yellow', fontSize: '14px' }}>ERP LOGIN
                                        <FontAwesomeIcon icon={faSignIn} style={{ paddingLeft: '5px', color: 'yellow', fontSize: '16px' }} /><i className="fa fa-sign-in" aria-hidden="true" ></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container-fluid header-navbar bg-light">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="index.html">
                            <img src={dpslogo} alt="DPS Jodhpur" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link">
                                        <FontAwesomeIcon icon={faHouse} style={{ fontSize: '18px', color: '#002100' }} />
                                    </Link>
                                </li>
                                <li className="nav-item dropdown dropdown-slide dropdown-hover">
                                    <Link to={'/about'} className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        About us
                                    </Link>
                                    <ul className="dropdown-menu" style={{ position: 'absolute', left: '-87px' }}>
                                        <div className="container">
                                            <div className="row" style={{ width: '800px' }}>
                                                <div className="col-lg-4 py-3">
                                                    <img src={dpslogopng1024x1024} className="img-fluid" alt="" style={{ padding: '0 20px' }} />
                                                </div>
                                                <div className="col-lg-4 py-3">
                                                    <h3 className="fs-4">Delhi Public School</h3>
                                                    <p>Affilated to CBSE<br />(Affiliation.No.1730156)</p>
                                                    <button className="about-button" href="about.html">Read More</button>
                                                </div>
                                                <div className="col-lg-4 py-3">
                                                    <ul className="about-section fs-6">
                                                        <li>At a Glance</li>
                                                        <li><a href="about.html#authoritiesMessages">Authorities Messages</a></li>
                                                        <li>Management Committee</li>
                                                        <li><Link to={'/faculty'}>Faculty Zone</Link></li>
                                                        <li><a href="about.html#visionandMission">Vision & Mission</a></li>
                                                        <li><a href="about.html#infrastructure">Infrastructure</a></li>
                                                        <li><a href="about.html#virtualtour">Virtual Tour</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={'#'} className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        admission
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to={'/admission-policy'} className="dropdown-item">Admission Policy</Link></li>
                                        <li><Link to={'/exam-policy'} className="dropdown-item">Exam Policy</Link></li>
                                        <li><Link to={'/hostel-policy'} className="dropdown-item">Hostel Policy</Link></li>
                                        <li><Link to={'/fee-structure'} className="dropdown-item">Fee Structure</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={'#'} className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        notice board
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">School News</a></li>
                                        <li><a className="dropdown-item" href="photo-gallery.html">Photo Gallery</a></li>
                                        <li><a className="dropdown-item" href="#">Newsletter</a></li>
                                        <li><a className="dropdown-item" href="#">School Magazine-Quest</a></li>
                                        <li><a className="dropdown-item" href="#">Academic Achievements</a></li>
                                        <li><a className="dropdown-item" href="#">Co-Curricular Achievements</a></li>
                                        <li><a className="dropdown-item" href="#">Sports Achievements</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={'#'} className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        CBSE Corner
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to={'/mandatory-public-disclosure'} className="dropdown-item">Mandatory Public
                                            Disclosure</Link></li>
                                        <li><a className="dropdown-item" href="#">CBSE General Circulars</a></li>
                                        <li><a className="dropdown-item" href="#">CBSE Previous Year QP</a></li>
                                        <li><a className="dropdown-item" href="#">Validate Transfer Certificate</a></li>
                                        <li><a className="dropdown-item" href="#">Academic Curriculum</a></li>
                                        <li><a className="dropdown-item" href="#">Board Results</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={'#'} className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Students corner
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Downloads</a></li>
                                        <li><a className="dropdown-item" href="#">School Calender</a></li>
                                        <li><a className="dropdown-item" href="#">School Planner</a></li>
                                        <li><a className="dropdown-item" href="#">School Circulars</a></li>
                                        <li><Link to={'/school-rules'} className="dropdown-item">School Rules</Link></li>
                                        <li><a className="dropdown-item" href="#">Student Council</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        alumni
                                    </Link>
                                    <ul className="dropdown-menu" style={{ position: 'absolute', left: '-3px', top: '145%', minWidth: '176.5px' }}>
                                        <li><Link to={'/alumni-register'} className="dropdown-item">Registers</Link></li>
                                        <li><a className="dropdown-item" href="#">Prestigious Alumni</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={'/contact'} className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        contact
                                    </Link>
                                    <ul className="dropdown-menu" style={{ position: 'absolute', left: '-707px' }}>
                                        <div className="container">
                                            <div className="row" style={{ width: '800px' }}>
                                                <div className="col-lg-4 py-3">
                                                    <h3 style={{ fontSize: '18px' }}>FIND US ON GOOGLE MAP</h3>
                                                    <iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.1819385428707!2d72.96465817510106!3d26.22327727706479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394189384a6aab61%3A0x65574cfc6e1f07a8!2sDPS%20Jodhpur!5e0!3m2!1sen!2sin!4v1684765372029!5m2!1sen!2sin"
                                                        width="100%" height="250" style={{ border: '0' }} allowFullScreen=""
                                                        loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                                </div>
                                                <div className="contact-details col-lg-4 py-3">
                                                    <h3 style={{ fontSize: '18px' }}>CONTACT DETAILS</h3><br />
                                                    <p><strong>Communication For-</strong></p>
                                                    <p>Admissions-<br /> <a href="mailto:admission@dpsjodhpur.in">admission@dpsjodhpur.in</a></p>
                                                    <p>Recruitments- <a href="mailto:recruitment@dpsjodhpur.in">recruitment@dpsjodhpur.in</a></p>
                                                    <p>Transport-<br /> <a href="mailto:transport@dpsjodhpur.in">transport@dpsjodhpur.in</a></p>
                                                    <p>General Query-<br /> <a href="mailto:info@dpsjodhpur.in">info@dpsjodhpur.in</a></p>
                                                </div>
                                                <div className="col-lg-4 py-3">
                                                    <h3 style={{ fontSize: '18px' }}>ADDRESS</h3><br />
                                                    <p style={{ fontSize: '18px' }}><strong>Delhi Public School</strong></p>
                                                    <div style={{ fontSize: '14px' }}>
                                                        Bypass Road Pal<br />
                                                        Jodhpur, 342014<br />
                                                        Rajasthan, India<br />
                                                        Phone: 0291-2766886<br />
                                                        Phone: 2946886<br /><br />
                                                    </div>
                                                    <div className="text-start me-2">
                                                        <a href="contact-us.html" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="">
                                                            <button type="button" onClick={handleSubmit}
                                                                style={{ backgroundColor: 'red', color: '#fff', border: 'none', fontSize: '15px', padding: '8px 40px' }}>ENQUIRY
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight"
                        aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasRightLabel">
                                <a className="navbar-brand" href="#">
                                    <img src={logo} width="50" alt="DPS Jodhpur" />
                                </a>
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link">
                                        <FontAwesomeIcon icon={faHouse} style={{ fontSize: '18px', color: '#002100' }} />
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={'/about'} className="nav-link fw-bolder">
                                        About Us
                                    </Link>
                                    {/* <ul className="dropdown-menu">
                                        <li><Link to={'#'} className="dropdown-item">At a Glance</Link></li>
                                        <li><a href="about.html#authoritiesMessages" className="dropdown-item">Authorities Messages</a></li>
                                        <li><a href="#" className="dropdown-item">School Management Committee</a></li>
                                        <li><Link to={'/faculty'} className='dropdown-item'>Our Team</Link></li>
                                        <li><a href="about.html#visionandMission" className='dropdown-item'>Vision & Mission</a></li>
                                        <li><a href="about.html#infrastructure" className='dropdown-item'>Infrastructure</a></li>
                                        <li><a href="about.html#virtualtour" className='dropdown-item'>Virtual Tour</a></li>
                                    </ul> */}
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={'#'} className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        admission
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to={'/admission-policy'} className="dropdown-item">Admission Policy</Link></li>
                                        <li><Link to={'/exam-policy'} className="dropdown-item">Exam Policy</Link></li>
                                        <li><Link to={'/hostel-policy'} className="dropdown-item">Hostel Policy</Link></li>
                                        <li><Link to={'/fee-structure'} className="dropdown-item">Fee Structure</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={'#'} className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        notice board
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">School News</a></li>
                                        <li><a className="dropdown-item" href="photo-gallery.html">Photo Gallery</a></li>
                                        <li><a className="dropdown-item" href="#">Newsletter</a></li>
                                        <li><a className="dropdown-item" href="#">School Magazine-Quest</a></li>
                                        <li><a className="dropdown-item" href="#">Academic Achievements</a></li>
                                        <li><a className="dropdown-item" href="#">Co-Curricular Achievements</a></li>
                                        <li><a className="dropdown-item" href="#">Sports Achievements</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={'#'} className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        CBSE Corner
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to={'/mandatory-public-disclosure'} className="dropdown-item">Mandatory Public
                                            Disclosure</Link></li>
                                        <li><a className="dropdown-item" href="#">CBSE General Circulars</a></li>
                                        <li><a className="dropdown-item" href="#">CBSE Previous Year QP</a></li>
                                        <li><a className="dropdown-item" href="#">Validate Transfer Certificate</a></li>
                                        <li><a className="dropdown-item" href="#">Academic Curriculum</a></li>
                                        <li><a className="dropdown-item" href="#">Board Results</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={'#'} className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Students corner
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Downloads</a></li>
                                        <li><a className="dropdown-item" href="#">School Calender</a></li>
                                        <li><a className="dropdown-item" href="#">School Planner</a></li>
                                        <li><a className="dropdown-item" href="#">School Circulars</a></li>
                                        <li><Link to={'/school-rules'} className="dropdown-item">School Rules</Link></li>
                                        <li><a className="dropdown-item" href="#">Student Council</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        alumni
                                    </Link>
                                    <ul className="dropdown-menu" style={{ position: 'absolute', left: '-3px', top: '145%', minWidth: '176.5px' }}>
                                        <li><Link to={'/alumni-register'} className="dropdown-item">Registers</Link></li>
                                        <li><a className="dropdown-item" href="#">Prestigious Alumni</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to={'/contact'} className="nav-link fw-bolder dropdown-toggle" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        contact
                                    </Link>
                                    <ul className="dropdown-menu" style={{ position: 'absolute', left: '-703px' }}>
                                        <div className="container">
                                            <div className="row" style={{ width: '800px' }}>
                                                <div className="col-lg-4 py-3">
                                                    <h3 style={{ fontSize: '18px' }}>FIND US ON GOOGLE MAP</h3>
                                                    <iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.1819385428707!2d72.96465817510106!3d26.22327727706479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394189384a6aab61%3A0x65574cfc6e1f07a8!2sDPS%20Jodhpur!5e0!3m2!1sen!2sin!4v1684765372029!5m2!1sen!2sin"
                                                        width="100%" height="250" style={{ border: '0' }} allowFullScreen=""
                                                        loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                                </div>
                                                <div className="contact-details col-lg-4 py-3">
                                                    <h3 style={{ fontSize: '18px' }}>CONTACT DETAILS</h3><br />
                                                    <p><strong>Communication For-</strong></p>
                                                    <p>Admissions-<br /> <a href="mailto:admission@dpsjodhpur.in">admission@dpsjodhpur.in</a></p>
                                                    <p>Recruitments- <a href="mailto:recruitment@dpsjodhpur.in">recruitment@dpsjodhpur.in</a></p>
                                                    <p>Transport-<br /> <a href="mailto:transport@dpsjodhpur.in">transport@dpsjodhpur.in</a></p>
                                                    <p>General Query-<br /> <a href="mailto:info@dpsjodhpur.in">info@dpsjodhpur.in</a></p>
                                                </div>
                                                <div className="col-lg-4 py-3">
                                                    <h3 style={{ fontSize: '18px' }}>ADDRESS</h3><br />
                                                    <p style={{ fontSize: '18px' }}><strong>Delhi Public School</strong></p>
                                                    <div style={{ fontSize: '14px' }}>
                                                        Bypass Road Pal<br />
                                                        Jodhpur, 342014<br />
                                                        Rajasthan, India<br />
                                                        Phone: 0291-2766886<br />
                                                        Phone: 2946886<br /><br />
                                                    </div>
                                                    <div className="text-start me-2">
                                                        <a href="contact-us.html" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="">
                                                            <button type="button" onClick={handleSubmit}
                                                                style={{ backgroundColor: 'red', color: '#fff', border: 'none', fontSize: '15px', padding: '8px 40px' }}>ENQUIRY
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-bolder" href="tel:02912766886">
                                        <FontAwesomeIcon icon={faPhone} className='pe-2' />0291-2766886/887, 2946886/887
                                    </a>
                                </li>
                                <li className="nav-item p-0">
                                    <a className="nav-link fw-bolder" href="mailto:info@dpsjodhpur.in">
                                        <FontAwesomeIcon icon={faEnvelope} className='pe-2' />info@dpsjodhpur.in
                                    </a>
                                </li>
                                <li className="nav-item fw-bolder">
                                    <FontAwesomeIcon icon={faCircleQuestion} className='pe-2' />
                                    <a href="" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ textDecoration: 'none', color: '#002100' }}>Enquiry</a>
                                </li>
                                <li className="nav-item mt-2">
                                    <button type="button" style={{ border: '0', backgroundColor: '#002147' }}>
                                        <a className="nav-link fw-bolder" href="https://www.dpsjodhpur.in/DPSJodhpur/UserSpace/UserName/admin/DynamicFolder/2020-21/News/Bank_Link_Page.html"
                                            target="_blank" style={{ color: '#fff', padding: '10px', fontSize: '14px' }} >PAY FEE</a>
                                    </button>
                                </li>
                                <li className="nav-item my-2">
                                    <button type="button" style={{ border: '0', backgroundColor: '#002147', padding: '10px' }}>
                                        <a className="fw-bolder" href="#" style={{ color: 'yellow', fontSize: '14px', textDecoration: 'none' }} >ERP LOGIN
                                            <i className="fa fa-sign-in" aria-hidden="true" style={{ color: 'yellow', fontSize: '16px' }}></i>
                                        </a>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Header;