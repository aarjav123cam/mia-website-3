import React from "react";

function article_lemon() {
	return {
		date: "7 May 2023",
		title: "VOIZ Sustainability review: Lemonade AI Insurance",
		description:
			"Lemonade: Transforming Insurance with AI and Transparency - This article delves into Lemonade's innovative approach to insurance, leveraging AI for efficient service and a unique charitable model, while also addressing the challenges and criticisms it faces in a rapidly evolving sector.",
            keywords: [
                "Lemonade Insurance Innovation",
                "AI-driven Insurance Models",
                "Behavioral Economics in Insurance",
                "Transparent Insurance Practices",
                "Automated Insurance Claims",
                "Insurance Industry Disruption",
                "Charitable Giveback Insurance Model",
                "Lemonade's Business Strategy",
                "Efficiency of AI in Insurance",
                "Customer-centric Insurance Services",
                "Insurance Technology Advancements",
                "Lemonade's Impact on Insurance Sector"
                ]
            
			,
		style: `
				@media (max-width: 600px) {
					.article-content {
						display: flex;
						flex-direction: column;
						align-items: center;
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
				<h2>Lemonade: Transforming Insurance with AI and Transparency</h2>
				<div className="article-content">
				<figure className="randImage">
					<img src="https://drive.google.com/uc?id=1EQlDYSy8gdN_HoJRqXaT0qJQJI_6Bb9n" width="100%"  alt="random" />
					<figcaption>Lemonade Poster</figcaption>
				</figure>
                <strong>Overall rating (2.25/5): </strong>
                    <p>The insurance sector for has long as it has existed has been marred by distrust and conflict. Fraudulent claims, mismanagement of risk, sky-high premiums and confusingly-worded policies are just some of the problems experienced by consumers. But Lemonade claim to be ‘an insurance company unlike any you’ve seen before’. According to Lemonade’s CEO Daniel Schreiber, the traditional insurance model is all about companies “projecting [their] financial prowess in the hope that people will be cowered into trusting you” . Schreiber is adamant that one of the main reasons people make fraudulent insurance claims is because they feel the industry is “an uneven playing field”. Lemonade seeks to combat fraudulent claims by adopting a transparent insurance model that is heavily informed by behavioural economics. In fact, Lemonade’s entire operation relies on establishing good-will with its customers. By satisfying their existing users Lemonade is able to attract new customers and use their predictive data to improve the performance of its A.I bot. But most remarkably, Lemonade does not pocket unclaimed, residual money but instead charges a flat fee and donates whatever’s left over to a charity of the customers choosing. Schrieber argues that the company’s unique Giveback scheme “neutralises some of the conflict of interest” that often complicates insurance claim disputes. Essentially, Lemonade wants to reimagine the dynamics of power between the claimant and insurance company so that the experience no longer feels like a “win” or ”lose” proposition. </p>
				<strong>What it’s made of (2.5/5): </strong>	
                    <p>Upon downloading the app, the user will be asked a series of standard questions, for instance if you are looking to take out renter’s insurance you might be asked where you live, the building’s age and proximity to the coast or a fire station etc. Lemonade’s A.I bot will then create a personalised policy for the user based on the information provided, but the customer can still customise their coverage so that they are totally satisfied with the final policy. The customer then enters their payment details and selects a cause they care about so that any unclaimed money at the end of the year can be donated to an organisation of their choosing. Taking out a claim is a similarly straightforward process, the customer simply explains in a short video what has been damaged or stolen and provides a digital signature to verify that their claim is truthful, the approved claim is then processed and the money is issued to the user. Clearly, one of the biggest advantages of Lemonade’s automated services is the speed in which customers can buy an insurance policy or make a claim. Schreiber asserts that “if you’ve spent more than 90 seconds buying insurance you’re doing something wrong”, the entire point of their business model is that it should be relatively easy to navigate the app and their stats attest to the impressive speed of their automated services, around 30% of customer claims are paid algorithmically within 3 seconds of submission. Furthermore, allowing customers to file a claim over video eliminates any unnecessary paperwork, saving time while reducing waste. The biggest advantage of using automated processes is that Lemonade does not rely on a huge workforce of brokers and actuaries, instead they can service their 1 million customers with a relatively small number of staff. In fact, Lemonade only has 329 employees and an impressive annual revenue totalling $94.4 million as of 2020, whereas one of the UKs leading insurance brokers, Brightside Group, has 482 staff despite only making £36.1 million (approx. $49 million) in revenue. By only having a modestly small team of staff, Lemonade does encounter the energy-intensive running costs of huge office spaces around the world to cater to their international customer base, instead they just have offices in NY and Sioux Falls, South Dakota. </p>
                    <p>Another major advantage of Lemonade’s insurance packages is the affordability of their coverage, Lemonade’s renters insurance starts at just $5 a month (although prices naturally vary depending on case specifics) which is considerably less than the US national average of $14 a month, rising to as much as $22 a month in states like Louisiana. Similarly, Lemonade’s homeowner’s insurance starts at around $25 a month which is relatively inexpensive when compared to the average monthly cost of $125.75 billed by one of the US’s biggest insurance providers, USAA. Lemonade’s competitively priced policy packages are praiseworthy, especially as low-income households are often dissuaded from taking out insurance because of high fees or dreaded ‘loyalty premiums’, leaving them exposed to serious financial loss. In fact, in the UK according to statistics published by WPI Economics only 39% of households with an income of under £15,000 have contents insurance compared with 59% of households earning between £15-30K. For this reason, the coverage that companies like Lemonade provide is essential by ensuring that insurance is not just for the privileged few. </p>
                    <strong>How it’s made (2.0/5): </strong>
                    <p>However, while Lemonade seem like the perfect solution to the convoluted formalities of  insurance claims, the company is not without its own set of unique issues – many of which they outline in their 2020 annual report. The report acknowledges that the ‘novelty of [Lemonade’s] business model makes its efficacy unpredictable and susceptible to unintended consequences’. For one, the company’s existing procedures to manage nascent technology such as machine-learning A.I ‘may prove inadequate … resulting in a greater likelihood of inadvertent legal or compliance failures”, in other words the company may be liable for mishandling claims or customer data because the technology they are using is still in the early stages of development.  Additionally, Lemonade admits that that ‘new legislation or legal requirements … could have a material adverse effect on [its] business model’, this statement highlights the risks associated with building a business that relies on relatively new, unpredictable technology. Lemonade expands on the potential challenges their company may face in the future, particularly with the introduction of  ‘future laws, and evolving attitudes about privacy protection [which] may impair our ability to collect … data … to develop our artificial intelligence algorithms’. Essentially this means that the reliability of Lemonade’s automated processes like it’s A.I chat bot may be hindered by legislative reform.  </p>
                    <p>Lemonade’s annual report also concedes that the company ‘could be forced to modify or eliminate [the] Giveback scheme’, the main reasons the company cites for possibly having to rethink its existing business model is if they were experience a high frequency of fraudulent claims which would naturally raise reinsurers’ rates, if a state or federal authority determined that the Giveback scheme was a rebate rather than a charitable donation, if the program did not align with its customers values or failed to attract new customers. Understandably, one might be disappointed that Lemonade would even consider abandoning their charitable program – especially as they carry the unique distinction of being the world’s only public benefit insurance company, but in their defence they have repeatedly stressed their continued commitment to the scheme. Ultimately, Lemonade has to be realistic about the logistics of growing its business so that it continues to be profitable. </p>
                    <p>On the issue of equality, Schreiber believes that the digital revolution and insurTech has the potential to create a more equitable society. In a video posted to his personal YouTube channel, Schreiber highlights the issues with the existing methodologies for assessing risk in the insurance industry, for instance if you were to calculate the cost of insurance for a driver using a protected class like gender the policy would likely be more expensive for male drivers than female drivers because statistically speaking they have a higher rate of accidents. However, Schreiber points out that generally speaking while men are much more likely to be involved in an accident this does not mean that all male drivers should be charged a higher premium as it does not account for the variabilities within a large data set – furthermore the issue is complicated when you consider that women are actually more likely to suffer injuries from traffic collisions because cars historically have been designed using male model dummies – here we encounter the unfair consequences of “imposing a uniform rate on a nonuniform group”. Therefore, by only using a limited number of data points to determine risk and insurability, insurance companies can often make discriminatory generalisations based on externalities (e.g race, gender, age) that do not reflect the nuances of individual cases. But machine learning could address this issue by refining data sets and breaking down crude groupings to treat each person as an individual. However, I am not entirely convinced by Schreiber’s optimism around big data as I question how this approach may come at the expense of people’s privacy. Additionally, I could not find any information on the diversity within Lemonade itself aside from some contradictory reviews on glassdoor. One review left by an anonymous former employee claimed that there was “no diversity in management” while another current employee wrote that they had “never worked on a more diverse team where everyone is given the opportunity to participate”. Given the conflicting nature of these personal testimonies it is difficult to get a sense of what the company culture is actually like at Lemonade, for this reason I feel the company should publish an annual diversity and sustainability report to dispel any false information about how the company operates internally. </p>
                    <strong>Who makes it (1.25/5): </strong>
                    <p>In Lemonade’s infancy the young start-up received funding from Thrive Capital. Upon further research I discovered Thrive Capital is one of a number of ventures by American business magnate Joshua Kushner, brother of former senior advisor to the Trump administration Jared Kushner. However, Kushner very recently come under scrutiny for the questionable business practices of his real estate firm Westminster Management. In fact, in 2021 a Judge ruled that the firm had behaved dishonestly by collecting debts without licences, charging tenants inappropriate fees and not fully disclosing the real condition of rental units. It seems strange that Lemonade, an insurance firm which prides itself on transparency should be associated with someone like Joshua Kushner, who has been accused of deceptive practices. However, in Lemonade’s defence they accepted funding from Kushner’s venture capital firm in 2016 prior to the publication of these allegations. Furthermore, in 2017 Lemonade announced that Allianz had become an investor in the company. Allianz is a major multinational financial firm specialising in asset management. Notably, the former CEO of Allianz, Henning Schulte-Noelle in 1993 commissioned an archive to investigate the corporation’s history. Further research was conducted with the help of historian Gerald Feldman into Allianz’s ties to the activities of the Third Reich. Allianz would eventually partner with 4 other insurance forms to establish the ICHEIC (International Commission on Holocaust Era Insurance Claims) to resolve unpaid insurance claim disputes for around 48,000 Holocaust survivors and their heirs. This humanitarian initiative not only proved instrumental for setting out the legislative precedent for similar compensation schemes in the U.S but also showed exceptional corporate accountability. Companies often times shy away from addressing polarising or politically charged issues, but to Allianz’ credit they have gone to great lengths to acknowledge their role in such a dark period of human history. Currently however, Lemonade’s biggest shareholder is the Softbank Group Corporation with a nearly 20% stake in the company. Softbank is multinational conglomerate and undpisputed titan in the tech industry, but they have faced criticism in recent years for what Vox dubs “troublesome…ties to Saudi Arabia”. In fact, around 45% of Softbank’s $100 billion venture-capital fund (Vision Fund) is financed by the Saudi governments’ own sovereign wealth fund. </p>
                    <h2>References</h2>
					<ol>
                    <li><a href="https://bdaily.co.uk/articles/2021/06/08/world-environment-day-tips-from-business-leaders">https://bdaily.co.uk/articles/2021/06/08/world-environment-day-tips-from-business-leaders</a></li>
<li><a href="http://www.claimscon.org/about/history/closed-programs/icheic/">http://www.claimscon.org/about/history/closed-programs/icheic/</a></li>
<li><a href="https://www.vox.com/recode/2019/5/10/18563267/softbank-vision-fund-explainer-uber-wework-slack-ipo">https://www.vox.com/recode/2019/5/10/18563267/softbank-vision-fund-explainer-uber-wework-slack-ipo</a></li>
<li><a href="https://sec.report/Document/0001691421-21-000024/#ia06dfed22c8f4ab0835a3a4e31245df6_241">https://sec.report/Document/0001691421-21-000024/#ia06dfed22c8f4ab0835a3a4e31245df6_241</a></li>
<li><a href="https://www.youtube.com/watch?v=DotEI8j0GcQ">https://www.youtube.com/watch?v=DotEI8j0GcQ</a></li>
<li><a href="https://www.nerdwallet.com/article/insurance/how-much-is-renters-insurance">https://www.nerdwallet.com/article/insurance/how-much-is-renters-insurance</a></li>
<li><a href="https://www.valuepenguin.com/average-cost-of-homeowners-insurance">https://www.valuepenguin.com/average-cost-of-homeowners-insurance</a></li>
<li><a href="https://barrowcadbury.org.uk/wp-content/uploads/2019/04/Insurance-and-the-poverty-premium-WPI-Economics-final.pdf">https://barrowcadbury.org.uk/wp-content/uploads/2019/04/Insurance-and-the-poverty-premium-WPI-Economics-final.pdf</a></li>
<li><a href="https://www.insuranceage.co.uk/broker/4268541/top-100-2019-ps100m-to-ps19999m">https://www.insuranceage.co.uk/broker/4268541/top-100-2019-ps100m-to-ps19999m</a></li>
<li><a href="https://www.lemonade.com/blog/worlds-public-benefit-insurance-company/">https://www.lemonade.com/blog/worlds-public-benefit-insurance-company/</a></li>
<li><a href="https://www.youtube.com/watch?v=VVPXHeLLep0">https://www.youtube.com/watch?v=VVPXHeLLep0</a></li>
<li><a href="https://www.glassdoor.co.uk/FAQ/Lemonade-Question-FAQ200086-E1736285.htm">https://www.glassdoor.co.uk/FAQ/Lemonade-Question-FAQ200086-E1736285.htm</a></li>

					</ol>
				
				</div>
			</React.Fragment>
		),
	};
}

export default article_lemon;