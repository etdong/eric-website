import './App.css';
import { TypeAnimation } from 'react-type-animation';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function App() {

	// helper functions

	function DelayedComponent(component, delay) { 
		const [rendered, setRendered] = useState(false); 
	
		useEffect(() => { 
			const timer = setTimeout(() => { 
				setRendered(true); 
			}, delay); 
		
			return () => clearTimeout(timer); 
		}, [delay]); 
	
		return ( 
			<div> 
				{rendered && component} 
			</div> 
		); 
	} 

	const typingFunc = (text, delay) => {
		return (
			<TypeAnimation
			sequence={[
			' ',
			delay,
			text
			]}
			wrapper="div"
			cursor={true}
			style={{ display: 'inline-block' }}
			/>
		)
	}

	const typingFuncNoCursor = (text, delay, typingSpeed) => {
		return (
		<TypeAnimation
			sequence={[
			' ',
			delay,
			text
			]}
			wrapper="div"
			cursor={false}
			style={{ display: 'inline-block' }}
			speed={typingSpeed}
			/>
		)
	}

	// custom objects

	// page 1
	const downarrow = () => {
		return (<div href="#page2" className='down-arrow'></div>)
	}

	// page 2

	const introduction = (condition) => {
		if (condition) {
		return (
			<div>
				<div id='page2_header_name'>
					{typingFuncNoCursor("My name is Eric Dong", 0)}
				</div>
				<div id='page2_subheader'>
					{typingFuncNoCursor("Undergraduate Software Engineer", 1000)}
				</div>
				<div id='page2_subheader'>
					{typingFuncNoCursor("University of Alberta", 1100)}
				</div>
			<br></br>
				<div id='page2_info'>
					{introInfo(condition)}
				</div>
			</div>
			)
		}
		return (
			<div>
				<div id='page2_header_name'>
				</div>
				<div id='page2_subheader'>
				</div>
				<div id='page2_subheader'>
				</div>
				<br></br>
				<div id='page2_info'>
				</div>
			</div>
		)
	}

	const introInfo = (condition) =>{
		var s1 = "I am an aspiring software engineer with a passion for artificial intelligence. Strong track record of realistic and effective goalsetting, synergistic teamwork, and adaptability."
		var s2 = "I'm hoping to leverage my education and motivation to aid in the progress of the rising A.I. industry as well as the success of a high-performing organization. Always striving to learn and improve myself to drive team success."
		if (condition) {
		return (
			<div id='page2_info'>
				<div id='page2_infobody'>
					{typingFuncNoCursor(s1, 1100, 90)}
				</div>
					<br></br>
					<br></br>
				<div id='page2_infobody'>
					{typingFuncNoCursor(s2, 1300, 90)}
				</div>
			</div>
			)
		}
		return(
			<div>
				<div id='page2_infobody'>
				</div>
					<br></br>
					<br></br>
				<div id='page2_infobody'>
				</div>
			</div>
		)
	}

	const selfie = (condition) => {
		return (condition ? 
			(<div className='printing_animation' style={{animationName:"printing"}}>
				<div className='selfie_container'>
					<img id='headshot' alt='' src='https://i.imgur.com/3WpJtbm.jpeg'></img>
				</div>
			</div>) : 
			(<div className='printing_animation'>
				<div className='selfie_container'>
					<img alt='' src='https://i.imgur.com/3WpJtbm.jpeg'></img>
				</div>      
			</div>)
		)
	}

	const aboutMe_header = (condition) => {
		if (condition) {
			return (
				<div>
					{typingFunc("My experience:", 100)}
				</div>
			)
		}
	}

	const experience1 = (condition) => {
		if (condition) {
			return (
				<div>
					<div className='page3_header2'>
						{typingFuncNoCursor("Software Engineer", 100)}
					</div>
					<div className='page3_subheader'>
						Lumentum
					</div>
					<div className='page3_body'>
						{typingFuncNoCursor("description", 500, 90)}
					</div>
				</div>
			)
		}
	}

	const experience2 = (condition) => {
		if (condition) {
			return (
				<div>
					<div className='page3_header2'>
						{typingFuncNoCursor("Software Developer", 100)}
					</div>
					<div className='page3_body'>
						{typingFuncNoCursor("description", 500, 90)}
					</div>
				</div>
			)
		}
	}

	const skills = (condition) => {
		if (condition) {
			return (
			<div>
				<div className='page3_header2'>
					{typingFuncNoCursor("Relevant Skills", 100)}
				</div>
				<div className='page3_body'>
					{typingFuncNoCursor("description", 500, 90)}
				</div>
			</div>
			)
		}
	}
	// observer refs
	const { ref: introductionRef, inView: page2InView } = useInView({triggerOnce: true})
	const { ref: selfieRef, inView: selfieInView } = useInView()
	const { ref: experience1Ref, inView: experience1InView } = useInView({triggerOnce: true})
	const { ref: page3headerRef, inView: page3headerInView } = useInView({triggerOnce: true})
	const { ref: experience2Ref, inView: experience2InView } = useInView({triggerOnce: true})
	const { ref: skillsRef, inView: skillsInView } = useInView({triggerOnce: true})

	// app
	return (
		<div className='App'>

			<div className="page" id='page1'>
				<div id='greeting'>
					{typingFunc("Hello, nice to meet you.", 2000)}
				</div>
				
				<div className='down-arrow-wrapper'>
					{DelayedComponent(downarrow(), 5000)}
				</div>
			</div>

			<div className='page divider'>
				<div className="custom-shape-divider-bottom-1725843514">
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
					</svg>
				</div>
				<div className="custom-shape-divider-top-1725843655">
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
					</svg>
				</div>
			</div>

			

			<div id="page2" className='page'>
				

				<div ref={introductionRef} className='intro_container'>
					{introduction(page2InView)}
				</div>
				
				<div className='printing_container'>
						<div id='printer_top'></div>
						<div id='printer_top_slot'></div>
						<div id='printer_bottom_slot'></div>
						<div id='printer_bottom'></div>
					<div ref={selfieRef} className='polaroid_container'>
						{selfie(selfieInView)}
					</div>
				</div>
			</div>

			<div className='page divider'>
				<div className="custom-shape-divider-bottom-1725844347">
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
					</svg>
				</div>

				<div className="custom-shape-divider-top-1725844454">
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
					</svg>
				</div>
			</div>

			<div id="page3" className='page'>
				<div ref={page3headerRef} id='page3_header'>
					{aboutMe_header(page3headerInView)}
				</div>

				<div ref={experience1Ref} className='page3_section'>
					{experience1(experience1InView)}
				</div>

				
				<div ref={experience2Ref} className='page3_section'>
					{experience2(experience2InView)}
				</div>


				<div ref={skillsRef} className='page3_section'>
					{skills(skillsInView)}
				</div>
			</div>

		</div>
		
	);
}

export default App;
