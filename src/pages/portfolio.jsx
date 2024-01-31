import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
import "./styles/portfolio.css";

const Portfolio = () => {
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
				<NavBar active="portfolio" />
				<div className="content-wrapper">
				<img className="homepage-header-image" src="backs.jpeg" alt="cambridge university backs"></img>

					<div className="portfolio-container">
                    <iframe className="portfolio-pdf" title="pdf"
      src="https://storage.googleapis.com/mia_website/Portfolio%20%5BCompressed%5D.pdf"
      
      frameBorder="0"
    >
      This browser does not support PDFs. Please download the PDF to view it: <a href="path_to_your_pdf.pdf">Download PDF</a>
    </iframe>
                    
                    </div>

				</div>
			</div>
		</React.Fragment>
	);
};

export default Portfolio;
