import React from "react";

function article_superyacht() {
	const image = "https://storage.googleapis.com/mia_website/Superyacht%20Poster.png";
	return {
		date: "7 May 2023",
		image: image,
		title: "Sustainability 101: The Supersized World of the Superyacht",
		description:
			"This article critically examines the environmental impact of superyachts, highlighting their significant ecological footprint despite recent attempts at sustainability, and questions the true intentions of the industry in prioritizing luxury over environmental concerns.",
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
					All information below is up to date as of July 2021. A description of this article's VOIZ sustainbility criteria is at the bottom of the article.
					</p>
				</div>
				
					<p>Some of you may remember in 2017 the record-breaking Christie’s sale of the painting Salvator Mundi, allegedly the handiwork of acclaimed Old Master Leonardo da Vinci. The painting sold at auction for a cool $450.3 million. So where is this priceless piece of 16th Century art now? Perhaps you're thinking it’s behind a 20ft thick titanium-enforced wall in an air-lock sealed, temperature-controlled vault hundreds of miles beneath the surface of the earth? Well not exactly. The painting is actually onboard Prince Badr bin Abdullah’s luxury superyacht ‘Serene’. Yes – I’m serious, this prized masterpiece is stored away on a private yacht in the middle of the ocean, and not just any yacht but a gargantuan 439ft superyacht.</p>
					<p>The world has seen a dramatic spike in the number of superyachts being commissioned, in fact as of May of 2021 a jaw-dropping £1 billion has already been spent on these vessels. This surge in interest is evidence of a growing number of HNWI (high-net-worth individuals), each competing for the most conspicuous way to parade around their wealth. I guess designer bags and flashy cars just won’t cut it anymore?</p>
					<p>These giant vessels are a convenient way for individuals to escape the prying eyes of others, the vast ocean is the perfect natural barrier to separate us and them. Fancy playing a game of basketball? sampling some wine? catching a movie? Look no further than business mogul David Geffen’s ‘Rising Sun’ superyacht, which boasts its own basketball court, wine-cellar, movie theatre amongst its many on-board amenities. However, at a reported asking price of $590 million, it's not a purchase to take lightly.</p>
					<p>But my issue with these ships (besides being humongous eyesores) is their impact on the environment. Why are these superyachts such a huge environmental headache? For one they produce lots of nitrogen oxide which is not only the key culprit in creating smog but also the perfect conditions for algal blooms in the ocean. While legislation has been introduced to try and cut back pollution, with plans to ensure the next generation of superyachts are fully-fitted with equipment to convert nitrogen oxides into nitrogen and water, even these moderate reforms have been met with real resistance. Apparently these required filtration systems would take up significant space – they might even displace an entire guest cabin!</p>
					<p>But in the face of growing scrutiny the superyachting industry has tried to jump on the sustainability bandwagon beginning in 2015 with what was dubbed the first ‘eco-friendly’ bespoke superyacht, the ‘Savannah’. So is this cutting-edge ship really the saviour of the yachting world? It could be argued that the Savannah barely scratches the surface of the real issues at stake here. It’s marketed as the first full hybridised diesel-electric superyacht, instead of using a standard two diesel engine propulsion system the Savannah has just one with three diesel-electric generators and a mammoth 30-tonne lithium-ion battery bank. Admittedly, while lithium batteries are more energy efficient than nickel-metal hybrid batteries they still create a whole host of associated issues. Just ask the people of the Tibetan town Tagong, who’s local supply of fish from the Liqi river had been poisoned by a toxic chemical leak from the nearby lithium mine. Or even the Chilean communities near the Atacama region whose natural reserves of water are being depleted through the salt-brine extraction of lithium. Unfortunately, demand for these lithium batteries is only set to grow as the EU plans to introduce around 30 million electric vehicles onto the road by 2030 in a move towards ‘climate neutrality’.</p>
					<p>Ultimately, Savannah’s hybridised system is supposed to improve the yachts performance and manoeuvrability which should cut down fuel consumption by 30%, however the ships’ manufacturers, Feadship, have refused to actually give an estimation of the superyachts overall fuel consumption which has raised some eyebrows. When you consider that the average superyacht burns around 130 gallons of fuel per hour, a measly 30% reduction does not detract from the fact that this is an incredibly energy intensive yacht. For this reason, despite claiming to break new ground in the yachting industry, the Savannah’s sustainability stats are pretty unremarkable.</p>
                    <p>At the end of the day, from their carbon fibre masts, teak wood panelling and luxury interiors, every aspect of these superyachts are fitted with luxury in mind – not the planet. No number of solar panels, exhaust filters or cutting-edge propulsion systems will totally offset the harmful impact of these vessels. You only need to take a quick glance at one of these superyacht shipbuilding websites’, like Feadship who proudly proclaim,  “We don’t build yachts to meet a budget, We build them to meet a desire” to see what really matters in the yachting industry. It’s patently clear these companies are not really interested in reducing their impact on the environment, they want to create the perfect luxury experience for their elite clientele, whatever the cost.</p>
                <div className="criteria">
					<h1>VOIZ Article Criteria: </h1>
					<p>A small number of VOIZ interns were selected to produce editorial content on the organisation’s website. These articles privileged brevity in order to encourage readership and were written in a conversational tone to appeal to a younger demographic. </p>
					<p>These articles were also written according to a specific format, each of which is explained below: </p>
					<p><strong>Sustainability 101: </strong>
					This is an educational format aimed at providing foundational knowledge about sustainability, covering basic concepts and practices in a digestible manner.</p>
					
				</div>
					<h2>References</h2>
					<ol>
                    <li><a href="https://eandt.theiet.org/content/articles/2019/08/lithium-firms-are-depleting-vital-water-supplies-in-chile-according-to-et-analysis/">https://eandt.theiet.org/content/articles/2019/08/lithium-firms-are-depleting-vital-water-supplies-in-chile-according-to-et-analysis/</a></li>

<li><a href="https://www.theguardian.com/sport/2015/oct/24/us-superyachts-cut-toxic-emissions-imo-shipping">https://www.theguardian.com/sport/2015/oct/24/us-superyachts-cut-toxic-emissions-imo-shipping</a></li>

<li><a href="https://www.boatinternational.com/yachts/yacht-design/eco-friendly-superyachts--25627">https://www.boatinternational.com/yachts/yacht-design/eco-friendly-superyachts--25627</a></li>

<li><a href="https://www.wired.co.uk/article/lithium-batteries-environment-impact">https://www.wired.co.uk/article/lithium-batteries-environment-impact</a></li>

<li><a href="https://www.power-technology.com/features/what-are-lithium-batteries-made-of/">https://www.power-technology.com/features/what-are-lithium-batteries-made-of/</a></li>

<li><a href="https://chinadialogue.net/en/transport/eu-faces-green-paradox-over-evs-and-lithium-mining/">https://chinadialogue.net/en/transport/eu-faces-green-paradox-over-evs-and-lithium-mining/</a></li>

<li><a href="https://www.forbes.com/sites/forbes-personal-shopper/2021/07/09/best-bath-towels/?sh=555403738735">https://www.forbes.com/sites/forbes-personal-shopper/2021/07/09/best-bath-towels/?sh=555403738735</a></li>

<li><a href="https://robbreport.com/motors/marine/superyacht-most-environmentally-friendly-2924611/">https://robbreport.com/motors/marine/superyacht-most-environmentally-friendly-2924611/</a></li>

                    </ol>
				
				</div>
			</React.Fragment>
		),
	};
}

export default article_superyacht;