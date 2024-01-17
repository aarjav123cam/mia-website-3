import React from "react";

function article_vegan() {
	const image = "https://storage.googleapis.com/mia_website/The%20Impossible%20Burger%20Poster.jpg";
	return {
		date: "7 May 2023",
		image: image,
		title: "Sustainability 101: The Impossible Burger",
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
				<h2>Impact Beyond the Plate? </h2>
				<div className="article-content">

				<figure className="randImage">
					<img src={image} width="100%"  alt="random" />
					<figcaption>Impossible Burger Poster</figcaption>
				</figure>
				<div className="disclaimer">
				<p><strong>Disclaimer: </strong>
					All information below is up to date as of July 2021. A description of this article's VOIZ sustainbility criteria is at the bottom of the article.
					</p>
				</div>
				
					<p>It’s hard to ignore the steadily growing popularity of veganism in the past few years. It has grown from a small number of practising vegans to a mainstream movement. Our supermarket shelves tell the same story, most consumers now have access to a much greater choice of meat-substitutes, plant-based dairy alternatives and cruelty-free products. Google searches for ‘veganism’ have also increased by 580% in the last 5 years alone so it’s abundantly clear that the vegan lifestyle has become a point of curiosity for many people.</p>
					<p>The pros of veganism certainly stack up, according to The Vegan Society greenhouse gas emissions from the agricultural sector would fall dramatically by two thirds if the whole world went vegan, highlighting the devastating environmental impact of industrially farmed livestock. Opting for a vegan lifestyle would also help conserve water as plant foods require fast less water to animal products. Veganism could even help to protect endangered species, in the US alone 3 million animals including bobcats and mountain lions are killed every year by the USDA in order to protect farmed livestock. Similarly, overfishing on an industrial-scale has caused the population of certain species like the Atlantic Halibut or the Bluefin Tuna to dwindle dramatically. </p>
					<p>But that’s not to say that the vegan lifestyle is the perfect solution to all our food woes. For one, veganism has developed a reputation for being the healthy alternative to most ordinary diets – but this is not entirely true. While a diet that incorporates a greater number of nutritionally dense fruits and veg is certainly a bonus, plenty of vegan food is still over-processed and high in sodium or saturated fat like the famous Impossible Burger. And that’s not the only issue, a lot of delicious whole foods like soya beans, maize and (of course) those pesky avocados consume large amounts of water and require lots of fertilisers, pesticides and herbicides. These associated drawbacks have inflamed debates about the viability and scalability of veganism. Whatsmore, most people are often dissuaded from changing their eating habits on account of sustainability because “they can’t tell which arguments are trustworthy or valid” (Andrew Berardy, 2015).</p>
					<p>So is veganism really here to stay? From a realistic standpoint it’s probably unlikely that everyone will convert to veganism. But that’s not to say that people can’t make better choices when it comes to what they pile on their plates. As it stands, many of the vegan products available on the market only partially address the environmental issues associated with livestock farming. Energy intensive crop cultivation, lengthy supermarket supply chains and genetically modified ingredients in vegan products all complicate the purported “sustainable advantages” of a vegan lifestyle. It’s a bit of a mixed bag and the vegan food industry still has plenty of potential for improvement before it can truly be considered sustainable. As Andrew Berardy argues in his thesis on Sustainable Consumption Lessons from and for Veganism, “actors hoping to create a more sustainable food system must find a balance between directly opposing macro-ethical sustainability values”.</p>
					<div className="criteria">
					<h1>VOIZ Article Criteria: </h1>
					<p>A small number of VOIZ interns were selected to produce editorial content on the organisation’s website. These articles privileged brevity in order to encourage readership and were written in a conversational tone to appeal to a younger demographic. </p>
					<p>These articles were also written according to a specific format, each of which is explained below: </p>
					<p><strong>Sustainability 101: </strong>
					This is an educational format aimed at providing foundational knowledge about sustainability, covering basic concepts and practices in a digestible manner.</p>
					
				</div>
					<h2>References</h2>
					<ol>
                    <li>Berardy, Andrew. Finding the Future of Food: Sustainable Consumption Lessons from and for Veganism (2015), pp. 1-15</li>

<li><a href="https://www.futurekind.com/blogs/vegan/17-environmental-benefits-of-veganism">https://www.futurekind.com/blogs/vegan/17-environmental-benefits-of-veganism</a></li>

<li><a href="https://www.vegansociety.com/news/media/statistics ">https://www.vegansociety.com/news/media/statistics </a></li>

                    </ol>
				
				</div>
			</React.Fragment>
		),
	};
}

export default article_vegan;