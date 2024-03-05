import Footer from "../Components/Footer";
import Header from "../Components/Header";

function ExamPolicy () {
    return (
        <>
            <Header/>

            <section>
                <div className="container exam-policy">
                    <div className="row mx-auto">
                        <div className="col-12">

                        </div>
                        <div class="col-lg-10 " style={{margin:'auto'}}>
                            <table align="center" class="table table-bordered table-hover table-condensed" style={{margin:'auto'}}>
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
                                    <table align="center" className="table table-striped table-bordered table-hover table-condensed" style={{margin:'auto'}}>
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
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default ExamPolicy;