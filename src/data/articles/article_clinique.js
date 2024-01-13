import React from "react";

function article_clinique() {
	const image = "https://storage.googleapis.com/mia_website/Clinique%20Poster.png";
	return {
		date: "7 May 2023",
		image: image,
		title: "DM the CEO: Clinique",
		description:
			"Surfing faces its own sustainability challenges, from the environmental cost of surf gear to the impact of global travel. Learn how the surfing community can lead the way in eco-friendly practices and conscious consumerism.",
			keywords: [
				"Sustainability in Surfing",
				"Mia Warren",
				"Surfing and Global Warming",
				"Eco-Friendly Surf Practices",
				"Sustainable Surf Products",
				"Environmental Impact of Surfing",
				"Surf Community Sustainability",
				"Eco-Conscious Surfing",
				"Sustainable Apparel Coalition",
				"Surfers Against Sewage",
				"ECOBOARD Surfboards",
				"Reducing Surfing's Carbon Footprint"
			]
			,
		style: `
				@media (max-width: 600px) {
					.article-content {
						display: flex;
						flex-direction: column;
						align-items: center;
					}
					.randImage {
                        width: 100%;
    
                    }
				}
	

				.randImage {
					float: right; 
      				margin: 20px; 

				}
				p{
					text-align: justify; 
				}
				figure {
					float: right;
					width: 30%;
					text-align: center;
					font-style: italic;
					font-size: smaller;
					text-indent: 0;
					margin: 0.5em;
					padding: 0.5em;
				  }
				`,
		body: (
			<React.Fragment>
				<div className="author">By Mia Warren</div>
				<h2>Keeping up appearances</h2>
				<div className="article-content">

				<figure className="randImage">
					<img src={image} width="100%"  alt="random" />
					<figcaption>Random Image</figcaption>
				</figure>
				<div className="disclaimer">
				<p><strong>Disclaimer: </strong>
					All information below is up to date as of July 2021. A description of this articles VOIZ sustainbility criteria is at the bottom of the article.
					</p>
				</div>
				
					<p>Dear Fabrizio Freda and Michelle Freyre </p>
					<p>Clinique and its parent company Estee Lauder are undeniable beauty industry giants, taking in the third biggest revenue of any cosmetic company according to research published by Statista in 2018. But being a corporate conglomerate with such a huge cosmetic empire comes with great responsibility. Admittedly, while Estee Lauder has invested a great deal of time and energy into its environmental initiatives it needs to set a more consistent example as an industry leader and stop its subsidiaries like Clinique from releasing products that fall short of their own standards.</p>
					<p>At times it seems as though Estee Lauder is too concerned with brand integrity and creating a “premium product” than thinking about more practical concerns. Clinique’s pep-start daily sunscreen is the perfect example of this – containing only an ounce of product. How can a product be sustainable if it only lasts a short time and immediately needs replacing? Estee Lauder’s slightly backwards priorities are perhaps clearest in its ‘Responsible Practices statement’ where it asserts “packaging in prestige beauty is paramount” and professes a desire to maintain a “high aesthetic for the design … of packaging” that “must conform to brand standards”. But surely there needs to be a compromise somewhere? Should the aesthetics of luxury come at the expense of Estee Lauder’s long-term sustainable goals?</p>
					<p>In a 2020 press release announcing Michelle Freyre’s appointment as Global General Manager of Clinique, parent company Estee Lauder stressed the importance of “driving consumer relevance” by “connecting emotionally with consumers”, but how are Clinique’s customers supposed to connect with a brand that promises one thing while delivering another? Make no mistake – one misstep does not define an entire brand but it certainly sends mixed messages. Estee Lauders’ emphasis on “consumer relevance” also raises some questions, are their sustainable initiatives a sincere effort to build a better world or just another corporate marketing tool to satisfy environmentally responsible customers while they continue to profit off their traditional business practices? This dichotomy between corporate sustainability claims and actual practices often leads to scepticism among consumers, who are increasingly aware and concerned about environmental issues. Estee Lauder's focus on "consumer relevance" might be seen as an attempt to align with current market trends, but it raises critical questions about the authenticity of their commitment to sustainable and ethical practices.</p>
					<p>Estee Lauder along with its subsidiaries not only condone but actively endorse animal-testing by selling their products in markets where a “regulatory body demands it”. This is particularly disappointing given that Estee Lauder has such a huge market share and could still make a sizeable profit margin without selling or exporting its products to countries that require animal testing by-law. Ultimately, until companies like Estee Lauder take a definitive stand against animal-testing these unnecessary practices will continue to take place behind the scenes.</p>
				
                    
				<div className="criteria">
					<h1>VOIZ Article Criteria: </h1>
					<p>A small number of VOIZ interns were selected to produce editorial content on the organisation’s website. These articles privileged brevity in order to encourage readership and were written in a conversational tone to appeal to a younger demographic. </p>
					<p>This articles were also written according to a specific format, each of is explained below: </p>
					<p><strong>DM the CEO: </strong>
					This is addressed like a letter and directly engages with corporate leaders, challenging or questioning their practices and policies.</p>
					
				</div>
					<h2>References</h2>
					<ol>
						<li><a href="https://www.elcompanies.co.uk/en-gb/our-commitments/sustainability/product-responsibility#raw-materials-assessment ">https://www.elcompanies.co.uk/en-gb/our-commitments/sustainability/product-responsibility#raw-materials-assessment </a></li>
						<li><a href="https://www.elcompanies.co.uk/en-GB/news-and-media/newsroom/press-releases/2020/06-18-2020-143918025 ">https://www.elcompanies.co.uk/en-GB/news-and-media/newsroom/press-releases/2020/06-18-2020-143918025 </a></li>
					</ol>
				
				</div>
			</React.Fragment>
		),
	};
}

export default article_clinique;