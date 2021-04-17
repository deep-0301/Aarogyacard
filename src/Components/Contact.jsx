import React from 'react';
import "./Contact.css";


const Contact = () => {
    return (
        <>

            <section className="contact" id="contact">

                <h1 className="h1-responsive text-center my-4">Contact us</h1>

                <div className="row my-contact">

                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="#" method="POST">


                            <div className="row">

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" className="form-control" />
                                        <label htmlFor="name" className="">Your name</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="form-control" />
                                        <label htmlFor="email" className="">Your email</label>
                                    </div>
                                </div>


                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject" className="form-control" />
                                        <label htmlFor="subject" className="">Subject</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row">

                                {/* <!--Grid column--> */}
                                <div className="col-md-12">

                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                        <label htmlFor="message">Your message</label>
                                    </div>

                                </div>
                            </div>

                        </form>

                        <div className="text-center text-md-left ">
                            <button
                                className="btn btn-primary contact-btn"
                                style={{ border: "2px solid #4a5978 !important" }}
                            >
                                Submit
                            </button>
                        </div>

                    </div>
                </div>

            </section>
        </>
    );
}

export default Contact;