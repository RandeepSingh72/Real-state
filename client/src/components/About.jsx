import React from 'react';
import aboutImg from '../assets/images/img.jpg'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
         <section className="bg-white about-section section-padding" id="section_2">
        <div className="container">
            <div className="row">

                <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
                    <div className="services-info">
                        <h2 className="text-dark mb-4">Meet Janet Shiwram </h2>
                        <p className="text-dark">Meet Janet Shiwram, a seasoned realtor with a unique twist – she's not just skilled in the art of property transactions, but also holds a background in psychotherapy. Born and raised in a bustling urban center, Emily discovered her passion while she was buying her own house. However, her journey started with meeting people with various mental health conditions when she decided to pursue Psychotherapy Practitioner Training even before her real estate career.</p>

                        <p className="text-dark">Janet's educational background includes a Diploma and discovering a Total Self Program, which laid the foundation for her interest in understanding the human mind. And she did not stop there, she even upgraded her education with an additional Diploma in Addictions Counselling & Social Service. Eager to merge her love for real estate with her fascination for psychology, she embarked on a dual career path that helps her counselling her clients well to take the right decision on their most expensive purchase.</p>
                        <Link to={'/about-page'} className="btn custom-btn smoothscroll">Learn More</Link>
                      </div>
                </div>

                <div className="col-lg-6 col-12">
                    <div className="about-text-wrap">
                        <img src={aboutImg} className="about-image img-fluid" />

                        <div className="about-text-info d-flex">
                            <div className="d-flex">
                            <i className="about-text-icon bi-person"></i>
                            </div>


                            <div className="ms-4">
                                <h3>Janet Shiwram</h3>

                                <p className="mb-0">Real Estate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About