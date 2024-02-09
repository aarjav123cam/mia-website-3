import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
				<img className="homepage-header-image" src="backs.jpeg" alt="cambridge university backs"></img>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									<div>
									<p>I am a final year Cambridge BA Classics student, interested in the
										intersection of art, finance and marketing. Beginning in 2023 I have
										served as Events Coordinator for the Fitzwilliam Museum Society.
										This is the largest arts-based society in Cambridge, tapping into
										city’s vibrant community of creatives, auteurs, and artists, serving
										as a dynamic hub for innovation and artistic expression. We
										formally represent our namesake, The Fitzwilliam Museum which is
										home to one of the most coveted collections of art and antiquities in
										Western Europe.</p><p>
										My role leveraged Cambridge's status as a creative nexus, where
										business acumen meets artistic innovation. Through this position,
										I've facilitated connections between the student population and the
										broader creative industry, emphasising professional development
										and cultural engagement.</p>
										I was instrumental in inviting a number of high profile speakers to
										deliver talks or participate in interactive seminars for our 2023-2024
										events program. Speakers include: <ul>
										<li>Sarah Greenwood and Katie Spencer, the Oscar nominated
										Production Designers behind the Barbie movie among other
										critically acclaimed projects, with a combined filmography
										cumulatively grossing over $4 billion at the box office</li>
										<li>Andy Earl, photographer and artist responsible for creating
										Pink Floyd’s album covers as well as a number of music
										videos for artists like the Rolling Stones</li>
										<li>John Myatt, hailed as the most prolific art forger of the 20th
										Century, now a recognised artist whose life story is set to be
										adapted for the big screen in the movie titled “Genuine Fakes”</li>
										<li>Ai Weiwei, groundbreaking contemporary Chinese artist,
										lauded for his innovative use of art as a means of social
										commentary, making him a powerful voice in the contemporary
										art world for his activism and critique of government policies</li>
										</ul>
										<p>I meticulously managed the society's budget, ensuring optimal
										allocation of resources to maximise the impact of our events. This
										involved detailed financial planning, from forecasting expenses to
										negotiating with vendors for cost-effective services, all while
										safeguarding the quality of our offerings. My responsibilities
										extended to logistical arrangements, coordinating seamlessly
										between venues, speakers, and suppliers. I closely tracked
										expenditures against our budget, enabling real-time adjustments
										and ensuring financial sustainability.</p>
										<p>Please feel free to reach out to me on my socials listed on this site.
										I would be very happy to connect and answer any questions.</p>


									</div>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="https://storage.googleapis.com/mia_website/Mia%20Profile%20Graphic.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
									<div className="about-image-wrapper">
										<img
											src="https://storage.googleapis.com/mia_website/Events%20Summary.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>
								
								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
