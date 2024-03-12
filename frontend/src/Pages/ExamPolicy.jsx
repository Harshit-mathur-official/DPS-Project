import Footer from "../Components/Footer";
import Header from "../Components/Header";

function ExamPolicy() {
    return (
        <>
            <Header />

            <section className="exam-policy">
                <div className="container exam-policy">
                    <div className="row mx-auto">
                        <div className="col-12">

                        </div>
                        <div class="col-lg-10 " style={{ margin: 'auto' }}>
                            <table align="center" class="table table-bordered table-hover table-condensed" style={{width:'100%', margin: 'auto' }}>
                                <thead className="text-center">
                                    <tr>
                                        <th colSpan={2}>
                                            <h4>Examination Policy (Session: 2024-25)</h4>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}>
                                            <h4>SCHEME OF EXAMINATIONS AND EVALUATION</h4>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}>
                                            <h6>CLASSES : NURSERY, KG & PREP</h6>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={2}>In Nursery, KG and Prep classes we emphasise on play-way and activity based teaching. Children are assessed on the basis of daily class performance and worksheets to be solved after a topic is over. Children are not graded at this stage. Report cards are given to the parents twice in a session for class Nursery and Prep. Teacher remains in regular contact with the parent to discuss the child's performance. <br /><br />

                                            Children are assessed on the basis of following:
                                        </td>
                                    </tr>
                                    <table align="center" className="table table-striped table-bordered table-hover table-condensed" style={{ margin: 'auto' }}>
                                        <tbody>
                                            <tr>
                                                <td>1.</td>
                                                <td>English</td>
                                                <td>English	Reading, Writing, Speaking and Listening Skills.</td>
                                            </tr>
                                            <tr>
                                                <td>2.</td>
                                                <td>Mathematics</td>
                                                <td>Counting, Number Value, Work Presentation & Activity.</td>
                                            </tr>
                                            <tr>
                                                <td>3.</td>
                                                <td>Environmental Science</td>
                                                <td>General awareness, Activity Independence from adults, Confidence, Care of belongings, Neatness, Sharing & Caring, Initiative, Self-control.</td>
                                            </tr>
                                            <tr>
                                                <td>4.</td>
                                                <td>Curriculum Interests</td>
                                                <td>Drawing & Colouring, Collage, Tearing & Pasting, Singing, Dancing, Rhymes and Stories, Games.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-lg-10 pt-5" style={{ margin: 'auto' }}>
                            <h3 className="text-center fw-bolder">EXAMINATION AND EVALUATION <br />
                                Session : 2019-20 <br />
                                Class : IX - X
                            </h3>
                            <table align="center" className="table-2 table table-striped table-bordered table-hover table-condensed" style={{ width: '100%', margin: 'auto'}}>
                                <thead>
                                    <tr>
                                        <th style={{ width: '150px' }}></th>
                                        <th colSpan={4}>Total 100 Marks <br />
                                            (Syllabus for assessment for Class IX - X)
                                        </th>
                                    </tr>
                                    <tr>
                                        <th rowSpan={3}>Subjects</th>
                                        <th rowSpan={3}>80 Marks<br />
                                            (Annual/Board Exam)<br />
                                            Student has to secure
                                            33% marks out of 80 marks in each subject
                                        </th>
                                        <th colSpan={3}>20 Marks (Internal Assessment)<br />
                                            Student has to secure 33% marks out of overall 20 marks earmarked in each subject
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Periodic Test
                                            (10 Marks)
                                        </th>
                                        <th>Notebook Submission<br />
                                            (5 Marks)
                                        </th>
                                        <th>Subject
                                            Enrichment Activity
                                            (5 Marks)
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>(i)</th>
                                        <th>(ii)</th>
                                        <th>(iii)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Language 1</td>
                                        <td rowSpan={5}>Annual/Board will conduct Class IX-X Examination for 80 marks in each subject covering 100% syllabus of the subject of Class IX-X only. <br />

                                            Marks and Grades both will be awarded for Individual subjects. 9-point grading will be same as followed by the Board in Class XII.
                                        </td>
                                        <td rowSpan={5}>Periodic written Test, restricted to three in each subject in an Academic Year. <br />
                                            Average of the best two tests to be taken for final marks submission
                                        </td>
                                        <td rowSpan={5}>This is cover :
                                            <ul>
                                                <li>Regularity</li>
                                                <li>Assignment Completion</li>
                                                <li>Neatness & upkeep of notebook</li>
                                            </ul>
                                        </td>
                                        <td>Speaking and listening skills</td>
                                    </tr>
                                    <tr>
                                        <td>Language 2</td>
                                        <td>Speaking and listening skills</td>
                                    </tr>
                                    <tr>
                                        <td>Science</td>
                                        <td>Practical Lab work</td>
                                    </tr>
                                    <tr>
                                        <td>Mathematics</td>
                                        <td>Maths Lab Practical</td>
                                    </tr>
                                    <tr>
                                        <td>Social Science</td>
                                        <td>Map work and Project Work</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={5} className="fs-6">
                                            <b>1. 	Average of Best two of Periodic -1, Periodic -2 and Periodic - 3	:</b> 	10 Marks <br />
                                            <b>2. 	Notebook Submission :</b> 05 Marks <br />
                                            <b>3. 	Subject Enrichment Activity	:</b>  05 Marks <br />
                                            <b>4. 	Annual / Board Examination	:</b>	 80 Marks

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ExamPolicy;