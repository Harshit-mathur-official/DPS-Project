import Footer from "../Components/Footer";
import Header from "../Components/Header";

function AlumniRegister() {
    return (
        <>
            <Header />

            {/* Alumni Register Section */}
            <section>
                <div class="container alumni-register">
                    <div class="row">
                        <div class="col-lg-8 pt-5" style={{margin:'auto'}}>
                            <form action="">
                                <label>Enter Students Name<span>*</span></label><br />
                                <input type="text" name="name" pattern="[a-zA-Z]+" placeholder="Enter Student Name" required />

                                <label>Enter Father's Name<span>*</span></label><br />
                                <input type="text" name="name" pattern="[a-zA-Z]+" placeholder="Enter Father Name" required />

                                <label>Year of Passout<span>*</span></label>
                                <input type="text" pattern="[0-9]" placeholder="Enter Year of Passout" required />

                                <label>No. of Years in Our School<span>*</span></label>
                                <input type="text" placeholder="Enter No. of Years" required />

                                <label>Present Address<span>*</span></label>
                                <input type="text" name="address" placeholder="Enter Present Address" required />

                                <label>Contact No.<span>*</span></label>
                                <input type="text" name="phone" pattern="[789][0-9]{9}" placeholder="Enter Contact No." required />

                                <label>Email Address<span>*</span></label>
                                <input type="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Enter Email Id" required />

                                <label>Present Position<span>*</span></label>
                                <label style={{fontSize:'11px'}}>(Studying/Occupation)</label>
                                <input type="text" placeholder="Enter Present Position" required />

                                <label>Reference Of Teachers<span>*</span></label>
                                <label style={{fontSize:'11px'}}>(Names of Teachers you remember)</label>
                                <input type="text" placeholder="Enter Reference Of Teacher" required />

                                <label>Reference Of Principals<span>*</span></label>
                                <label style={{fontSize:'11px'}}>(Names of Principals you remember)</label>
                                <input type="text" placeholder="Enter Reference Of Principal" required />

                                <label>Recent Photo<span>*</span></label>
                                <label style={{fontSize:'11px'}}>(Only Upoload .jpg/.png file)</label>
                                <input type="file" name="myfile" multiple style={{border:'0', padding:'0'}} />

                                <div class="text-end form-button">
                                    <input type="submit" value="Reset" class="btn btn-default" />
                                    <input type="submit" value="Submit" class="btn btn-success" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default AlumniRegister;