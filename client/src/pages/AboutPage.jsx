import React from 'react';
import aboutimg from '../assets/images/img.jpg';
import CommonCarousel from '../components/CommonCarousel';
import Footer from '../components/Footer';



const AboutPage = () => {
  return (
    <main>
        <section className="ticket-section section-padding">
            {/**  <div className="section-overlay"></div> */ }

            <div className="container">

            </div>
               
        </section>

    <section className="bg-white about-section mt-5 section-padding" id="section_2">
        <div className="container">
            <div className="row">

                <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
                    <div className="services-info">
                        <h2 className="text-dark mb-4">Meet Janet Shiwram </h2>
                        <p className="text-dark">Meet Janet Shiwram, a seasoned realtor with a unique twist – she's not just skilled in the art of property transactions, but also holds a background in psychotherapy. Born and raised in a bustling urban center, Emily discovered her passion while she was buying her own house. However, her journey started with meeting people with various mental health conditions when she decided to pursue Psychotherapy Practitioner Training even before her real estate career.</p>

                        <p className="text-dark">Janet's educational background includes a Diploma and discovering a Total Self Program, which laid the foundation for her interest in understanding the human mind. And she did not stop there, she even upgraded her education with an additional Diploma in Addictions Counselling & Social Service. Eager to merge her love for real estate with her fascination for psychology, she embarked on a dual career path that helps her counselling her clients well to take the right decision on their most expensive purchase.</p>

                      </div>
                </div>

                <div className="col-lg-6 col-12">
                    <div className="about-text-wrap">
                        <img src={aboutimg} className="about-image img-fluid" />

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

            <div className="row">
              <p className="text-dark mb-2">Having completed rigorous training in psychotherapy, Janet gained valuable insights into human behavior, communication, and the emotional aspects of decision-making. These skills proved to be invaluable in her real estate endeavors, allowing her to connect with clients on a deeper level. Janet's clients appreciate her ability to empathize with their needs, understand their preferences, and guide them through the intricate process of buying or selling a home.</p>
              <p className="text-dark mb-2">In her real estate practice, Janet applies principles of effective communication, negotiation, and conflict resolution that she honed during her psychotherapy training. Her clients often comment on her calming presence, which helps alleviate the stress that can come with major life decisions such as buying or selling a property.</p>
              <p className="text-dark mb-2">Janet's dual expertise has also led her to specialize in helping clients find homes that not only meet their physical requirements but also align with their emotional and psychological needs. Whether it's a first-time homebuyer navigating the excitement and anxiety of a new chapter or a seller parting ways with a property filled with memories, Emily is adept at guiding her clients through the emotional nuances of real estate transactions.</p>
              <p className="text-dark mb-2"> Outside of work, Janet is an advocate for mental health awareness and often volunteers her time to support local initiatives. She believes in the power of a holistic approach to well-being, whether that involves finding the perfect home or fostering a positive mental state.</p>
              <p className="text-dark mb-2"> Janet Shiwram stands as a testament to the harmonious blend of real estate expertise and psychotherapeutic insights. Her unique skill set has not only helped her build a successful career but has also made a lasting impact on the lives of those she serves in the dynamic world of real estate.</p>
            </div>
        </div>
    </section>

    <section className='carousel-sec pt-4 pb-5'>
    <h2 className="fw-bold display-4 p-2 text-center my-3">What our customers say</h2>
    <CommonCarousel/>
    </section>

    <Footer/>
    </main>
  )
}

export default AboutPage;