// import React, { useEffect } from "react";
// import { Helmet } from "react-helmet";

// import NavBar from "../components/common/navBar";
// import Footer from "../components/common/footer";
// import Socials from "../components/about/socials";

// import INFO from "../data/user";
// import SEO from "../data/seo";

// import "./styles/contact.css";

// const Contact = () => {
// 	useEffect(() => {
// 		window.scrollTo(0, 0);
// 	}, []);

// 	const currentSEO = SEO.find((item) => item.page === "contact");

// 	return (
// 		<React.Fragment>
// 			<Helmet>
// 				<title>{`Contact | ${INFO.main.title}`}</title>
// 				<meta name="description" content={currentSEO.description} />
// 				<meta
// 					name="keywords"
// 					content={currentSEO.keywords.join(", ")}
// 				/>
// 			</Helmet>

// 			<div className="page-content">
// 				<NavBar active="contact" />
// 				<div className="content-wrapper">
// 				<img className="homepage-header-image" src="backs.jpeg" alt="cambridge university backs"></img>

// 					<div className="contact-container">
// 						<div className="title contact-title">
// 							Let's Get in Touch: Ways to Connect with Me
// 						</div>

// 						<div className="subtitle contact-subtitle">
// 							Thank you for your interest in getting in touch with
// 							me. I welcome your feedback, questions, and
// 							suggestions. If you have a specific question or
// 							comment, please feel free to email me directly at
// 							&nbsp;{" "}
// 							<a href={`mailto:${INFO.main.email}`}>
// 								{INFO.main.email}
// 							</a>
// 							. I make an effort to respond to all messages within
// 							24 hours, although it may take me longer during busy
// 							periods. If you prefer to connect on
// 							social media, you can find me on{" "}
// 							<a
// 								href={INFO.socials.instagram}
// 								target="_blank"
// 								rel="noreferrer"
// 							>
// 								{INFO.socials.instagram}
// 							</a>
// 							. Thanks again for your interest, and I look forward
// 							to hearing from you!
// 						</div>
// 					</div>

// 					<div className="socials-container">
// 						<div className="contact-socials">
// 							<Socials />
// 						</div>
// 					</div>

// 					<div className="page-footer">
// 						<Footer />
// 					</div>
// 				</div>
// 			</div>
// 		</React.Fragment>
// 	);
// };

// export default Contact;


import React from "react";
import { Helmet } from "react-helmet";


import Socials from "../components/about/socials";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";
import "./styles/contact.css";

const Contact = () => {

	const currentSEO = SEO.find((item) => item.page === "contact");



	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
				<img className="homepage-header-image" src="backs.jpeg" alt="cambridge university backs"></img>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
								Let's Get in Touch: Ways to Connect with Me
								</div>

								<div className="subtitle homepage-subtitle">
									<div>
								Thank you for your interest in getting in touch with
 							me. I welcome your feedback, questions, and
 							suggestions. If you have a specific question or
 							comment, please feel free to email me directly at
 							&nbsp;{" "}
 							<a href={`mailto:${INFO.main.email}`}>
 								{INFO.main.email}
 							</a>
 							. I make an effort to respond to all messages within
 							24 hours, although it may take me longer during busy
 							periods. If you prefer to connect on
 							social media, you can find me on{" "}
 							<a
 								href={INFO.socials.instagram}
 								target="_blank"
 								rel="noreferrer"
 							>
 								{INFO.socials.instagram}
 							</a>
 							. Thanks again for your interest, and I look forward
 							to hearing from you! 

							 		</div>
								</div>
							</div>
							
							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="https://storage.googleapis.com/mia_website/Contact%20Graphic.png"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>
						 					<div className="socials-container">
 						<div className="contact-socials">
 							<Socials />
 						</div>
 					</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
