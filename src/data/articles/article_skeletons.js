import React from "react";

function article_skeletons() {
  const image = "https://storage.googleapis.com/mia_website/Skeletons%20in%20the%20closet%20Poster.png";
	return {
		date: "7 May 2023",
    image: image,
		title: "Skeletons in the closet: Fashions complicated relationship with the horror genre",
		description:
			"This article delves into the intricate and often overlooked relationship between fashion and the horror genre, highlighting how designers like Alexander McQueen and Rick Owens draw inspiration from horror's aesthetics and themes, and how iconic horror films like 'The Shining' and 'The Addams Family' use fashion as a fundamental element in storytelling and character development.",
			keywords: [
				"Pre-Raphaelite Brotherhood",
				"Victorian Art",
				"British Culture",
				"Art Market",
				"Collectors and Auctions",
				"John Everett Millais",
				"Dante Gabriel Rossetti",
				"William Holman Hunt",
				"Artistic Revolution",
				"Religious Imagery in Art",
				"Industrial Revolution Influence",
				"Pre-Raphaelite Women",
				"Medievalism in Art",
				"Tate Gallery Exhibition",
				"Art History",
				"19th Century Art Movements"
			],
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
				<div className="article-content">
				<figure className="randImage">
					<img src={image} width="100%"  alt="random" />
					<figcaption>Pre Raphaelites poster</figcaption>
				</figure>
                <div>
    <p>Halloween as a holiday has gained significant traction in the UK in recent years as people seemingly share in their morbid fascination with the dark and twisted aesthetics of horror. In fact, even the most prestigious fashion designers have drawn inspiration from the visual language of horror. In the course of his short-lived career Alexander McQueen established himself as an intrepid trailblazer who pushed the boundaries of catwalk fashion with his distinctive tailored silhouettes and extravagant headdresses.</p>

    <p>Its perhaps no surprise that McQueen’s 1992 catwalk debut upon graduating from Central Saint Martins art school was a love letter to the gruesome story of the 1888 Whitechapel murders titled “Jack the Ripper Stalks his victims”. The collection embraced all the hallmarks of Victorian gothic fashion from its silk petticoats and use of leg of mutton sleeves to his use of black lace and high collared jackets. But the collections standout piece without question was a long-sleeve jacket decorated with a barbed wire print. From a distance the jacket appears to be a flushed pink silk but upon closer inspection the fabric is tinged with deeper shades of red to intentionally appear almost blood-smeared.</p>

    <p>The garment was paired with a thorny crown, an allusion to the crucifixion of Christ. But in this instance the crown’s weighty religious significance comes to represent the persecution of London’s prostitutes who fell victim to the Rippers’ violent killing spree. To top it all off, each garment was lined with a lock of Lee’s hair encased in a piece of Perspex, an homage to the Victorian custom where prostitutes would sell locks of their hair as souvenirs to be exchanged between lovers. The story of the Ripper’s crimes have remained a point of public fascination for over a century and have been reimagined in numerous television adaptations, films and book series. McQueen’s collection was not only an indication of his promise as a burgeoning star but more importantly a testament to the striking visuals of the horror genre.</p>

    <p>Other designers have made more explicit references to the horror genre like Rick Owen’s 2016 Fall collection Mastadon. The collection was a mediation on the escalating global climate crisis and dealt with themes of death and decay. Owen’s took advantage of chalk white, American tan and corpse grey as well as layered shearing to create the appearance of “flayed flesh”. Despite the collections relatively muted colour scheme the clothing still managed to appear graphic, fashion journalist Alexander Fury described the garments as “violent – they looked disembowelled”.</p>

    <p>It is perhaps fitting then that many of Owen’s models don white face paint, an homage to John Carpenter’s 1978 classic Halloween and its knife-wielding antagonist, Mike Meyers. Throughout the course of the film, Meyers wreaks havoc on the small town of Haddonfield, picking off his victims one-by-one. It makes sense that Owen’s would choose this masked boogeyman as the perfect metaphor for the looming threat of extinction. Owens’ use of Meyers highlights the self-reflexive power of horror, on one level the dramatic makeup is immediately striking to anyone already familiar with the film but this horror is only amplified by the greater existential threat that the character comes to embody. Fury also cites Georges Franju’s Les yeux sans visage as a major inspiration for Owen’s Mastadon collection, the 1960 French-language horror film tells the story of Dr. Genessier who abducts young women and performs experiments to correct his daughter Christiane’s disfigured face after she suffers a horrific accident for which he is responsible. Again, Owen draws on the themes of creation and hubris to highlight the harmful realities of human activity, just as Christiane’s youthful beautiful is irrevocably scarred by the reckless actions of her father the earth is ravaged by the carelessness of its inhabitants.</p>

    <p>But while Hollywood horror has proved a major source of inspiration for the runway, fashion and costume design has come to define the generic tropes associated with horror on the big screen too. Perhaps one of the most popular Halloween costumes for children and adults alike are the characters of Barry Sonnenfeld’s 1992 feature film adapted from the 60s sitcom, The Addams Family. Despite a mixed reception upon its release, the film has quickly amassed a large following. One of the movies harshest critics was Roger Ebert who in his scathing review remarked that while the movie had its fair share of “strange evil creatures inhabiting a tricky haunted house … in The Addams Family the effects seem put in for their own sake, to be looked at, and are not really exploited in the story”. Ironically, I feel Ebert entirely misses the point here, The Addams Family has continued to resonate with audiences today precisely because of its highly-stylised visuals. The turreted, Victorian gothic mansion and 1930s Packard V-12 are all reminders that this cast of misfits belong to a bygone era.</p>

    <p>But arguably it is their outfits designed by acclaimed British costume designer Ruth Myers that prove most integral to the film’s visual storytelling. Morticia’s plunging necklines, Gomez’ mobster-inspired pinstripe suit and Wednesday’s high-collared dress are all instantly recognisable and tell us so much about the characters. Myers took inspiration from several time periods to create the family’s distinct looks, in doing so the costumes are intentionally difficult to place and ultimately timeless. Morticia’s floor length evening dresses were decorated with jet jewels – a black coloured stone typically worn during periods of mourning in the Victorian era while her hooded cape was inspired by the coronation dresses typical of Edwardian princesses in Russia, a clear indication of her regal status as the family matriarch. In contrast to Morticia’s form-fitting dresses, Wednesday’s outfits are decidedly more dressed-down as she spurns the bright pastels and floral patterns worn by most other young girls her age. Wednesday’s rotation of outfits also includes what Myers dubs a “mini Morticia dress for the ball” modelled after her mother’s more feminine, silhouetted dresses. This subtle choice tells us that even Wednesday quietly admires her mother’s style and naturally tries to emulate it. In the words of Oscar Wilde “every woman becomes like their mother” and Wednesday Addams is no exception.</p>

    <p>Myers’ impressive work in The Addams Family did not go unnoticed earning an Academy Award nomination and proving that “dress in horror is not a coincidental element… [but] fundamental to the understanding of characterisation and setting of horror” (Petrov, J. & Whitehead, D.  2017).</p>

    <p>This relationship between fashion and horror is also made explicit in Stanley Kubrick’s hugely influential film The Shining (1980). Fashion had always played a huge role in Kubrick’s artistic vision, whether it’s the ridiculous fop makeup of the English aristocracy in Barry Lyndon (1975) or the signature white braces and bowler hat of ‘the droogs’ in A Clockwork Orange (1971), but it seems that “Kubrick’s relationship with fashion has been largely overlooked” (Adrienne Groen, assistant curator at The Design Museum). The Shining uses costume and colour coding to communicate the apparent disconnect between its main characters.</p>

    <p><strong>*MINOR SPOILERS AHEAD: BE WARNED*</strong></p>

    <p>At the very start of the film we are greeted with a shot of mother and son Wendy and Danny sat at the table quietly enjoying breakfast, both characters wear blue and red to suggest that the two share a strong, familial bond. Almost immediately we cut away to the film’s troubled protagonist Jack Torrence, dressed in a tailored, tweed suit for his interview at the Overlook Hotel. Unlike his wife or son, Jack does not sport the same colour combination, instead, his grey suit is accentuated by a green tie. While green is complementary to the primary colors of blue and red the choice seems to suggest a disjointedness in the family unit, this idea is further underscored by the dialogue as the interviewer warns Jack of “the tremendous sense of isolation” he will undoubtedly experience if he agrees to manage the hotel over the winter months. What’s more, Jack switches his smart attire for more casual clothes as he settles into his new life at the Hotel, preferring a tartan shirt paired with a simple suede jacket or woolly cardigan, a subtle choice that mirrors his slow descent into madness.</p>

    <p>Later on, Wendy comes to the aid of her distressed husband as he confesses he’s losing his mind, this time it is Wendy who is dressed in green with a tartan green undershirt and beige overalls while Jack sports a blue tartan shirt and red suede jacket, the reversal is indicative of the strained disconnect within their marriage. The two characters are soon greeted by their son who has similarly traded his signature red and blue outfit for a beige undershirt and green corduroy trousers to drive home Jack’s estrangement from his wife and son. Interestingly, there are no extravagant costumes, gory prosthetics or flashy period dresses in The Shining, its horror lies in its mundanity as three seemingly ordinary people are tormented by a sinister, supernatural force. As Petrov and Whitehead surmise “horror dress is not limited to victims and villains … the simultaneous mundanity and spectacularity of clothing is key to its symbolic power” (Petrov, J. & Whitehead, D.  2017).</p>

    <p>So what does this all mean? Well if anything I hope it illustrates the symbiotic relationship between fashion and horror, the world of fashion is indebted to the horror genre just as the visual language of horror is informed by fashion. Ultimately, just like in any other artistic discipline “it is clear there is an appetite for exploring the darker side of human nature [and] reveal what ought to be concealed”, in other words it’s the designer’s prerogative to startle, shock or even horrify.</p>
</div>


                
					<h2>References</h2>
					<ol>

            <li><a href="https://www.elle.com/culture/movies-tv/a34526239/addams-family-costume-designer-secrets/">	"https://www.elle.com/culture/movies-tv/a34526239/addams-family-costume-designer-secrets/"</a></li>
            <li><a href="https://i-d.vice.com/en/article/597gen/stanley-kubrick-exhibition-at-the-design-museum">"https://i-d.vice.com/en/article/597gen/stanley-kubrick-exhibition-at-the-design-museum"</a></li>
            <li><a href="https://www.rickowens.eu/en/US/interviews/newyorktimes-march-2-2017">https://www.rickowens.eu/en/US/interviews/newyorktimes-march-2-2017</a></li>
            <li>Petrov, Julia & Whitehead, Gudrun D, Fashioning Horror: Dressing to Kill on Screen and in Literature (2017)</li>
          </ol>
				
				</div>
			</React.Fragment>
		),
	};
}
export default article_skeletons;