import React from "react";

function article_crete() {
  const image = "https://storage.googleapis.com/mia_website/The%20Minoan%20Bull%20(Cretan%20Storytime%20poster).jpg";
	return {
		date: "7 May 2023",
    image: image,
		title: "Personal Story Time: The Minoan Ball",
		description:
			"An article about how ancient civilisations saw the natural world + reconciled their relationship with it – based on my 2019 visit to Crete",
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
                .quote {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                    
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
					<figcaption>Minoan Ball Poster</figcaption>
				</figure>
				<h2>Modern problems, Ancient solutions</h2>
                <div className="quote"><div>
                “Just like huge ocean waves on the Icarian Sea, <br />
when East Wind and South Wind rush down together<br />
… to whip up the sea … <br />
the whole assembly rippled, like a large grain field,<br />
undulating under the fury of the storm”<br />
                </div>
                
                </div>
                <div>
    <p>This simile is actually about 2000 yrs old, taken from Homer’s legendary epic ‘The Iliad’. It seems that for about as long as mankind has been writing stories we’ve been fascinated by the majesty of nature. It’s one thing that has struck me since studying Classics. Our obsession with the natural world and our place in it is not a new question, it’s an ancient one. In fact, the ancient world is littered with stories about hubristic men, convinced they have some kind of magisterial command over the natural world. The story of the Persian King Xerxes whipping the sea out of anger after failing to cross the Hellespont, the crazy Emperor Caligula declaring war on the sea during or the hot-headed hero Achilles throwing punches at the river god Scamander all spring to mind. On the surface, these stories seem absurd. But if we take a step back and really think about it, are we all that different from Xerxes Caligula? People today seem to expect the planet to accommodate our needs rather than the other way around and we become incensed when things don’t go our way. So your telling me we can’t all drive petrol-guzzling cars and deplete our planet's natural resources without climactic repercussions?</p>

    <p>This precarious relationship with the natural world is an idea that stuck with me after my trip to Crete in 2019. I visited the ancient palace of Knossos, tucked away in the quiet Cretan countryside, before being herded back onto the tour bus and driven into the bustling centre of Heraklion. Crete is an island that has been continuously occupied for thousands of years and evidence of this human occupation is everywhere you look. I was eventually ushered towards the Heraklion Archaeological Museum, dragging my heels at the entrance in the stifling heat. At this point I was ready to throw-in the towel and head back to my air-conditioned hotel room, but as I traipsed down the corridors lined with pots and ceramics I began to notice a reoccurring iconographic image, the horned bull. I arrived at the hall of frescoes and was again confronted by the same Minoan bull. This time a fresco showed a man wrestling with the wild animal. The scene is imbued with a sense of movement and intensity, with the man extended in an acrobatic pose. Can man really expect to tame the natural world?</p>

    <p>The fresco at least creates a real sense that mankind’s ‘mastery’ of the natural world is precarious. The bull could charge at any moment, throwing the man totally off-balance. Equally, the natural world is volatile and wildly unpredictable. Maybe those ancient Mycenaeans were onto something here? 

Just as the matador antagonises the bull at great risk to himself, why do we as a species insist on pushing our luck when it comes to our home planet? We must learn to work WITH our planet not FIGHT against it. It is not a matter of ‘winning’ or ‘losing’ but appreciating we only have one planet, so we better look after it. </p>

    </div>
	<div className="criteria">
					<h1>VOIZ Article Criteria: </h1>
					<p>A small number of VOIZ interns were selected to produce editorial content on the organisation’s website. These articles privileged brevity in order to encourage readership and were written in a conversational tone to appeal to a younger demographic. </p>
					<p>These articles were also written according to a specific format, each of which is explained below: </p>
					<p><strong>Personal story time: </strong>
					This format is more reflective, giving the author an opportunity to share individual experiences or perhaps focus on personal revelations on the topic of sustainability </p>
					
				</div>

                
				</div>
			</React.Fragment>
		),
	};
}
export default article_crete;