import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
		<NavBar 
				title='Start Bootstrap' 
				navItem1='Home' 
				navItem2="About" 
				navItem3="Services" 
				navItem4="Contact"
		/>
		<Jumbotron 
				title='A Warm Welcome!' 
				text1='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)'
				textButton='Call to action!'  
		/>
		<div className="container d-flex flex-column flex-lg-row justify-content-between align-items-center">
			<Card
				cardTitle="Card title 1"
				textCard="Some quick example text to build on the card title and make up the bulk of the card's content."
				anchorText="Go somewhere"
			/>
			<Card
				cardTitle="Card title 2"
				textCard="Some quick example text to build on the card title and make up the bulk of the card's content."
				anchorText="Go somewhere"
			/>
			<Card
				cardTitle="Card title 3"
				textCard="Some quick example text to build on the card title and make up the bulk of the card's content."
				anchorText="Go somewhere"
			/>
			<Card
				cardTitle="Card title 4"
				textCard="Some quick example text to build on the card title and make up the bulk of the card's content."
				anchorText="Go somewhere"
			/>
		</div>
	
				<Footer/>
			
		</>
	);
};

export default Home;
