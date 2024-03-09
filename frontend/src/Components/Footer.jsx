import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
function Footer() {
    const sendMessage = () => {
        const phoneNumber = '1234567890';
        const message = encodeURIComponent('Hello!');

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl);
    };


    return (
        <>
            {/* Footer Section */}
            <footer>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row footer-border">
                            <div className="col-lg-6 col-md-6 col-l2 footer-right footer-border-1">
                                <h6>QUICK LINKS</h6>
                                <ul className="at-glance">
                                    <li>
                                        <a href="#">School Planner</a>
                                    </li>
                                    <li>
                                        <a href="#">Notice & Circular</a>
                                    </li>
                                    <li>
                                        <a href="#">Fee Structure</a>
                                    </li>
                                    <li>
                                        <a href="">Virtual Tour</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <div className="col-lg-4 col-md-6 col-12 footer-right">
                                <h6>ACADEMICS</h6>
                                <ul className="at-glance">
                                    <li>
                                        <a href="">Admission</a>
                                    </li>
                                    <li>
                                        <a href="">Awards</a>
                                    </li>
                                    <li>
                                        <a href="">Library</a>
                                    </li>
                                    <li>
                                        <a href="">ClassNclassNamees</a>
                                    </li>
                                    <li>
                                        <a href="">Facilities</a>
                                    </li>
                                </ul>
                            </div> */}
                            <div className="col-lg-6 col-md-12 col-l2 ps-lg-5 text-justify">
                                <h6>GET IN TOUCH</h6>
                                <ul className="address">
                                    <li>
                                        <a href="">Address: Bypass Road Pal, Pal Gaon, Jodhpur, 342014</a>
                                    </li>
                                    <li>
                                        <a href="tel:0291-2766886">Phone: 0291-2766886/887, 2946886/887 </a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@dpsjodhpur.in">Email: info@dpsjodhpur.in</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/*  */}
            <section>
                <div className="container-fluid bottom-layer">
                    <div className="row">
                        <div className="col-4 p-0 mx-auto" style={{ borderRight: '1px solid #fff' }}>
                            <button className="btn" type="button">
                                <a href="tel:91797 6447530">
                                    <FontAwesomeIcon icon={faPhone} style={{ paddingRight: '3px' }} />
                                    Call
                                </a>
                            </button>
                        </div>
                        <div className="col-4 p-0 mx-auto" style={{ borderRight: '1px solid #fff' }}>
                            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <a href="#">
                                    <FontAwesomeIcon icon={faEnvelope} style={{ paddingRight: '3px' }} />
                                    Enquire
                                </a>
                            </button>
                        </div>
                        <div className="col-4 p-0 mx-auto" style={{ borderRight: '1px solid #fff' }}>
                            <button className="btn" type="button">
                                <a href="#" onClick={sendMessage} target="_blank">
                                    <FontAwesomeIcon icon={faWhatsapp} style={{ paddingRight: '3px' }} />
                                    Message
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Footer;