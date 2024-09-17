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

	const typingFunc = (text, delay, typingSpeed) => {
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
			speed={typingSpeed}
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
		return (
			<div className='down-arrow-wrapper'>
				<div>
					{typingFuncNoCursor("scroll")}
				</div>
				<div className='down-arrow'>
					↓
				</div>
			</div>
			
		)
	}


	// page 2

	const introduction = (condition) => {
		if (condition) {
		return (
			<div>
				<div id='page2_header_name'>
					<div id='page2_header_name2'>
						{typingFuncNoCursor("My name is", 0)}	
					</div>
					{typingFunc("Eric Dong",700)}
				</div>
				<div id='page2_subheader_title'>
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
			(<div className='printing_animation' style={{opacity: "0"}}>
				<div className='selfie_container'>
				</div>
			</div>)
		)
	}


	// page 3

	const page3Header = (condition) => {
		if (condition) {
			return (
				<div>
					{typingFunc("My experience so far:", 100)}
				</div>
			)
		}
	}

	const timelineSection = (condition, date) => {
		if (condition) {
			return(
				<div className='timeline_container'>
					<div className='timeline_date'>
						{typingFuncNoCursor(date)}
					</div>
					<div className='timeline_bar'>
						<div className='timeline_dot'></div>
					</div>
				</div>
			)
		}
		return(
			<div className='timeline_container'>
				<div className='timeline_date'>
				</div>
				<div className='timeline_bar'>
					<div className='timeline_dot'></div>
				</div>
			</div>
		)
	}

	const timeline1 = (condition) => {
		if (condition) {
			return (
				<div className='timeline_entry'>
					{timelineSection(condition, "Jan - Aug")}
					<div className='page3_header2'>
						{typingFuncNoCursor("Software Engineer", 100, 75)}
						<div className='page3_subheader'>
							{typingFuncNoCursor("Lumentum", 100, 75)}
							<br></br>
							{typingFuncNoCursor("Ottawa ON, Canada", 200, 75)}
						</div>
					</div>
				</div>	
			)
		}
		return (
			<div className='timeline_entry'>
				{timelineSection(condition)}
			</div>	
		)

	}

	const timeline2 = (condition) => {
		if (condition) {
			return (
			<div className='timeline_entry'>
				{timelineSection(condition, "2024")}
				<div className='page3_header2'>
					{typingFuncNoCursor("", 100)}
					<div className='page3_subheader'>
					</div>
				</div>
			</div>
			)
		}
		return (
			<div className='timeline_entry'>
				{timelineSection(condition)}
			</div>	
		)
	}

	const timeline3 = (condition) => {
		if (condition) {
			return (
			<div className='timeline_entry'>
				{timelineSection(condition, "Sep - Dec")}
				<div className='page3_header2'>
					{typingFuncNoCursor("Drive Systems Developer", 100, 75)}
					<div className='page3_subheader'>
							{typingFuncNoCursor("Space Exploration Alberta Robotics", 100, 75)}
							<br></br>
							{typingFuncNoCursor("Edmonton AB, Canada", 200, 75)}
					</div>
				</div>
			</div>
			)
		}
		return (
			<div className='timeline_entry'>
				{timelineSection(condition)}
			</div>	
		)
	}

	const timeline4 = (condition) => {
		if (condition) {
			return (
			<div className='timeline_entry'>
				{timelineSection(condition, "2023")}
				<div className='page3_header2'>
					<div className='page3_subheader'>
					</div>
				</div>
			</div>
			)
		}
		return (
			<div className='timeline_entry'>
				{timelineSection(condition)}
			</div>	
		)
	}

	const timelineCurrent = (condition) => {
		if (condition) {
			return (
			<div className='timeline_entry'>
				{timelineSection(condition, "Now")}
				<div className='page3_header2'>
					{typingFuncNoCursor("4th Year Software Engineering", 100, 75)}
					<div className='page3_subheader'>
							{typingFuncNoCursor("University of Alberta", 100, 75)}
							<br></br>
							{typingFuncNoCursor("Edmonton AB, Canada", 200, 75)}
					</div>
				</div>
			</div>
			)
		}
		return (
			<div className='timeline_entry'>
				{timelineSection(condition)}
			</div>	
		)
	}

	const timelineFinal = () => {
		return (
			<div className='timeline_container'>
				<div className='timeline_date'>
				</div>
				<div className='timeline_bar' style={{minHeight: "100px"}}>
					<div className='timeline_stopper'>
					</div>
				</div>
			</div>	
		)
	}

	// page 4

	const page4Header = (condition) => {
		if (condition) {
			return (
			<div>
				{typingFunc("Contact info:", 10)}
			</div>
			)
		}
	}

	const contacts = (condition) => {
		if (condition) {
			return (
				<div>
					<div className='contacts_sec1'>
						{typingFuncNoCursor("eric@donger.ca", 100)}  
					</div>
					<div className='contacts_sec2'>
						<a className='link' href='https://www.linkedin.com/in/etdong/' target='_blank' rel='noreferrer'>
							<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
							</svg>
						</a>
						<a className='link' href='https://github.com/etdong' target='_blank' rel='noreferrer'>
							<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
							<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
							</svg>
						</a>
					</div>
				</div>
			)
		}
	}

	// observer refs
	const { ref: introductionRef, inView: page2InView } = useInView({triggerOnce: true})
	const { ref: selfieRef, inView: selfieInView } = useInView()

	const { ref: page3headerRef, inView: page3headerInView } = useInView({triggerOnce: true})
	const { ref: timelineCurrentRef, inView: timelineCurrentInView } = useInView({triggerOnce: true})
	const { ref: timeline1Ref, inView: timeline1InView } = useInView({triggerOnce: true})
	const { ref: timeline2Ref, inView: timeline2InView } = useInView({triggerOnce: true})
	const { ref: timeline3Ref, inView: timeline3InView } = useInView({triggerOnce: true})
	const { ref: timeline4Ref, inView: timeline4InView } = useInView({triggerOnce: true})

	const { ref: page4headerRef, inView: page4headerInView } = useInView({triggerOnce: true})
	const { ref: contactsRef, inView: contactsInView } = useInView({triggerOnce: true})

	// app
	return (
		<div className='App'>

			<div className="page" id='page1'>
				<div id='greeting'>
					{typingFunc("Hello, nice to meet you.", 2000, 60)}
				</div>
				<div>
					{DelayedComponent(downarrow(), 4000)}
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
					{page3Header(page3headerInView)}
				</div>

				<div>
					<div ref={timelineCurrentRef} className='page3_section'>
						{timelineCurrent(timelineCurrentInView)}
					</div>

					<div ref={timeline1Ref} className='page3_section'>
						{timeline1(timeline1InView)}
					</div>
					
					<div ref={timeline2Ref} className='page3_section'>
						{timeline2(timeline2InView)}
					</div>

					<div ref={timeline3Ref} className='page3_section'>
						{timeline3(timeline3InView)}
					</div>

					<div ref={timeline4Ref} className='page3_section'>
						{timeline4(timeline4InView)}
					</div>

					<div>
						{timelineFinal()}
					</div>
				</div>

				<div>
				</div>	
			</div>

			<div className='page divider'>
				<div className="custom-shape-divider-top-1726513486">
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="shape-fill"></path>
					</svg>
				</div>
			</div>

			<div className='page divider'>
				<div className="custom-shape-divider-top-1726513587">
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="shape-fill"></path>
					</svg>
				</div>
			</div>

			

			<div id='page4' className='page'>
				<div ref={page4headerRef} className='page4_header'>
					{page4Header(page4headerInView)}
				</div>

				<div ref={contactsRef} className='contacts'>
					{contacts(contactsInView)}
				</div>

				<div className='version'>
					v1.32 9.16.24
				</div>
			</div>
		</div>
		
	);
}

export default App;
