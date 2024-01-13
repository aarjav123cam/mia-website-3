import React from "react";

function article_surf() {
	const image = "https://storage.googleapis.com/mia_website/Sustainability%20Surfing%20Poster.jpg";
	return {
		date: "7 May 2023",
		image: image,
		title: "Excuse me what? - Is Surfing Truly Sustainable?",
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
				<h2>Can we turn the tide on sustainability? </h2>
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
				
					<p>There are perhaps few people more conscious off the profound effects of global warming and rising-sea levels than the surfing community. Yet, ironically, the surfing industry is not without its own baggage when it comes to sustainability. The popularisation of tow-surfing in the 1990s and early 2000s highlighted the problematic aspects of the commercialised surf-industry. It doesn’t help that the surfing world has become increasingly saturated with all manner of pointless accessories or what SAO (Surfers Against’ Sewage) calls “traded commodities”, these items are often dreamed-up by companies looking to profit from selling a particular lifestyle or “aesthetic” to the masses. </p>
					<p>But if we spend our money wisely we can avoid being part of the problem, next time you need some surf-related sportwear look for a retailer that belongs to the SAC (Sustainable Apparel Coalition), this organisation seeks to unite brands, retailers and manufacturers in a collaborative movement towards sustainable fashion. SAC not only actively works with brands to create better products but empowers consumers by using a standardised criteria to assess the social and environmental performance of different companies. So before you reach for your wallet, ask yourself – do you really need that tiki t-shirt or new polyester swimsuit? </p>
					<p>Aside from pointless merchandise, even your surfing essentials can have a marked impact on the environment. A comparative life-cycle analysis by Sustainable Surf showed that an ECOBOARD made with bio-based epoxy resin and recycled materials had a 30% reduced carbon footprint than an ordinary PU (Polyurethane) surfboard. </p>
					<p>It doesn’t stop there, surfers can make better choices in terms of when and where they choose to surf. Globe-trotting to seek out the best possible waves might seem like an attractive prospect – after all who doesn’t fantasise about being whisked away to Hanalei Bay? But these round-the-world trips likely aren’t doing the planet any favours – why not try the waves on your own doorstep? Likewise, to avoid needlessly traveling long-distances only to find the conditions too choppy why not check out surf forecasts online in advance? </p>
					<p>Most importantly – remember our actions can foster meaningful change. SAO‘s guide to sustainable surfing points out that surfers are often seen as “trendsetters by the general public”, in this way the surfing community could lead by example and model better behaviours for society at large. Better yet, the surfing community represents a really diverse cross-section of society, with members from all walks of life – so there’s plenty of opportunity to spread the word! </p>
					
				<div className="criteria">
					<h1>VOIZ Article Criteria: </h1>
					<p>A small number of VOIZ interns were selected to produce editorial content on the organisation’s website. These articles privileged brevity in order to encourage readership and were written in a conversational tone to appeal to a younger demographic. </p>
					<p>This articles were also written according to a specific format, each of is explained below: </p>
					<p><strong>"Excuse me, what?" : </strong>
					This is a critical examination of surprising or questionable sustainability practices, calling out companies’ inconsistencies or greenwashing campaigns.</p>
					
				</div>
					<h2>References</h2>
					<ol>
						<li><a href="https://www.sas.org.uk/wp-content/uploads/2011/08/sustainable-surfing-guide-final-low-res.pdf">https://www.sas.org.uk/wp-content/uploads/2011/08/sustainable-surfing-guide-final-low-res.pdf </a></li>
						<li><a href="https://shaka-surf.com/read/sustainability-in-surfing ">https://shaka-surf.com/read/sustainability-in-surfing </a></li>
						<li><a href="http://ecoboard.sustainablesurf.org/what-is-an-ecoboard/">http://ecoboard.sustainablesurf.org/what-is-an-ecoboard/</a></li>
					</ol>
				
				</div>
			</React.Fragment>
		),
	};
}

export default article_surf;