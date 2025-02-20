import React, {useState} from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex"
                    : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex"
                    : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                    : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Masters of Science in Information System</h3>
                                <span className="qualification__subtitle">Northeastern University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Aug 2023 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Bachelors of Engineering in Information Science</h3>
                                <span className="qualification__subtitle">PES University</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Jul 2017 - Jul 2021
                                </div>
                            </div>

                            
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                    : "qualification__content"}>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Cloud Development Intern</h3>
                                <span className="qualification__subtitle">TGS-NOPEC Geophysical Company</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Jun 2024 - Aug 2024
                                </div>
                            </div>

                            
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Development Engineer</h3>
                                <span className="qualification__subtitle">Perfios Software Solutions</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Aug 2021 - Aug 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Research Intern</h3>
                                <span className="qualification__subtitle">PES Research Center</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Dec 2020 - Mar 2021
                                </div>
                            </div>

                            
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification