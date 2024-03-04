import provicechairman from '../images/pro-vice-chairman.jpg';
import principal from '../images/Principal.jpg';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import infra1 from '../images/infra-1.jpg'
import infra2 from '../images/infra-2.jpg';
import infra3 from '../images/infra-3.jpg';
import hostel from '../images/hostel.jpg';
import { Link } from 'react-router-dom';

function About() {
    return (
        <>
            <Header />

            {/*  */}
            <section className="container-fluid py-5" id="authoritiesMessages">
                <div className="container authorities_message">
                    <div className="row">
                        <h3>Authorities <span>Messages</span></h3>
                        <div style={{ backgroundColor: 'bisque' }}>
                            <div className="row">
                                <div className="col-md-8 message">
                                    <h2><i>Swami Vivekananda once said, "Education is the manifestation of the perfection
                                        already in man".</i></h2>
                                    <p>Adequately realizing this need, the school becomes the axis of knowledge, erudition and
                                        empowerment. With growth and change at a global level, it is our endeavour to provide
                                        quality education to make every child eligible to compete with the world outside,
                                        cultivating not merely the intellect but also nurturing in them the moral & ethical
                                        values. Thus, making them capable of assimilating, understanding and deciding the course
                                        of action. Our vision of true education is creating a healthy surrounding, upholding
                                        moral values and imbibing life-skills in our students, addressing the global issues and
                                        the dynamic system of education. Change is the face of life , and this universal truth
                                        is analysed and identified by the school, thereby creating a conducive and caring
                                        learning environment, maintaining the cultural identity of the learners.</p>
                                    <p>The role and responsibility of stakeholders increase manifold in order to accept the
                                        universal and humungous facets of change. The child of today is more alert and exposed.
                                        Behavioural changes and peer influence give rise to a demeanour which demands a healthy
                                        collaboration among all the stakeholders. This will foster the unity of purpose and
                                        evolve a methodical and decorous learning environment. The core component of
                                        infrastructure being fulfilled through the spectacular premises, the next vital
                                        reinforcement would be through parents, teachers and the management of the school.
                                        Teachers are the creators and parents nurture this beautiful creation. Parents
                                        contribution in devising the policies with their active supervision certainly will
                                        promote a safe & healthy school climate. They also instill the basic values and
                                        responsibility and offer a constructive input for the development of school system. By
                                        monitoring the activities outside school, they help the mentors to fulfill the childs
                                        needs and channeling his behavioural patterns. Similarly, the selfmotivated teachers
                                        encourage the students at every step, keeping abreast of the emerging dimensions of the
                                        society. At the same time demonstrating values of kindness, respect and tolerance.</p>
                                    <p className="pb-2">All the stakeholders should carefully view the diversity of atmosphere and
                                        take the onus on them to provide a secure and distinguished system of education,
                                        considering the inevitable changes. In our school the latest reforms of CCE are
                                        seamlessly integrated, expanding the potential of the students, thereby empowering them.
                                        The spectrum of curriculum encompasses the needs, aspirations and global well-being of
                                        individuals. The scholastic and co-scholastic activities enhance the creativity,
                                        imagination, moral & intellectual capital of the students giving way to a well defined
                                        holistic personality, thus fulfilling the need of the hour. With the consistent and
                                        conscientious efforts of the stakeholders, the school fosters a magnificent and
                                        memorable learning experience.</p>
                                </div>
                                <div className="col-md-4 image">
                                    <img src={provicechairman} alt="" />
                                    <h2>DINESH C. KOTHARI</h2>
                                    <h3>(Pro Vice Chairman)</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container p-0" style={{ marginTop: '100px' }}>
                    <div style={{ backgroundColor: 'darkblue', color: 'white', padding: '0% 2% 2%', marginTop: '-1%', }}>
                        <div className="row authorities_message pt-5">
                            <div className="col-md-4 image">
                                <img src={principal} alt="Director & Principal" style={{ marginTop: '-35%' }} />
                                <h2>BIKRAM SINGH YADAV</h2>
                                <h3 className='text-light'>(Director & Principal)</h3>
                            </div>
                            <div className="col-md-8 message">
                                <h2><i>Swami Vivekananda once said, "Education is the manifestation of the perfection already in
                                    man".</i></h2>
                                <p>Adequately realizing this need, the school becomes the axis of knowledge, erudition and
                                    empowerment. With growth and change at a global level, it is our endeavour to provide
                                    quality education to make every child eligible to compete with the world outside,
                                    cultivating not merely the intellect but also nurturing in them the moral & ethical values.
                                    Thus, making them capable of assimilating, understanding and deciding the course of action.
                                    Our vision of true education is creating a healthy surrounding, upholding moral values and
                                    imbibing life-skills in our students, addressing the global issues and the dynamic system of
                                    education. Change is the face of life , and this universal truth is analysed and
                                    identified by the school, thereby creating a conducive and caring learning environment,
                                    maintaining the cultural identity of the learners.</p>
                                <p>The role and responsibility of stakeholders increase manifold in order to accept the
                                    universal and humungous facets of change. The child of today is more alert and exposed.
                                    Behavioural changes and peer influence give rise to a demeanour which demands a healthy
                                    collaboration among all the stakeholders. This will foster the unity of purpose and evolve a
                                    methodical and decorous learning environment. The core component of infrastructure being
                                    fulfilled through the spectacular premises, the next vital reinforcement would be through
                                    parents, teachers and the management of the school. Teachers are the creators and parents
                                    nurture this beautiful creation. Parents contribution in devising the policies with their
                                    active supervision certainly will promote a safe & healthy school climate. They also instill
                                    the basic values and responsibility and offer a constructive input for the development of
                                    school system. By monitoring the activities outside school, they help the mentors to fulfill
                                    the childs needs and channeling his behavioural patterns. Similarly, the selfmotivated
                                    teachers encourage the students at every step, keeping abreast of the emerging dimensions of
                                    the society. At the same time demonstrating values of kindness, respect and tolerance.</p>
                                <p>All the stakeholders should carefully view the diversity of atmosphere and take the onus on
                                    them to provide a secure and distinguished system of education, considering the inevitable
                                    changes. In our school the latest reforms of CCE are seamlessly integrated, expanding the
                                    potential of the students, thereby empowering them. The spectrum of curriculum encompasses
                                    the needs, aspirations and global well-being of individuals. The scholastic and
                                    co-scholastic activities enhance the creativity, imagination, moral & intellectual capital
                                    of the students giving way to a well defined holistic personality, thus fulfilling the need
                                    of the hour. With the consistent and conscientious efforts of the stakeholders, the school
                                    fosters a magnificent and memorable learning experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="vision_and_mission py-2 my-3" id="">
                <div className="container" id="visionandMission">
                    <div className="row">
                        <h3>Vission <span>& Mission</span></h3>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-3" style={{ backgroundColor: 'cyan' }}>
                            <div className="mission">
                                <h2>Mission</h2>
                                <p>The Mission of Delhi Public School Jodhpur is to empower students and teachers enabling them
                                    to blossom their potential to the optimum level for the good of the society and also
                                    students develop their skills and competencies essential to succeed in emerging creative
                                    economy and environment. To train minds to live in harmony and friendship.</p>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="mission_list">
                                <div className="row">
                                    <div className="col-lg-3 col-6 p-0">
                                        <div className="mission_box">
                                            <p>Leader Imbibe strong ethics, rational decision making and leadership with a sense
                                                of team work.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 p-0">
                                        <div className="mission_box">
                                            <p>Learner Take responsibility for learning, develop intellectual curiosity and
                                                become life-long learners.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 p-0">
                                        <div className="mission_box">
                                            <p>Thinker Be a creative, innovative and logical thinker.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 p-0">
                                        <div className="mission_box">
                                            <p>Communication Think, speak and write with precision, clarity and fluency.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 p-0">
                                        <div className="mission_box">
                                            <p>Discipline Practice self-discipline be organized and lead a healthy and balanced
                                                life.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 p-0">
                                        <div className="mission_box">
                                            <p>Perseverance The tenacity to hold on to your aspirations against all odds.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 p-0">
                                        <div className="mission_box">
                                            <p>Empathy Understand others perspective and grow along.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-6 p-0">
                                        <div className="mission_box">
                                            <p>Integrity Adhering to principles and righteousness.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className="col-md-9">
                            <div className="vision_list">
                                <div className="row">
                                    <div className="col-6 p-0">
                                        <div className="vision_box">
                                            <p>Envisioning the growth at global level, DPS Jodhpur will work upon developing
                                                intelligence, curiosity and a sense of responsibility amongst its learners to
                                                help the community at large.</p>
                                        </div>
                                    </div>
                                    <div className="col-6 p-0">
                                        <div className="vision_box">
                                            <p>Values of collaboration, ethical decision making, service to society will be of
                                                paramount importance so as to prepare the students to work harmoniously in
                                                intensive environs.</p>
                                        </div>
                                    </div>
                                    <div className="col-6 p-0">
                                        <div className="vision_box">
                                            <p>To ensure that the teachers remain committed to the welfare of the students
                                                thereby enabling them to develop their creativity in any field of their choice
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-6 p-0">
                                        <div className="vision_box">
                                            <p>The parents to be empowered through interactions so that they bring up their
                                                children with the right values.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3" style={{ backgroundColor: 'cyan' }}>
                            <div className="vision">
                                <h2>Vision</h2>
                                <p>"Connecting, engaging, and empowering our community through innovation and user-friendly
                                    experiences."</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container infrastructure pb-4" id="infrastructure">
                    <div className="row">
                        <h3>DPS <span>Infrastructure</span></h3>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12 px-1 mb-3">
                            <div className="blogs">
                                <div className="blog-img">
                                    <Link to={'/primary-wing'} target="_blank">
                                        <img src={infra1} className="img-fluid w-100" alt="" />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <p>
                                        <Link to={'/primary-wing'} target="_blank"> PRIMARY BLOCK</Link>
                                    </p>
                                    <p className="mt-0" style={{ color: 'green', fontSize: '18px', fontWeight: '600' }}>
                                        <Link to={'/primary-wing'}>CLASSNclassName NURSERY, KG, PREP, I-III</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 px-1 mb-3">
                            <div className="blogs">
                                <div className="blog-img">
                                    <Link to={'/middle-wing'} target="_blank">
                                        <img src={infra2} className="img-fluid w-100" alt="" />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <p>
                                        <Link to={'/middle-wing'} target="_blank">MIDDLE BLOCK</Link>
                                    </p>
                                    <p className="mt-0" style={{ color: 'green', fontSize: '18px', fontWeight: '600' }}>
                                        <Link to={'/middle-wing'}>CLASSNclassNameES IV-VIII</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 px-1 mb-3">
                            <div className="blogs">
                                <div className="blog-img">
                                    <Link to={'/senior-wing'} target="_blank">
                                        <img src={infra3} className="img-fluid w-100" alt="" />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <p>
                                        <Link to={'/senior-wing'} target="_blank">SENIOR BLOCK</Link>
                                    </p>
                                    <p className="mt-0" style={{ color: 'green', fontSize: '18px', fontWeight: '600' }}>
                                        <Link to={'/senior-wing'}>CLASSNclassNameES IX-XII</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 px-1 mb-3">
                            <div className="blogs">
                                <div className="blog-img">
                                    <Link to={'/hostel'} target="_blank">
                                        <img src={infra1} className="img-fluid w-100" alt="" />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <p>
                                        <Link to={'/hostel'} target="_blank">HOSTEL BLOCK</Link>
                                    </p>
                                    <p className="mt-0" style={{ color: 'green', fontSize: '18px', fontWeight: '600' }}>
                                        <Link to={'/hostel'}>FOR ALL STUDENTS</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container virtualTour" id="virtualtour">
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                                <h3>Virtual<span>Tour</span></h3>
                            </div>
                            <div>
                                <iframe width="100%" height="500" src="https://www.youtube.com/embed/eJG1noHnV-4"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default About;