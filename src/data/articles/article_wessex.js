import React from "react";

function article_wessex() {
	const image = "https://storage.googleapis.com/mia_website/Wessex%20Water.jpg";
	return {
		date: "7 May 2023",
		image: image,
		title: "Show them the Love: Wessex Water",
		description:
			"Amidst global water crises and infrastructure challenges, Wessex Water emerges as a beacon of innovation and efficiency in the UK, reducing leakages and enhancing water management through pioneering solutions like Coastwatch and public awareness initiatives.",
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
				<h2>Change is in the pipeline </h2>
				<div className="article-content">

				<figure className="randImage">
					<img src={image} width="100%"  alt="random" />
					<figcaption>Wessex Water Poster</figcaption>
				</figure>
				<div className="disclaimer">
				<p><strong>Disclaimer: </strong>
					All information below is up to date as of July 2021. A description of this article's VOIZ sustainbility criteria is at the bottom of the article.
					</p>
				</div>
				
					<p>Given that water is supposed to be the key ingredient to life, we certainly don’t seem to value it all that much. Whether it’s the Flint water crisis in Michigan, the Californian droughts or the UK’s hosepipe bans, the scarcity and quality of water is a huge issue that affects almost everyone. Alarmingly, according to statistics published by the UN an estimated 700 million people could be forcibly displaced by 2030 due to water scarcity. For this reason, one of the UN’s SDG’s set out in 2015 was to deliver universal access to clean water and sanitation by 2030, but as that deadline steadily approaches it is less and less clear whether it is within our grasp. </p>
					<p>Even the drinking water in the UK is under threat! In 2019 the Chief Executive of the Environment Agency Sir James Bevan raised concerns over the possibility of the UK’s water supply running dry within 25 years. With the escalating climate rises and growing population the biggest challenges facing the UK water industry is contamination and leakages due to its outdated infrastructure. Leakages are a huge concern especially as the UK’s network of pipelines are vast so it can be difficult to identify areas in need of maintenance. To put this issue into context as of 2020 the UK loses approx. 3 billion litres of water every single day due to leakages. But companies like Wessex Water are setting an impressive industry standard by developing new strategies to manage wastewater.</p>
					<p>Sewage overflow is also crucial to a discussion of water management. Areas in the UK with a high groundwater are much more vulnerable to overflow after heavy spells of rain. Combined Sewer Overflows (CSO’s) are installed across the UK in order to discharge untreated sewage when the system is overwhelmed, but according to SAS (Surfer’s Against Sewage) there is evidence to suggest these overflow systems are being misused. In 2015 alone, only 11% of a reported 926 sewer overflow incidents across England’s beaches were accounted for by the Environmental Agency. Not only are these incidents disruptive but also potentially dangerous for those who visit the UK’s coastlines.</p>
					<p>But fortunately, Wessex Water has developed an innovative solution by creating their very own online overflow notification system called Coastwatch in partnership with SAS (Surfers Against Sewage), delivering real-time information on spillage incidents. And the proof of Wessex’s hard work is in the pudding, from 2011-2013 the company recorded 69 million litres of leakages per day, this was a noticeable drop the approx. 73 million litres lost per day from 2005-2010.</p>
					<p>We can also lend Wessex a helping hand by not flushing items that do not belong in our sewage systems that could cause unnecessary blockages. Furthermore, we can all be more mindful of our water consumption by turning off the tap when possible, installing a water meter or just taking a peak at the forecast before you next water the garden.</p>
                <div className="criteria">
					<h1>VOIZ Article Criteria: </h1>
					<p>A small number of VOIZ interns were selected to produce editorial content on the organisation’s website. These articles privileged brevity in order to encourage readership and were written in a conversational tone to appeal to a younger demographic. </p>
					<p>These articles were also written according to a specific format, each of which is explained below: </p>
					<p><strong>Show them the love: </strong>
					This platforms companies or organisations that are making significant positive contributions to sustainability and environmental responsibility.
</p>
					
				</div>
					<h2>References</h2>
					<ol>
                    

<li><a href="https://sdgs.un.org/goals/goal6 ">https://sdgs.un.org/goals/goal6 </a></li>

<li><a href="https://www.castlewater.co.uk/blog/which-country-has-the-cleanest-tap-water ">https://www.castlewater.co.uk/blog/which-country-has-the-cleanest-tap-water </a></li>

<li><a href="https://www.rpsgroup.com/insights/water/innovation-in-the-wastewater-sector-and-the-challenges-facing-water-companies/ ">https://www.rpsgroup.com/insights/water/innovation-in-the-wastewater-sector-and-the-challenges-facing-water-companies/ </a></li>

<li><a href="https://www.wessexwater.co.uk/coastwatch">https://www.wessexwater.co.uk/coastwatch</a></li>

<li><a href="https://www.sas.org.uk/campaign/combined-sewage-overflows/ ">https://www.sas.org.uk/campaign/combined-sewage-overflows/ </a></li>


                    </ol>
				
				</div>
			</React.Fragment>
		),
	};
}

export default article_wessex;