import React from "react";

function article_haribo() {
	const image = "https://storage.googleapis.com/mia_website/Haribo%20Poster.png";
	return {
		date: "7 May 2023",
		image: image,
		title: "Excuse me what? Haribo Gummy Bears ",
		description:
			"Behind Haribo's iconic sweets lies a troubling reality of exploitative labor practices, animal cruelty, and significant environmental impact, challenging consumers to reconsider their choices in light of these serious ethical concerns.",
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
				<h2>Not so sweet after all?</h2>
				<div className="article-content">

				<figure className="randImage">
					<img src={image} width="100%"  alt="random" />
					<figcaption>Haribo Poster</figcaption>
				</figure>
				<div className="disclaimer">
				<p><strong>Disclaimer: </strong>
					All information below is up to date as of July 2021. A description of this article's VOIZ sustainbility criteria is at the bottom of the article.
					</p>
				</div>
				
                <p>Haribo’s sweets have been a staple of kitchen cupboards and snack drawers around the world since the company’s international expansion in the 1960s, but perhaps this childhood treat is not so innocent.</p>

                <p>In recent years the German confectionery company has come under serious fire for its exploitative working conditions, unethical animal-testing and wasteful packaging. These accusations are no joking matter and it's time Haribo takes accountability for their actions as a major corporation with an international presence.</p>

                <p>Haribo’s supposed efforts to tackle the ubiquity of plastic packaging are far from convincing. Despite professing to care about managing their impact on the environment they continue to use polypropylene packaging which is not easily recyclable. In fact, as recently as 2018 volunteers from around the world collected and recorded over 187,000 items of trash from beach clean-ups and the Haribo company ranked among one of the world’s biggest contributors to plastic pollution. Quite frankly, Haribo’s environmental responsibility statement is woefully vague and reads like an unpaid intern was assigned the task of writing a corporate mission statement. Perhaps Haribo thinks that with a healthy dose of green washing and familiar sustainable buzzwords they can convince the world they have a well-executed sustainability policy.</p>

                <p>But most shockingly of all, in 2017 the German TV series Markencheck broadcast an explosive exposé documenting Haribo’s use of slave labour in Brazilian plantations. The documentary showed workers harvesting carnauba wax, a key ingredient that gives Haribo gummies their glossy finish. These workers were expected to work long days for only $12, all while being refused clean-water and toilet breaks. It is unacceptable that Haribo did not carry out more rigorous checks into the working conditions of its suppliers. But sadly, this issue is not unique to the Haribo company, according to figures published by the Global Slavery Index approximately 40.3 million people today are victims of modern-day slavery.</p>

                <p>To add further insult to injury, Haribo’s 2017 exposé did not only highlight the company’s ties to animal cruelty. Upsetting scenes showed pigs farmed for gelatine in unsanitary conditions, some even suffering from open sores and infections. There is no earthly reason why Haribo, a huge corporation with an annual revenue of nearly €2 billion, should not have the proper resources at their disposal to properly oversee all aspects of their supply chain. So the take-away? While Haribo’s colourful assortment of brightly-coloured gummies might hold a soft spot for many of us as a sugary childhood indulgence – it’s time we outgrow their corporate immaturity. Unless the Haribo drastically cleans up their act we cannot in good conscience continue to purchase their products.</p>


				<div className="criteria">
					<h1>VOIZ Article Criteria: </h1>
					<p>A small number of VOIZ interns were selected to produce editorial content on the organisation’s website. These articles privileged brevity in order to encourage readership and were written in a conversational tone to appeal to a younger demographic. </p>
					<p>These articles were also written according to a specific format, each of which is explained below: </p>
					<p><strong>"Excuse me, what?" : </strong>
					This is a critical examination of surprising or questionable sustainability practices, calling out companies’ inconsistencies or greenwashing campaigns.</p>
					
				</div>
					<h2>References</h2>
					<ol>
					<li><a href="https://www.haribo.com/en-au/about-us/cr/environment">https://www.haribo.com/en-au/about-us/cr/environment</a></li>
<li><a href="https://guide.ethical.org.au/company/?company=1908">https://guide.ethical.org.au/company/?company=1908</a></li>
<li><a href="https://www.myrecipes.com/extracrispy/haribo-gummies-slave-labor">https://www.myrecipes.com/extracrispy/haribo-gummies-slave-labor</a></li>
<li><a href="https://metro.co.uk/2017/10/20/haribo-gummy-bears-made-by-modern-slaves-documentary-claims-7014780/">https://metro.co.uk/2017/10/20/haribo-gummy-bears-made-by-modern-slaves-documentary-claims-7014780/</a></li>
<li><a href="https://www.mckinsey.com/industries/paper-forest-products-and-packaging/our-insights/the-drive-toward-sustainability-in-packaging-beyond-the-quick-wins">https://www.mckinsey.com/industries/paper-forest-products-and-packaging/our-insights/the-drive-toward-sustainability-in-packaging-beyond-the-quick-wins</a></li>
	</ol>
				
				</div>
			</React.Fragment>
		),
	};
}

export default article_haribo;