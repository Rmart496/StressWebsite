import React from 'react';
import SkeletonForAllPages from "../GeneralComponents/SkeletonForAllPages";
import "../../Styling/bootstrap.css"
import "./AmbientPlayerPageStyling/AmbientPlayerPageStyling.scss";

const AmbientPlayerPage = () => {
	
	return (
		<SkeletonForAllPages>
		
		<section className="musicSection">
		<h1>Ambient Music</h1>
		<p>One of the powers of ambient music is its ability to induce a meditative and calming state in listeners. 
			The slow, repetitive nature of the music can help to slow down the mind and reduce stress and anxiety. 
			The absence of lyrics also allows the listener to focus on the sounds themselves and to interpret them in their own way, which can be a meditative experience.</p>

		<p>
			Another power of ambient music is its ability to evoke emotions and memories in a subtle way. 
			The soundscapes and textures of ambient music can create a sense of place or time, and can trigger memories or emotions that are often difficult to access through other means.
		</p>

		<p>
			Ambient music is also able to transcend beyond what is considered ordinary music because it is not bound by traditional musical structures or expectations. 
			It is not designed to be catchy or upbeat, but rather to create a unique listening experience that is focused on the emotions and atmosphere created by the music itself. 
			In this way, ambient music can be seen as a form of sonic art, allowing the listener to enter into a different state of mind and to experience sound in a new way.
		</p>
			<div className="card-grid">
				<div className="card" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: 'cover'}}>
					<h3 className="card_heading">
						Coffee Shop
					</h3>
					<audio controls src="./audio/coffeeShop.mp3"></audio>
				</div>
				<div className="card" style={{backgroundImage: "url('https://images.unsplash.com/photo-1539706173505-888cd1746ac7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: 'cover'}}>
					<h3 className="card_heading">
						Warm Campfire
					</h3>
					<audio controls src="./audio/campFire.wav"></audio>
				</div>
				<div className="card" style={{backgroundImage: "url('https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: 'cover'}}>
					<h3 className="card_heading">
						Ocean Waves
					</h3>
					<audio controls src="./audio/seasideWaves.wav"></audio>
				</div>
				<div className="card" style={{backgroundImage: "url('https://images.unsplash.com/photo-1621483092616-780665772d83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: 'cover'}}>
					<h3 className="card_heading">
						Thunder Storm
					</h3>
					<audio controls src="./audio/thunderStorm.mp3"></audio>
				</div>
				<div className="card" style={{backgroundImage: "url('https://images.unsplash.com/photo-1604213410393-89f141bb96b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: 'cover'}}>
					<h3 className="card_heading">
						Deep Jungle
					</h3>
					<audio controls src="./audio/deepJungle.mp3"></audio>
				</div>
				<div className="card" style={{backgroundImage: "url('https://images.unsplash.com/photo-1608676411474-e1d95fcc470c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: 'cover'}}>
				<h3 className="card_heading">
						Flowing Waterfall
				</h3>
				<audio controls src="./audio/flowingWaterfall.mp3"></audio>
				</div>

			</div>
		</section>
		
		</SkeletonForAllPages>
	);
	
}

export default AmbientPlayerPage;