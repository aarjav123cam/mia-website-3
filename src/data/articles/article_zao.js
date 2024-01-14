import React from "react";

function article_zao() {
	const image = "https://storage.googleapis.com/mia_website/Zao%20Cosmetics%20Poster.jpg";
	return {
		date: "7 May 2023",
		image: image,
		title: "Show them the love - ZAO Refillable silk foundation",
		description:
			"As the beauty industry's growth surges to $463.5 billion by 2027, ZAO emerges as a leader in sustainability and ethics, tackling excessive waste and animal testing with innovative refillable packaging and a commitment to cruelty-free, vegan products.",
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
				<h2>Waste not want not </h2>
				<div className="article-content">

				<figure className="randImage">
					<img src={image} width="100%"  alt="random" />
					<figcaption>Zao Poster</figcaption>
				</figure>
				<div className="disclaimer">
				<p><strong>Disclaimer: </strong>
					All information below is up to date as of July 2021. A description of this articles VOIZ sustainbility criteria is at the bottom of the article.
					</p>
				</div>
				
					<p>In recent years the beauty industry has boomed and this trajectory is only set to continue with a predicted value of $463.5 billion by 2027 according to a report by Allied Research Market. But this astonishing growth does not come without its own set of complications.</p>
					<p>For one, all those serums, creams and compacts create mountains of plastic packaging, in fact Zero Waste Week has estimated that the beauty industry as of 2019 is producing 120 billion units of packaging each year – most of which is made with unrecyclable materials. All this waste is not helped by the fact that the beauty industry is always trying to market the next, niche product to add to people’s tedious skin-care regimens. In the makeup world it appears there is no such thing as simplicity. Why use a small selection of multi-purpose products when companies could convince customers they need a pantheon of skin-care items in their make-up bags?</p>
					<p>This is where a company like ZAO really comes to shine, their business model focuses on delivering a range of products that can be refilled rather than needlessly replacing the same items over and over again. Their liquid foundations for instance are sold in glass bottles with bamboo lids and plastic pumps for easy application, once used up customers can simply send off for a refill and voila! Good as new. Additionally, ZAO’s Eco-box system also means that discarded refill tubes which might otherwise be too small to be processed can be recycled properly.</p>
					<p>But it’s not just the packaging and unnecessary multiplicity that is a serious issue in the cosmetic industry, product testing is often performed on animals. While this is an area that has certainly made remarkable strides in recent years with the EU’s near total ban on the sale of animal tested products in 2009, certain companies continue to use these unacceptable practices in the name of “health and safety”. In fact, many companies have tried to bypass tougher legislation on the sale of animal-tested products by selling their products in less rigorously regulated markets. This is why ZAO’s cruelty free, vegan-friendly products are such a departure from industry norms, not only do they have a zero-tolerance policy on animal testing but also pledge not to export their products to any other market which legally requires animal testing.</p>
					<p>It is precisely ZAO’s supply chain transparency that really sets them apart from their competitors in such an oversaturated market. While ZAO’s sustainable business model is by no means perfect, they have listened to consumer feedback and tried to address areas that need improvement like their plastic pumps which have attracted some criticism from customers. In fact, ZAO’s Research and Development Team clearly shows that the company embraces change, they seem committed to leading the way and seeking out new solutions to create a more sustainable future.</p>
                <div className="criteria">
					<h1>VOIZ Article Criteria: </h1>
					<p>A small number of VOIZ interns were selected to produce editorial content on the organisation’s website. These articles privileged brevity in order to encourage readership and were written in a conversational tone to appeal to a younger demographic. </p>
					<p>This articles were also written according to a specific format, each of is explained below: </p>
					<p><strong>Show them the love: </strong>
					This platforms companies or organisations that are making significant positive contributions to sustainability and environmental responsibility.
</p>
					
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

export default article_zao;