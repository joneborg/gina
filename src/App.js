import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Helmet from 'react-helmet'
import 'typeface-roboto'
import 'typeface-playfair-display'
import arrow from './pics/curve-arrow.png'
import isak from './pics/isak-apples.jpg'
import gina from './pics/gina-bagle.png'
import 'animate.css'

const GlobalStyle = createGlobalStyle`
	.animate__heartBeat {
    animation-delay: 2s;
	}
  .animate__bounceInLeft{
    animation-duration: 2s;
  }

  .animate__pulse {
    animation-delay: 2s;
  }
  .animate__slideInUp {
    animation-duration: 2s;
  }
`

const QuestionBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 0px;
	margin-bottom: 54px;
`

const Name = styled.h1`
	font-size: 72px;
	font-weight: 900;
	font-family: 'Playfair Display', serif;
	margin-bottom: 0;
	font-style: italic;
`

const Question = styled.h2`
	font-size: 20px;
	font-family: 'Roboto', sans-serif;
	font-weight: 300;
`

const Alternative = styled.div`
	display: flex;
`

const AlternativeBox = styled.div`
	display: flex;
	margin-top: 80px;
`

const AlternativeText = styled.p`
	background-color: #2ed573;
	font-size: 20px;
	margin: 0 20px;
	padding: 16px 0;
	width: 120px;
	color: white;
	border-radius: 50px;
	cursor: pointer;
	text-align: center;
	font-weight: 700;
	font-family: 'Roboto', sans-serif;
	box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.33);
`

const AlternativeText2 = styled.p`
	background-color: #ff6b81;
	font-size: 20px;
	margin: 0 20px;
	padding: 16px 0;
	width: 120px;
	color: white;
	border-radius: 50px;
	cursor: pointer;
	text-align: center;
	font-weight: 700;
	font-family: 'Roboto', sans-serif;
	box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.33);
`

const Arrow = styled.img`
	position: absolute;
	width: 100px;
	top: 186px;
`

const Isak = styled.img`
	width: 374px;
	margin: 0;
	padding: 0;
`

const Gina = styled.img`
	position: absolute;
	width: 130px;
	top: 496px;
	left: 100px;
	display: none;
`

const SadEmoji = styled.span`
	font-size: 100px;
	margin-top: 150px;
	margin-bottom: 100px;
`

const GoBack = styled.p`
	background-color: #70a1ff;
	font-size: 20px;
	margin: 0 20px;
	padding: 16px 0;
	width: 180px;
	color: white;
	border-radius: 50px;
	cursor: pointer;
	text-align: center;
	font-weight: 700;
	font-family: 'Roboto', sans-serif;
	box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.33);
`

const Heart = styled.span`
	font-size: 64px;
	display: block;
`

const HeartBox = styled.div`
	position: absolute;
	left: 175px;
	top: 550px;
	@keyframes showNav {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`

function App() {
	const [yesBtnClicked, setYesBtnClicked] = useState(false)
	const [noBtnClicked, setNoBtnClicked] = useState(false)

	const reset = () => {
		setYesBtnClicked(false)
		setNoBtnClicked(false)
	}

	return (
		<div className='App'>
			<Helmet>
				<title>Question for Gina 💞</title>
				<link
					rel='icon'
					href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💞</text></svg>'
				/>
			</Helmet>
			<GlobalStyle />
			<div>
				{noBtnClicked ? (
					<>
						<QuestionBox>
							<SadEmoji>😭</SadEmoji>
							<GoBack onClick={() => reset()}>go back ⬅️</GoBack>
						</QuestionBox>
					</>
				) : (
					<>
						<QuestionBox>
							<Name>GINA</Name>
							<Question>will u be my gf?</Question>
							<Arrow src={arrow} />
							<AlternativeBox>
								<Alternative
									onClick={() => setYesBtnClicked(true)}
									className='animate__animated animate__heartBeat'
								>
									<AlternativeText>yes 💗</AlternativeText>
								</Alternative>
								<Alternative
									onClick={() => {
										setNoBtnClicked(true)
									}}
								>
									<AlternativeText2>no 😔</AlternativeText2>
								</Alternative>
							</AlternativeBox>
						</QuestionBox>
						<Isak src={isak} />
						<Gina
							src={gina}
							className={
								yesBtnClicked
									? 'animate__animated animate__bounceInLeft'
									: ''
							}
							style={yesBtnClicked ? { display: 'block' } : {}}
						/>
						{yesBtnClicked ? (
							<HeartBox className='animate_animated animate__slideInUp'>
								<Heart className='animate__animated animate__pulse animate__infinite'>
									❤️
								</Heart>
							</HeartBox>
						) : (
							''
						)}
					</>
				)}
			</div>
		</div>
	)
}

export default App
