import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { useTranslation } from 'react-i18next';

import { ContactMe } from "./contactMe.jsx";
import InternalLink from "../basics/internalLink.jsx";
import Modal from "../basics/modal";

import emailLogo from "../../assets/images/icons/email.png";
import githubLogo from "../../assets/images/icons/github.png";
import linkedinLogo from "../../assets/images/icons/linkedin.png";
import condingameLogo from "../../assets/images/icons/codingame.png";

import './styles.scss';

const ContactSection = ({ isLoading, sectionRef, startRef, onLinkClick }) => {
    const email = "corentinblairy1@gmail.com";
    const [showSection, setShowSection] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formAlreadySubmitted, setFormAlreadySubmitted] = useState(false);
    const [submittedError, setSubmittedError] = useState(false);
    const [refView, inView] = useInView({
        threshold: 0.25,
        showSection,
    });
    const { t } = useTranslation();

    useEffect(() => {
        
        if (inView && !isLoading) {
            setShowSection(true);
        }

    }, [inView, isLoading]);

    return (
        <section className="contact-section" ref={(el) => {sectionRef.current = el; refView(el);}}>
            <div className="title-contact-section">
                <InternalLink className="scroll-arrow-bottom" onLinkClick={() => onLinkClick(startRef)} content={<span></span>}/>
                <div className='contact-title' >
                    <div></div>
                    <h3>{t('contactSection.title')}</h3>
                    <div></div>
                </div>
            </div>
            
            <div className={"contact-form-section"}>
                <nav className="navbar-email">
                    <a href={"mailto:" + email}>corentin@blairy.fr</a>
                    <div className="navbar-line right"></div>
                </nav>
                <div>
                    {/** FORM PARALLAX */}
                    <Parallax
                        scale={[0.6, 1.4]}
                        opacity={[0,2]}
                        rotateX={['-100deg', '100deg']}
                    >
                        <ContactMe submitted={submitted} setSubmitted={setSubmitted} formAlreadySubmitted={formAlreadySubmitted} setFormAlreadySubmitted={setFormAlreadySubmitted} submittedError={submittedError} setSubmittedError={setSubmittedError} />
                    </Parallax>
                    <nav className="mobile-nav-logo">
                        <a href={"mailto:" + email}>
                            <img src={emailLogo} alt="logo gmail" />
                        </a>
                        <a href="https://github.com/cblairy" target="_blank" rel="noreferrer noopener">
                            <img src={githubLogo} alt="logo github" />
                        </a>
                        <a href="https://www.linkedin.com/in/corentin-blairy/" target="_blank" rel="noreferrer noopener">
                            <img src={linkedinLogo} alt="logo linkedin" />
                        </a>
                        <a href="https://www.codingame.com/profile/8a01a236c25123cc0a65a1532aa8e6663436294" target="_blank" rel="noreferrer noopener">
                            <img src={condingameLogo} alt="logo codingame" />
                        </a>
                    </nav>
                </div>
                <nav className="navbar-github">
                    <a href="https://github.com/cblairy" target="_blank" rel="noreferrer noopener">github.com/cblairy</a>
                    <div className="navbar-line"></div>
                </nav>
            </div>

            {submitted && (
                <Modal
                    message={t('contactSection.modal.submitted')}
                    valid={true}
                />
            )}

            {submittedError && (
                <Modal
                    message={t('contactSection.modal.error')}
                    valid={false}
                />
            )}

            {formAlreadySubmitted && (
                <Modal
                    message={t('contactSection.modal.alreadySubmitted')}
                    alreadySubmitted={true}
                />
            )}

        </section>
    );
}

export default ContactSection;