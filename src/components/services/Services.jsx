import React, { useState } from "react";
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Front <br/> End <br /> Development</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)}className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Front-end Development</h3>
                            <p className="services__modal-description">Service with more than 2 years of experience. Providing quality work to clients and companies</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I create visually appealing and intuitive user interfaces for websites or applications.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I ensure that websites and applications work seamlessly across various devices and screen sizes.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I implement client-side functionality using HTML, CSS, and JavaScript.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I build interactive and dynamic single-page applications for a smoother user experience.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I utilize frameworks like React and Angular to streamline development.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I improve the speed and performance of websites for a better user experience.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Back <br/> End <br /> Development</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)}className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">Back-end Development</h3>
                            <p className="services__modal-description">Service with more than 2.5 years of experience. Providing quality work to clients and companies</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">I write server-side logic to handle requests and responses.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Design and implement RESTful APIs and microservices to ensure smooth communication between frontend and backend.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Manage and optimize databases (SQL & NoSQL) for efficient data storage, retrieval, and performance.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Utilize frameworks like Spring Boot (Java), Flask (Python), and Express (Node.js) to build robust backend systems.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Implement secure user authentication and authorization systems.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Optimize backend infrastructure for scalability, fault tolerance, and high availability.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Integrate real-time event-driven architectures using Kafka and WebSockets for responsive applications.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">DevOps<br/><br/><br/></h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)}className="uil uil-times services__modal-close"></i>
                            <h3 className="services__modal-title">DevOps</h3>
                            <p className="services__modal-description">Have certifications from LinkedIn Learning and implemented the concepts learnt in my personal projects</p>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Designed and implemented CI/CD pipelines for automated testing, integration, and deployment, ensuring rapid and reliable releases.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Containerized applications using Docker, enabling consistency and portability across different environments.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Orchestrated containerized workloads with Kubernetes, optimizing scalability and resource utilization.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Managed infrastructure as code (IaC) using Terraform, ensuring reproducibility and version control.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Coordinated and automated software releases, minimizing downtime and deployment risks.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Leveraged Git and version control systems for efficient collaboration and infrastructure management.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Integrated monitoring and logging tools like Prometheus and Grafana for system observability and performance tracking.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Services