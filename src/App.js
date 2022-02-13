import styled from 'styled-components'
import 'typeface-roboto'
import 'typeface-playfair-display'
import arrow from './pics/curve-arrow.png'
import isak from './pics/isak-apples.jpg'
import gina from './pics/gina-bagle.png'

const QuestionBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 54px;
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

//const AlternativeButton = styled.span``

/*const Dots = styled.div`
	display: flex;
	flex-direction: column;
`

const Dot = styled.span`
	font-family: 'Roboto', sans-serif;
	font-size: 48px;
	content: '.';
	margin: 0;
	padding: 0;
	height: 30px;
`*/

const Arrow = styled.img`
	position: absolute;
	width: 100px;
	top: 230px;
`

const Isak = styled.img`
	width: 374px;
	margin: 0;
	padding: 0;
`

const Gina = styled.img`
	position: absolute;
	width: 130px;
	top: 540px;
	left: 100px;
`

function App() {
	return (
		<div className='App'>
			<div>
				<QuestionBox>
					<Name>GINA</Name>
					<Question>will u be my gf?</Question>
					<Arrow src={arrow} />
					<AlternativeBox>
						<Alternative>
							<AlternativeText>yes 💗</AlternativeText>
						</Alternative>
						<Alternative>
							<AlternativeText2>no 😔</AlternativeText2>
						</Alternative>
					</AlternativeBox>
				</QuestionBox>
				<Isak src={isak} />
				<Gina src={gina} />
			</div>
		</div>
	)
}

export default App
