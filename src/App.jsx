import React, { useState } from "react";


/*
 * Main Application
 *
 * This component controls which portfolio page
 * is displayed to the visitor.
 */
function App() {

    const [currentPage, setCurrentPage] = useState("home");

    /*
     * Changes the current portfolio page.
     */
    function navigateTo(page) {

        setCurrentPage(page);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    return (
        <div className="website">

            <Header
                currentPage={currentPage}
                navigateTo={navigateTo}
            />

            <main>

                {currentPage === "home" && (
                    <Home
                        navigateTo={navigateTo}
                    />
                )}

                {currentPage === "about" && (
                    <About />
                )}

                {currentPage === "projects" && (
                    <Projects />
                )}

                {currentPage === "education" && (
                    <Education />
                )}

                {currentPage === "services" && (
                    <Services />
                )}

                {currentPage === "contact" && (
                    <Contact
                        navigateTo={navigateTo}
                    />
                )}

            </main>

            <Footer
                navigateTo={navigateTo}
            />

        </div>
    );
}


/* =====================================================
   HEADER / NAVIGATION
===================================================== */

function Header({
    currentPage,
    navigateTo
}) {

    const navigationItems = [
        {
            id: "home",
            label: "Home"
        },
        {
            id: "about",
            label: "About Me"
        },
        {
            id: "projects",
            label: "Projects"
        },
        {
            id: "education",
            label: "Education"
        },
        {
            id: "services",
            label: "Services"
        },
        {
            id: "contact",
            label: "Contact Me"
        }
    ];


    return (
        <header className="site-header">

            <div className="container navigation">

                {/* Custom portfolio logo */}
                <button
                    className="logo"
                    onClick={() => navigateTo("home")}
                    aria-label="Go to Home"
                >

                    <span className="logo-mark">
                        M
                    </span>

                    <span className="logo-name">
                        Muzna
                    </span>

                </button>


                {/* Main navigation */}
                <nav className="navigation-menu">

                    {navigationItems.map((item) => (

                        <button
                            key={item.id}
                            className={
                                currentPage === item.id
                                    ? "nav-button active"
                                    : "nav-button"
                            }
                            onClick={() =>
                                navigateTo(item.id)
                            }
                        >
                            {item.label}
                        </button>

                    ))}

                </nav>

            </div>

        </header>
    );
}


/* =====================================================
   HOME PAGE
===================================================== */

function Home({ navigateTo }) {

    return (
        <section className="home-page">

            <div className="container hero">

                <div className="hero-content">

                    <p className="eyebrow">
                        WELCOME TO MY PORTFOLIO
                    </p>

                    <h1>
                        Hello, I'm{" "}
                        <span className="highlight">
                            Muzna.
                        </span>
                    </h1>

                    <h2>
                        Student & Aspiring Web Developer
                    </h2>

                    <p className="hero-description">
                        Welcome to my personal portfolio.
                        I am a student developing my skills
                        in web application development,
                        programming, and modern technology.
                    </p>


                    {/* Mission statement */}
                    <div className="mission-box">

                        <strong>
                            My Mission
                        </strong>

                        <p>
                            My mission is to continuously learn,
                            build meaningful digital experiences,
                            and develop my skills as a professional
                            web developer.
                        </p>

                    </div>


                    <div className="hero-buttons">

                        <button
                            className="primary-button"
                            onClick={() =>
                                navigateTo("about")
                            }
                        >
                            About Me
                        </button>

                        <button
                            className="secondary-button"
                            onClick={() =>
                                navigateTo("projects")
                            }
                        >
                            View My Projects
                        </button>

                    </div>

                </div>


                {/* Personal photo area */}
                <div className="hero-photo">

                    <div className="photo-card">

                        <img
                            src="/images/muzna.jpg"
                            alt="Portrait of Muzna"
                            className="profile-image"
                        />

                        <div className="photo-fallback">
                            <span>M</span>
                        </div>

                        <h3>
                            Muzna
                        </h3>

                        <p>
                            Student & Aspiring Developer
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}


/* =====================================================
   ABOUT ME PAGE
===================================================== */

function About() {

    return (
        <PageLayout
            title="About Me"
            subtitle="Get to know me"
        >

            <div className="about-grid">

                <div className="about-photo-card">

                    <img
                        src="/images/muzna.jpg"
                        alt="Portrait of Muzna"
                        className="about-profile-image"
                    />

                    <div className="photo-fallback about-fallback">
                        <span>M</span>
                    </div>

                    <h2>
                        Muzna
                    </h2>

                    <p>
                        Student & Aspiring Web Developer
                    </p>

                </div>


                <div className="about-content">

                    <h2>
                        Who I Am
                    </h2>

                    <p>
                        My name is Muzna. I am a student
                        interested in technology, software
                        development, and creating useful
                        web applications.
                    </p>

                    <p>
                        I enjoy learning new technologies
                        and improving my programming skills
                        through practical projects and
                        academic work.
                    </p>

                    <p>
                        My goal is to continue developing
                        my technical knowledge and build
                        a career in the technology industry.
                    </p>


                    <h3>
                        My Skills
                    </h3>

                    <div className="skills-list">

                        <span>HTML</span>

                        <span>CSS</span>

                        <span>JavaScript</span>

                        <span>React</span>

                        <span>Git</span>

                        <span>GitHub</span>

                        <span>Responsive Design</span>

                    </div>


                    {/* Resume PDF link */}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="resume-button"
                    >
                        View / Download My Resume
                    </a>

                </div>

            </div>

        </PageLayout>
    );
}


/* =====================================================
   PROJECTS PAGE
===================================================== */

function Projects() {

    const projects = [

        {
            number: "01",
            title: "Personal Portfolio Website",
            category: "Web Development",
            image: "/images/project1.jpg",
            description:
                "A responsive personal portfolio website created using React, JavaScript, HTML and CSS.",
            role:
                "My role was to design and develop the website interface and implement the navigation and responsive layout.",
            outcome:
                "The project demonstrates my understanding of React components, CSS styling and responsive web design."
        },

        {
            number: "02",
            title: "Web Application Project",
            category: "Academic Project",
            image: "/images/project2.jpg",
            description:
                "An academic web application created to practice front-end development and user interaction.",
            role:
                "My role included designing the user interface and implementing interactive web functionality.",
            outcome:
                "The project helped me improve my JavaScript, HTML and CSS development skills."
        },

        {
            number: "03",
            title: "Programming Project",
            category: "Programming",
            image: "/images/project3.jpg",
            description:
                "A programming project focused on problem solving, application logic and software development concepts.",
            role:
                "My role involved planning the solution, writing the program logic and testing the application.",
            outcome:
                "The project strengthened my programming and problem-solving skills."
        }

    ];


    return (
        <PageLayout
            title="My Projects"
            subtitle="Selected work"
        >

            <div className="projects-grid">

                {projects.map((project) => (

                    <article
                        className="project-card"
                        key={project.number}
                    >

                        <div className="project-image">

                            <img
                                src={project.image}
                                alt={`${project.title} project`}
                            />

                            <span className="project-number">
                                {project.number}
                            </span>

                        </div>


                        <div className="project-content">

                            <p className="project-category">
                                {project.category}
                            </p>

                            <h2>
                                {project.title}
                            </h2>

                            <p>
                                {project.description}
                            </p>

                            <h3>
                                My Role
                            </h3>

                            <p>
                                {project.role}
                            </p>

                            <h3>
                                Outcome
                            </h3>

                            <p>
                                {project.outcome}
                            </p>

                        </div>

                    </article>

                ))}

            </div>


            <div className="information-box">

                <strong>
                    Before submitting:
                </strong>

                Replace the three project descriptions
                and images with your actual projects.
                The assignment requires an image and
                information for at least three projects.

            </div>

        </PageLayout>
    );
}


/* =====================================================
   EDUCATION PAGE
===================================================== */

function Education() {

    const educationRecords = [

        {
            year: "2024 - Present",
            qualification: "Software Engineering Technology - Artificial Intelligence",
            institution: "Centennial College",
            description:
                "Currently studying Software Engineering Technology at Centennial College, developing skills in programming, web application development, databases, software development, and modern technologies."
        },
        {
            year: "2013 - 2015",
            qualification: "High School",
            institution: "College",
            description:
                 "Completed high school education, developing foundational academic knowledge and skills."
},

        {
            year: "2020",
            qualification: "Web Development Certificate",
            institution: "Toronto Technology Institute",
            description:  "Completed a professional certificate focused on HTML, CSS, JavaScript, and responsive web development."
        }
    
    ];


    return (
        <PageLayout
            title="Education"
            subtitle="My educational background"
        >

            <div className="education-list">

                {educationRecords.map(
                    (record, index) => (

                        <div
                            className="education-card"
                            key={index}
                        >

                            <div className="education-year">
                                {record.year}
                            </div>

                            <div className="education-details">

                                <h2>
                                    {record.qualification}
                                </h2>

                                <h3>
                                    {record.institution}
                                </h3>

                                <p>
                                    {record.description}
                                </p>

                            </div>

                        </div>

                    )
                )}

            </div>




        </PageLayout>
    );
}


/* =====================================================
   SERVICES PAGE
===================================================== */

function Services() {

    const services = [

        {
            number: "01",
            title: "Web Development",
            description:
                "Creating responsive and user-friendly websites using modern web technologies."
        },

        {
            number: "02",
            title: "Front-End Development",
            description:
                "Building interactive interfaces using HTML, CSS, JavaScript and React."
        },

        {
            number: "03",
            title: "Responsive Design",
            description:
                "Designing websites that work effectively across desktop, tablet and mobile devices."
        },

        {
            number: "04",
            title: "Programming",
            description:
                "Developing programming solutions while applying logical thinking and problem-solving skills."
        }

    ];


    return (
        <PageLayout
            title="Services"
            subtitle="What I can offer"
        >

            <div className="services-grid">

                {services.map((service) => (

                    <div
                        className="service-card"
                        key={service.number}
                    >

                        <div className="service-number">
                            {service.number}
                        </div>

                        <h2>
                            {service.title}
                        </h2>

                        <p>
                            {service.description}
                        </p>

                    </div>

                ))}

            </div>

        </PageLayout>
    );
}


/* =====================================================
   CONTACT PAGE
===================================================== */

function Contact({ navigateTo }) {

    const [formSubmitted, setFormSubmitted] =
        useState(false);


    function handleSubmit(event) {

        event.preventDefault();

        setFormSubmitted(true);

        /*
         * The assignment says the form should capture
         * the information and redirect to Home.
         */
        setTimeout(() => {

            navigateTo("home");

        }, 1500);
    }


    return (
        <PageLayout
            title="Contact Me"
            subtitle="Let's get in touch"
        >

            <div className="contact-grid">

                <div className="contact-panel">

                    <h2>
                        Contact Information
                    </h2>

                    <p>
                        I would be happy to hear from you.
                        Please use the contact information
                        below or send me a message using
                        the form.
                    </p>


                    <div className="contact-details">

                        <div className="contact-detail">

                            <strong>
                                Email
                            </strong>

                            <span>
                                mjunai10@my.centennialcollege.ca
                            </span>

                        </div>


                        <div className="contact-detail">

                            <strong>
                                Phone
                            </strong>

                            <span>
                                +1 (000) 000-0000
                            </span>

                        </div>


                        <div className="contact-detail">

                            <strong>
                                Location
                            </strong>

                            <span>
                                Mississauga, Ontario, Canada
                            </span>

                        </div>

                    </div>

                </div>


                {/* Interactive contact form */}
                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    <div className="form-row">

                        <div className="form-group">

                            <label htmlFor="firstName">
                                First Name
                            </label>

                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                required
                                placeholder="First Name"
                            />

                        </div>


                        <div className="form-group">

                            <label htmlFor="lastName">
                                Last Name
                            </label>

                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                required
                                placeholder="Last Name"
                            />

                        </div>

                    </div>


                    <div className="form-row">

                        <div className="form-group">

                            <label htmlFor="phone">
                                Contact Number
                            </label>

                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="Contact Number"
                            />

                        </div>


                        <div className="form-group">

                            <label htmlFor="email">
                                Email Address
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="Email Address"
                            />

                        </div>

                    </div>


                    <div className="form-group">

                        <label htmlFor="message">
                            Message
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            required
                            placeholder="Write your message here..."
                        ></textarea>

                    </div>


                    <button
                        type="submit"
                        className="primary-button"
                    >
                        Send Message
                    </button>


                    {formSubmitted && (

                        <div className="success-message">

                            Thank you, Muzna.
                            Your message has been captured.
                            Returning to Home...

                        </div>

                    )}

                </form>

            </div>

        </PageLayout>
    );
}


/* =====================================================
   REUSABLE PAGE LAYOUT
===================================================== */

function PageLayout({
    title,
    subtitle,
    children
}) {

    return (
        <section className="page">

            <div className="container">

                <div className="page-heading">

                    <p className="eyebrow">
                        {subtitle}
                    </p>

                    <h1>
                        {title}
                    </h1>

                </div>

                {children}

            </div>

        </section>
    );
}


/* =====================================================
   FOOTER
===================================================== */

function Footer({ navigateTo }) {

    return (
        <footer className="site-footer">

            <div className="container footer-content">

                <div>

                    <div className="footer-brand">

                        <span className="logo-mark small">
                            M
                        </span>

                        <strong>
                            Muzna
                        </strong>

                    </div>

                    <p>
                        Personal portfolio website
                        created for COMP229 Assignment 1.
                    </p>

                </div>


                <div className="footer-links">

                    <button
                        onClick={() =>
                            navigateTo("home")
                        }
                    >
                        Home
                    </button>

                    <button
                        onClick={() =>
                            navigateTo("about")
                        }
                    >
                        About Me
                    </button>

                    <button
                        onClick={() =>
                            navigateTo("projects")
                        }
                    >
                        Projects
                    </button>

                    <button
                        onClick={() =>
                            navigateTo("contact")
                        }
                    >
                        Contact
                    </button>

                </div>

            </div>


            <div className="copyright">

                © 2026 Muzna. All Rights Reserved.

            </div>

        </footer>
    );
}


export default App;