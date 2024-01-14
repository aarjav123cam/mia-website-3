import React from "react";

function article_etoro() {
	const image = "https://storage.googleapis.com/mia_website/eToro%20Poster.png";
	return {
		date: "7 May 2023",
		image: image,
		title: "VOIZ Sustainability review: eToro ",
		description:
			"Monzo's Ethical Balance: A Deep Dive into Profit and Responsibility. This article examines how Monzo Bank, a pioneer in digital banking, strives to blend profitability with ethical banking practices, highlighting its efforts in sustainability, staff welfare, and investment transparency",
            keywords: [
				"Monzo Bank",
				"Ethical Banking",
				"Sustainable Banking",
				"Digital Banking",
				"Challenger Banks",
				"Financial Technology",
				"Banking Industry",
				"Corporate Social Responsibility",
				"Online Banking",
				"Energy Consumption in Banking",
				"Banking Sector Innovation",
				"Diversity in Banking",
				"Banking Ethics",
				"Investment Transparency",
				"Sustainable Corporate Policies",
				"Digital Receipts",
				"Carbon Neutral Banking",
				"Financial Inclusion",
				"Banking for Vulnerable Customers",
				"Environmental Impact of Banking"
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
				<h2> From rags to riches?</h2>
				<div className="article-content">

				<figure className="randImage">
					<img src={image} width="100%"  alt="random" />
					<figcaption>eToro Poster</figcaption>
				</figure>
				<div className="disclaimer">
				<p><strong>Disclaimer: </strong>
					All information below is up to date as of July 2021. A description of the VOIZ sustainbility criteria is at the bottom of the article.
					</p>
				</div>
                
                <strong>Overall rating: (1.25/5) </strong>
                    <p>One of the biggest changes brought about by the fintech revolution was the arrival of online trading platforms which offered a glimmer of hope for the average, clueless trader looking to break into the stock market. Perhaps at last the stock market would truly become ‘democratised’. Market activity has increasingly migrated to these digital platforms since the advent of the first e-brokerage firm in 1994. eToro has emerged as one of the frontrunners in this new digital landscape, eliminating the ‘middle man’ and welcoming millions of new entrants into the cut and thrust culture of trading. But, in order to evaluate the sustainability of their services we need to scrutinise their claims of transparency, the diversity within the company structure itself, and last of all whether their platform really creates greater equality of opportunity for ordinary people. Sadly, it appears that many of features like their CopyTrading function and themed portfolios do not actually resolve to bridge the ‘knowledge gap’ between inexperienced newcomers and well-versed traders. Furthermore, while eToro has published a wealth of content on sustainable investment strategies they have failed to produce any compelling evidence that the company itself has made a concerted effort to tackle the climate crisis. </p>
				<strong>What It’s made of (1.0/5)
 </strong>	
                    <p>eToro is an online social trading and investment platform originally founded under the name RetailFX in 2007 which “has ridden the recent wave of retail interest in both equity markets and cryptocurrencies.” Since its creation, the platform has grown to 20 million registered users in over 140 countries. eToro’s simple user interface integrates a multitude of different functions all on one dashboard which can be viewed either on the mobile application or on a desktop. The platform also offers access to commodities and cryptocurrencies so users can diversify their financial portfolios. Like other platforms, they also allow users to trial a practice account to get familiar with how the market works before diving in and investing their own money. All currency is held exclusively in USD with a minimum deposit of $50 dollars. One of the biggest purported advantages of online trading is the reduced cost which is supposed to improve the accessibility to the stock market for ordinary traders. eToro claims to offer commission-free trading which is true to an extent, except, they recuperate this money by charging a spread fee on each transaction. Unlike other platforms which require you to pay FX fees each time you make a transaction, eToro just charges a $5 fee each time you withdraw money. However, it could be argued that this $5 fee is not suited for day-traders that regularly withdraw small amounts and are looking to make fast returns rather than committing to a long-term investment strategy, or for those who only have a small amount of disposable income to actually play with. Furthermore, it is worth noting that unlike its major competitor Trading 212, eToro charges a monthly inactivity fee of $10 after 1 year of inactivity. While eToro does not disguise this fee, they do not clearly publicise it either and over time it could accrue into a large sum of money if users aren’t careful. This, therefore, seems inconsistent with eToro’s core value of ‘openness’. 
</p>
					<strong>How it’s made (0.75/5)
</strong>
<p>eToro’s analyst ratings and research tools show users the market's consensus on different stocks. These resources help to ‘democratise’ the financial sector by allowing traders to make informed decisions. This may seem like a strange statement given that public trading is technically open to anyone, but there are still barriers of entry for those unfamiliar with the esoteric world of stocks and shares. The Watchlist feature allows users to explore which stocks are popular and get a sense of market trends. Similarly, the News Feed provides real-time updates on the market. In many ways eToro operates like a social media platform, allowing users to comment on posts and engage in active discussions. eToro claims the purpose of this open interaction is to encourage traders to learn from each other and improve overall market transparency.</p>

<p>eToro has also introduced a CopyTrader function which allows users to match the transactions of other ‘Star Traders’ from their Popular Investor Program who have a proven track record of financial returns and meet “certain risk parameters set by eToro”. As the Telegraph summarised, the CopyTrader feature is supposed to “make traders of even the least informed of punters,” but, in reality, copy trading is a fundamentally flawed practice. This is because after the initial investor has made that trade and the information becomes public, they have already boosted the price of that trade. In many cases, this price change is substantial so ordinary users end up paying a premium while the ‘Star Traders’ make a tidy profit.</p>

<p>Furthermore, eToro offers themed portfolios like its “renewable energies portfolio” which function almost like ETFs (exchange-traded funds aka a type of security that tracks an index). These ‘pre-packaged’ investment strategies follow a rigid index of stocks, so, hypothetically, if some compromising information were to come out about a particular company in their renewable energies portfolio index, you wouldn’t be able to withdraw support for that specific company. While ETF providers claim to work closely with their index companies to promote better business practices, they do not have the same power as an active fund manager who can simply divest from a company at any point if they wish. In this way, while eToro’s sustainability ‘themed portfolios’ might seem like an attractive opportunity for a socially responsible investor, they do not offer the same flexibility as a single-stock investment.</p>

<p>In fairness to eToro, the company has devoted a lot of time and energy into vetting and promoting sustainable companies as well as providing educational articles on ESG’s and corporate sustainability. However, the fact remains that eToro is merely a market facilitator and their platform still allows users to invest in companies like BP or Exxon-Mobil. The onus is firmly on the platform’s users to invest responsibly. If sustainability was truly of paramount importance to eToro, then they would follow in the footsteps of smaller, rival trading platforms like Clim8 Invest and tickr who exclusively work with companies that meet their sustainable criteria. While eToro’s corporate ‘vision’ extols the importance of openness and accuracy in terms of the data they provide, there is limited information available about how their company actually operates. In order to truly deliver on their promise of openness, eToro should publish an annual sustainability report which breaks down their carbon emissions and plans to improve their sustainability performance.</p>

					<strong>Who makes it (1.0/5)
</strong>
<p>The multi-asset trading platform was founded by Israeli brothers Yoni and Ronen Assia in collaboration with investor David Ring. However, this wasn’t Ring’s first entrepreneurial venture; he is also responsible for founding the platform, Colu, which aims to promote economic growth within communities by creating a user-reward system that supports local businesses. Similarly, Yoni was responsible for creating GoodDollar, a global basic income coin that allows users to claim an amount of this digital currency each day with no strings attached; this platform was essentially a social experiment to test the viability of a universal basic income (UBI) as a means to address wealth inequality. It seems that eToro’s founders have incorporated many of their founding philosophies such as financial empowerment and market transparency into eToro’s own corporate ethos.</p>

<p>Furthermore, in March 2021, Lord Stanley Fink was appointed director of eToro’s UK operations. The Fink Family Trust is invested in a number of companies including The New Forests Company – an organisation that aims to sustainably source timber from African plantations in the face of rampant deforestation, and Blackbullion – a platform that provides educational resources for disadvantaged students. In this way, it seems that eToro is interested in working with individuals who embody their corporate values. Similarly, one of eToro’s major investors, Ping An, has been consistently hailed as a socially responsible pioneer in the development of fintech, voted the “The Most Respected Enterprise in China” by the Economic Observer for 17 consecutive years. However, another one of eToro’s biggest European investors, Anthemis Group, has a less than squeaky-clean reputation. The now former CEO of the London-based venture capital firm, Nadeem Shaikh, was forced to resign in 2018 after a sexual harassment scandal erupted. Admittedly though, Anthemis immediately conducted an internal review and Shaikh was subsequently removed, which demonstrates clear corporate integrity.</p>

<p>In terms of diversity within the company itself, according to eToro’s Head of Business Development, Dan Moczulski, a respectable 41% of the company’s 1100-people workforce is female. However, only 3 of the 23 high-ranking personnel on their ‘meet our team’ page are women. This reflects a much greater issue in the corporate world where only 23% of senior executive roles are held by women. For this reason, I think eToro could do with diversifying its senior corporate management team and leading by example.</p>

<p>Frustratingly, eToro has not published any data providing a breakdown of the racial diversity within the company across its various international offices, naturally making it very difficult to evaluate whether or not eToro has created an inclusive work-culture for its staff. While I cannot speak to the racial diversity within eToro itself, I can however comment on the company Coinbase - whose stocks are readily available on eToro’s platform as of 2021. Coinbase has consistently come under fire for its insensitivity when it comes to addressing issues of racial justice. In 2020, the CEO Brian Armstrong refused to publicly make a statement on the Black Lives Matter movement or any social activism for fear of jeopardizing the company's ‘apolitical culture’. Given that Coinbase is among one of the largest cryptocurrency platforms in the world and a major traded asset on eToro, it is incredibly disappointing that Armstrong refused to express solidarity with the Black Lives Matter movement. To make matters even worse, an article was published in December 2020 claiming that Coinbase underpaid its female and black employees. I feel that eToro missed a real opportunity here to take a stand against racial injustice by refusing to trade Coinbase’s stocks on their platform when the company went public with its IPO (Initial Public Offering) in 2021.</p>

<p>Additionally, according to data collected by Comparably, eToro ranks among the top 15% of companies in terms of their Work Culture Score. However, data provided by employees shows that 67% of eToro’s staff reported working 12-hour days. This exceeds the standard 8-hour day, but this is not necessarily a bad thing providing that eToro compensates its staff for their time and ensures the wellbeing of their employees is looked after.</p>

<div className="criteria">
					<h1>VOIZ Criteria: </h1>
					<p>VOIZ sustainability reviews are structured using a 3-part criteria, each of which is given a numerical score between 1 and 5. </p>
					<p><strong>What's it made of? </strong>
					This criterion assesses the materials and ingredients used in a product, considering their environmental impact, renewability, and sustainability. It involves evaluating whether the materials are sourced responsibly and if they have a low ecological footprint.</p>
					<p><strong>How's it made? </strong>
					This part examines the manufacturing process, including the energy efficiency of production, the carbon footprint, and waste management practices. It looks at whether sustainable practices are implemented during the production phase.</p>
					<p><strong>Who made it? </strong>
					This section focuses on the social aspect of sustainability, such as labor practices, fair wages, working conditions, and the overall ethical considerations in the production chain. It assesses how the production impacts the communities involved. </p>
				</div>
                   <h2>References</h2>
					<ol>
                    <li><a href="https://eyorekon-kevin.medium.com/gooddollar-the-worlds-first-people-powered-basic-income-de4ef12d6732">https://eyorekon-kevin.medium.com/gooddollar-the-worlds-first-people-powered-basic-income-de4ef12d6732</a></li>
<li><a href="https://newforests.net/vision-mission-statement/">https://newforests.net/vision-mission-statement/</a></li>
<li><a href="https://www.reuters.com/article/us-anthemis-ceo-idUSKBN1JN38N">https://www.reuters.com/article/us-anthemis-ceo-idUSKBN1JN38N</a></li>
<li><a href="https://www.comparably.com/companies/etoro/culture">https://www.comparably.com/companies/etoro/culture</a></li>
<li><a href="https://www.altfi.com/article/7968_how-to-improve-fintechs-gender-problem">https://www.altfi.com/article/7968_how-to-improve-fintechs-gender-problem</a></li>
<li><a href="https://www.wealthdaily.com/articles/the-problem-with-copy-trading/94806">https://www.wealthdaily.com/articles/the-problem-with-copy-trading/94806</a></li>
<li><a href="https://www.catalyst.org/research/women-in-management/">https://www.catalyst.org/research/women-in-management/</a></li>
<li><a href="https://www.ceps.eu/wp-content/uploads/2019/06/Sustainability-in-the-Age-of-Platforms-1.pdf">https://www.ceps.eu/wp-content/uploads/2019/06/Sustainability-in-the-Age-of-Platforms-1.pdf</a></li>
<li><a href="https://cryptobriefing.com/new-york-times-report-coinbase-discrimination/">https://cryptobriefing.com/new-york-times-report-coinbase-discrimination/</a></li>

                    
                    	</ol>
				
				</div>
			</React.Fragment>
		),
	};
}

export default article_etoro;