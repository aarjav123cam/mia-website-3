import React from "react";

function article_apple() {
  const image = "https://storage.googleapis.com/mia_website/The%20Apple%20Store%20Poster.png";
	return {
		date: "7 May 2023",
    image: image,
		title: "The Apple Store (no not that one)",
		description:
			"This article details the history and eventual failure of The Beatles' Apple Boutique, opened in 1967 in London, highlighting its unique style, management issues, rampant shoplifting, and its reflection of the era's cultural and fashion trends",
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
    <p>Picture this, the year is 1967, it is The Summer of Love in San Francisco’s Haight-Ashbury neighbourhood, the fifth installation in the bond series You Only Live Twice makes a splash at the box office and The Beatles debut their eighth studio album Sgt. Pepper’s Lonely Hearts Club – an exploration of mysticism, fashion and youth culture. Riding high on the mass hysteria that was Beatlemania the British boyband decided to open up their own store in London. It would come to be known as The Apple boutique. The four young popstars saw Apple as the perfect opportunity to capitalise on their dizzying success and grow the Beatles brand with plans to use the store as a springboard for a national chain. At the time UK music, fashion and cinema were a hot cultural commodity and the Beatles were easily one of the biggest exports of the British Invasion. The store would be located at the heart of Westminster’s Marylebone district on 94 Baker street, just a little over a mile from Carnaby street – which itself had become bustling centre for independent boutiques and aspiring young designers in the 60s. </p>

    <p>But between their international tours, studio sessions and public appearances the Beatles were in no position to run a busy London boutique. Exclusive coverage by Movietone News at the time for store’s opening noted that only John Lennon and George Harrison were in attendance for the grand unveiling while Paul and Ringo were conspicuously absent (ironically, even for the stores closure the bandmates did not return to the premises, busy recording demos at Trident Studios for their record ‘Hey Jude’). Consequently, the store’s management was left to Lennon’s childhood friend, Pete Shotton while £100,000 was given to the Dutch art collective ‘The Fools’ to design the storefront and merchandise.</p>

    <p>What resulted was a store that was distinctly eye-catching. Every square inch of the 3-storey Georgian townhouse was decorated with Gaudi-style interiors, psychedelic frescoes and kaleidoscopic murals. With the Beatles financial backing and The Fools creative direction what could possibly go wrong? Well it turns out, quite a lot. The store would be open for just 7 months before closing its doors in July of 1968. Why was this popular store such a huge commercial failure? From the outset, McCartney claimed the groups vision was to open “a beautiful place where beautiful people could buy beautiful things”. In reality their motives were likely far more cynical, Clive Epstein (the brother of the Beatles former manager) allegedly advised the band to invest a large sum of money quickly otherwise it would be claimed by the taxman. Lennon would reflect on the ill-fated store 2 years after its closure explaining that the band had been approached by “some business freak” and discussed several investment strategies before settling on the Apple Boutique however the final result fell short of their grand plans, amounting to little more than “junk…and all these stupid clothes” (John Lennon, 1970 Lennon Remembers, Jann S Wenner), hardly a glowing endorsement of his own merchandise.</p>

    <p>Rampant shoplifting was cited as the main reason for its eventual closure. Figures estimate that over £200,000 of goods was stolen from the boutique and store clerks were routinely encouraged not to report shoplifters. There is some suggestion that the stores lax policy on shoplifting was an anti-establishment, political statement by the band and sure enough in 1968 The Beatles would release the song ‘Piggies’ on their polarising White Album. The songs title was a reference to the American pejorative for police officers and was widely interpreted by many as an anti-authoritarian anthem. But it wasn’t just customers that regularly stole merchandise, staff reportedly helped themselves too. The stores mismanagement was so infamous that it was satirised by the sketch-comedy group the Monty Pythons in a 1978 film titled “The Rutles: All you need is cash”. At one point during the mockumentary Comedian Eric Idle reports on the bankruptcy of a boutique owned by pop group The Rutles (a fictional band modelled after The Beatles) all because “people…helped themselves for years” and jokes “at one stage [the Rutles] were losing money faster than the British government!”.  Despite the alarming rates of shoplifting the Beatles did not appear concerned with turning a profit, in fact band member Ringo Star conceded that the venture was “silly but we [just] wanted to open a shop and dress everyone like us” (Ringo Star, Anthology). </p>

    <p>Perhaps the failure of Apple reflects the decline of the UK’s clothing industry more generally. The 60s had seen an explosive boom with the volume of clothing exports almost doubling between 1954-1963 and then again in the following two years, reaching approx. £50 million by 1965 (Style City: How London Became A Fashion Capital, Robert O’Byrne, pg 22). But the 1970s was plagued by economic hardship and “remembered for the terrible difficulties faced by all areas of British industry”, the fashion industry was no exception. Even one of the biggest success stories to emerge from the Carnaby street craze, fashion-retailer Biba, was forced to close its doors in 1975 due to the economic recession.</p>

    <p>Ultimately, the Apple store was predictably similar to the wave of independent boutiques that had been opened by young socialites and celebs in the heart of London. According to the “Get Dressed: A Useful Guide to London’s Boutiques” (1966) there were an estimated 88 similar shops in central London so the market was quickly becoming oversaturated. McCartney himself acknowledges in the official press release for the stores closure that “the shops were intended to be something else, but they just became like all the boutiques in London”, in this way it seems that the Apple store failed partly because it suffered a crisis of identity. Harrison certainly seems to agree with this explanation, he felt that the decision to cover over the colourful mural painted on the building’s façade with a plain white exterior after Westminster Council issued an enforcement notice was a troubling omen that signalled the stores demise, the move was seen as a betrayal of the flower-power movement and from this point onwards “the whole thing started to lose its appeal”.</p>

    <p>To make matters worse, these boutiques were all competing for business from a relatively small customer demographic. As O’Byrne explains “despite its popularity…Swinging London’s fashion, while…less expensive than couture, on the whole was far from cheap”. In fact, a 1967 Mary Quant Ginger Group jersey dress would set you back 8 and a half guineas – the equivalent of a weeks wages for a young shop assistant at the time. Tom Salter, owner of the boutique ‘Gear’ in Carnaby Street wrote in a 1970 Op-ed that prior to the 60s the area trafficked in only a few visitors, but steadily this number grew until  “youngsters would make this weekly trip, a kind of pilgrimage to the shrine of fashion [and] now they come in coachloads … all come to look, some come to shop”. What is perhaps most interesting about Salter’s testimony is not the explosion of interest in British fashion but rather how he dances around the issue of its hefty price tags. The merchandise sold in London’s trendy Carnaby street boutiques came at a premium, which explains why “all come to look” but only “some come to shop”. The Apple boutique certainly delivered on quality, offering “extravagant silk, velvet and vinyl garments” (Adela Teubner, 2015) but at the expense of sky-high prices. So while these boutiques were popular amongst the youth only a select number of youngsters would’ve actually had the means to afford the trendy items on offer. David Gilbert in his thesis “The Cultures of Consumption and the Mythologies of Swinging London” explores this issue more thoroughly, arguing that “despite the classless rhetoric … many of the most prominent producers of the [Swinging sixties] scene were decidedly upper class” (pg 7). In short, the fashion trends of the 60s were manufactured by the wealthy for the wealthy.</p>

    <p>It should be noted however that upon the Apple stores closure The Beatles invited fans to each select one item to take home for free rather than liquidating the remaining stock in a huge sale. Naturally, crowds flocked to the store and queued for hours in a last-ditch bid to get a hold of the limited merchandise. Lennon, now disillusioned by the voyeuristic consumerism of the 60s, argued that this decision was “the best thing about the whole shop” (John Lennon, 1972, Anthology).</p>

    <p>If anything, the Apple Boutique as a case study demonstrates that celebrity alone is not enough to support a huge clothing brand. Just look at Rihanna’s Fenty fashion house which announced its immediate closure in February of 2021 after failing to “gain the traction its initial hype promised” (Roxanne Robinson, retail journalist 2021). In this case, even the endorsement of a universally beloved popstar was not enough to rescue the luxury fashion label.</p>

    <p>It’s also important to acknowledge that the outrageous styles of the swinging 60s did not have the same cultural staying power as The Beatles discography, as Colby Mugrabi explains the store itself was an “ephemeral art piece mirroring the status quo of its time” (2019). The popularity of the 60s brightly coloured Jersey dresses, Cardin cylinder suit jackets and winkle picker shoes began to wane as the 70s ushered in an entirely new era of glam rock platforms, disco flares and hotpants. The store was indicative of the cultural zeitgeist at the time, celebrating the late 60s fascination with psychedelia, but zeitgeists change. In short it seems that the Beatles tried to capitalise on a movement that was quickly beginning to fade. Trying to pin down exactly when this cultural shift occurred is a question hotly debated amongst most historians, some argue that the 60s came to an abrupt end in 1966 with the tragic death of British socialite Tara Browne, others argue that the Beatles 1968 trip to India and subsequent White Album which switched out the bright and exuberant colours of the Sgt. Pepper era for a simple, stripped-back cover signalled a radical change. Whatever the answer, it seems that the boutique was doomed to fail from the start.</p>

    <p>Hopefully with a renewed interest in The Beatles later years following Peter Jacksons’ documentary series “The Beatles: Get Back” this forgotten store on the corner of Baker Street will once again receive the attention it so deserves.</p>

</div>


                
					<h2>References</h2>
					<ol>

            <li>Gilbert, David. 'The Youngest Legend in History': The Cultures of Consumption and the Mythologies of Swinging London (2006)</li>
            <li><a href="https://www.minniemuse.com/articles/musings/the-apple-boutique">https://www.minniemuse.com/articles/musings/the-apple-boutique</a></li>
            <li>O'Byrne, Robert. Style City: How London Became a Fashion Capital (2009)</li>
            <li><a href="https://allyouneedisthebeatles.wordpress.com/2015/04/12/the-rise-and-fall-of-the-beatles-apple-boutique/">https://allyouneedisthebeatles.wordpress.com/2015/04/12/the-rise-and-fall-of-the-beatles-apple-boutique/</a></li>
            <li><a href="https://www.forbes.com/sites/roxannerobinson/2021/02/11/why-rihannas-fenty-clothing-line-has-been-put-to-an-end/">https://www.forbes.com/sites/roxannerobinson/2021/02/11/why-rihannas-fenty-clothing-line-has-been-put-to-an-end/</a></li>
            <li>Starr, Ringo. The Beatles Anthology (2000)</li>
            <li>Wenner, Jann. Lennon Remembers: The Rolling Stone Interviews (1973)</li>
          </ol>
				
				</div>
			</React.Fragment>
		),
	};
}
export default article_apple;