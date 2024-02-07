import React from "react";

function article_art_collecting() {
  const image = "https://storage.googleapis.com/mia_website/Art%20Collecting.png";
	return {
		date: "7 May 2023",
    image: image,
		title: "The Art Market: Breaking Down the Basics",
		description:
			"This article delves into the fundamental aspects of the art market, exploring the personal and aesthetic significance of art collecting, the strategic curation of collections, the adaptation of the art market to digital platforms, and the financial implications and considerations involved in art investment.",
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
					<figcaption>Art Collecting Poster</figcaption>
				</figure>
                <div>
<p>
                Art collecting is for many people an obsession and it’s easy to see why. An art collection
can be intensely personal and reveal so much about a person, as Kevin Melchionne
explains in his discussion on Collecting as an Art, the careful curation of images can
illuminate the “aesthetic attitude of the collector [and] what the collector wants to show us
about [their] aesthetic perception of the world”. Collecting is not just about conspicuous
consumption but rather “creating a class ... who’s meaning resides in the way the pieces
in the collection call attention to one another”. Here Melchionne is arguing that collections
are not simply a group of static images but a series of pictures all in dialogue with one
another – telling a larger story.</p>
<p>
We see this meticulous selection and organisation most clearly in the John Soane
museum. Formerly the home of the famous Neo-classical architect, Soane’s Museum
nestled in the heart of London’s Holborn district has been preserved today exactly as
Soane left it per his explicit instruction. The collection of some 40,000 paintings, sculptures
and artifacts were all arranged to embody the aesthetic values of the Picturesque
movement, incorporating texture, perspective and light to create a dynamic space that
offers a unique sensory experience for the viewer. While not every collector is as fastidious
as Sloane, his attention to detail shows that for some collecting is just as much a creative
enterprise as any other artistic discipline.</p>
<p>
So, now that we’ve established why collecting is so important we can begin to think about
how to start a collection of our own. Before going out and buying the first thing you see it’s
important to know what kind of art you are interested in. Everyone will instinctively
gravitate towards different kinds of styles so consume as much art as you can.
Understandably, given the continued disruption caused by the global pandemic not
everyone has been able to attend international biennales and art shows but some fairs like
Art Basel have risen to the challenge and created virtual viewing rooms for prospective
buyers to appreciate works from the comfort of their own home.</p>
<p>
The next question that comes to mind for any would-be collector is just how should I be
expected to spend? The answer is it varies, art can certainly be expensive though there
are definitely ways of picking up pieces at more affordable prices.
If you’re a fresh-faced beginner auctions are always a good place to start. Traditionally,
buyers tend to visit brick and mortar venues to view pieces of interest in-person but more
recently there has been a movement towards online auctions, this transition has only been
accelerated by the pandemic. Online sales continued to rise in 2021 increasing by 178%
when compared to the same period in 2020. While the innovations of the digital age have
transformed the infrastructure of the art market by improving accessibility it remains
important to buy from reputable institutions, stick to trusted auction houses or galleries and
steer clear of online platforms like eBay.</p>
<p>
Before buying at auction be sure to comb through auction catalogues and make a note of
any pieces that catch your eye. Be wary of pictures that are listed as “attributed to [artist’s
name] or “a follower of [artist’s name]”. Most of the time these suspicions are baseless and
lack any real evidence to establish a compelling provenance so unless you’re prepared to
do the research yourself don’t be swayed by the possibility that it *could* be a work by a
recognisable artist.</p>
<p>
If you spot a painting that catches your eye take the time to research the artist. Websites
like Artnet, Invaluable, Artprice and Mutual Art are indispensable resources and their
indices track the performance of an artist from previous auctions, this will give you a much
clearer picture of how much you should realistically pay. The only issue is that access to
these online databases come at a price, generally information on an artists’ index is hidden
behind a paywall. I would recommend that if you are serious about buying art you should
invest in a subscription. A basic monthly subscription to a site like Invaluable will set you
back £30.00 a month (as of Jan 2022) and will also give you special access to exclusive
auction catalogues for upcoming auctions as well as tailored notifications. It’s also
important to factor-in auction house fees and any additional costs (e.g transportation,
import tax etc.) before deciding what you are comfortable bidding. Once you have settled
on an amount you are happy to pay, stick to it. Don’t get carried away by the adrenaline of
the auction and bid beyond your means.</p>
<p>
Galleries are among the most reliable ways of purchasing art because they either work
directly with the artist or sell works on the secondary market after authenticating works.
The role of the gallery is not to simply exhibit works but to raise the profile of its artists at
biennales and fairs. This of course comes at a premium, works bought from a reputable
gallery will often be more expensive than those sold at auction, according to ArtPrice’s
Definitive Guide to Art Collecting 101 the traditional contract between artist and gallery
provides a 50% mark-up on the artworks price to compensate the gallery for its services.
But don’t despair, it’s always worth contacting the gallery to ask whether the price is
negotiable or if they offer payment plans. Establishing a relationship with a trusted gallerist
is the best approach in the long term. Once a gallery is familiar with a clients’ taste and
sensibilities they may even recommend pieces to them in the future.</p>
<p>
So, here’s the part where I completely contradict some of the advice I’ve already given. I
have bought pieces from online sites like eBay in the past. In doing this, you are taking a
huge risk and will often spend a considerable amount of time scrolling through pages of
endless search results before finding anything of interest. But in saying that I have had
some moderate success. I once purchased a painting from an eBay seller which still had
its original auction labels attached from Sotheby’s and Bonhams. I then contacted the
auction houses to confirm the painting had in fact been sold by them at a considerably
higher price than what I had paid, they also provided additional information about the item
from their archived catalogues. This is probably one of the best indicators of quality as the
painting has already passed inspection from some of the most reputable auction houses in
the world.</p>
<p>
Additionally, if you do decide to take a chance on a painting from eBay I recommend
contacting the seller directly and asking for any additional information on how it came into
their possession, how long they’ve owned it and whether there is any paperwork to
authenticate the picture. This should give you a better idea of the painting’s history. I also
stress the importance of thoroughly checking a paintings condition before purchasing it
over the internet. Restoration is an expensive and time-consuming process that should not
be taken lightly. Sometimes, Fine Art galleries might also have an eBay store where they
sell their works that are of a lesser quality but still valuable. This way you know you’re
getting something of substance at a more affordable price. Ultimately, sites like eBay can
have their advantages. If you take the time to scroll through the listings you can find some
rare, one-off pieces.</p>
<p>
While I would certainly argue art is a worthwhile investment it should be noted that unlike
most other asset classes it is far riskier. This is why I would reiterate the importance of
buying art for its enjoyment and not monetary incentive. Art is wildly unpredictable, even
so-called ‘blue chip’ artists can suffer a sudden decline in their market value. For instance,
the YBA’s (Young British Artists) shining star Damien Hirst (b. 1965) has seemingly fallen
out of favour with some collectors in recent years. Hirst’s’ piece Lullaby Winter (2002)
belonging to a series of seasonal works initially sold in London for £9.7m ($14.3m)
surpassing its estimate £3-4m and setting a new auction record as the artist’s sculptural
works. However, the piece was later returned to market and sold by private treaty for
$4.1m in 2015 representing a sharp decline in his value. While Hirst has continued to
generate buzz in the art world, his rise and fall are a testament to the volatility of the art
market, prices regularly fluctuate and tastes change.</p>
<p>
Of course, it is possible to turn a profit on art but it’s a far less secure investment than
other assets because it “defies financial logic”. For this reason, art often confounds
investors who find it difficult to appraise works when they “disregards the traditional
benchmarks of financial analysis”. Art is a slow game and you will likely be holding onto
your piece for a long time before reaping any rewards. Attempts to ‘gain’ the art market
and turn a profit have been met with criticism from some, Gallery owner Guy Peppiatt has
argued that this kind of financial strategizing totally overlooks arts “aesthetic beauty” which
“[should] be admired in one’s private collection or in a museum” (Peppiatt, 2007).
Regardless, despite its associated risks art has become an increasingly attractive
investment opportunity for those looking to diversify their financial portfolios. Giampiero
Favato argues that the reasons for this are twofold.</p>
<p>
Firstly, art has an “absolutely limited supply” and secondly “it has the ability to survive the
economic downturn”. The first point is pretty obvious, art is a heterogenous asset and its
intrinsic value is a consequence of its limited supply. An artist’s output is carefully
controlled to prevent their own market value from depreciating. The case of Italian neo-
expressionist painter Sandro Chia best illustrates this point, at one time he had been the
favoured protégé of art mogul Charles Saatchi until Saatchi disposed of all his works at
once following a rumoured spat between the two, the sudden over saturation of Chia’s
paintings on the market irreparably damaged his reputation. This is why even official prints
from the artist’s studio are only produced in a limited number to maintain a degree of
scarcity.</p>
<p>
The second point Favato raises is perhaps less obvious. One might assume that during
periods of economic decline the art market experiences similar convulsions as people
have less disposable income to spend on luxury goods, however art has proved
surprisingly resilient. For instance, in February of 2009, shortly after the collapse of
Lehman Brothers, Yves Saint Laurent’s personal collection of art sold for a record breaking
$483.8 million. There is some speculation that this is because the art market lags around
6-18 months behind equity markets but perhaps the explanation lies in the buyer’s
demographic. In an article by Wealth Management journalist for Forbes, Ollie A Williams
noted the staggering buying power of HNI (High Net-Worth Individuals) millennials in
recent years with the average spend in the first half of 2021 reaching $242,000, this
represents an increase of 42% on the previous year. Furthermore, a 2021 report published
by UBS in association with Art Basel found that 57% of the HNI collectors had plans to
purchase more artwork in the immediate future. What does all this mean? Well essentially
a new generation of passionate art collectors has come-of-age and many of them are now
secure enough in their own finances to begin their own collections.</p>



    </div>


                
					{/* <h2>References</h2>
					<ol>

            <li><a href="https://www.elle.com/culture/movies-tv/a34526239/addams-family-costume-designer-secrets/">	"https://www.elle.com/culture/movies-tv/a34526239/addams-family-costume-designer-secrets/"</a></li>
            <li><a href="https://i-d.vice.com/en/article/597gen/stanley-kubrick-exhibition-at-the-design-museum">"https://i-d.vice.com/en/article/597gen/stanley-kubrick-exhibition-at-the-design-museum"</a></li>
            <li><a href="https://www.rickowens.eu/en/US/interviews/newyorktimes-march-2-2017">https://www.rickowens.eu/en/US/interviews/newyorktimes-march-2-2017</a></li>
            <li>Petrov, Julia & Whitehead, Gudrun D, Fashioning Horror: Dressing to Kill on Screen and in Literature (2017)</li>
          </ol> */}
				
				</div>
			</React.Fragment>
		),
	};
}
export default article_art_collecting;