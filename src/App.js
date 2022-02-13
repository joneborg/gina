import styled from 'styled-components'
import 'typeface-roboto'
import 'typeface-playfair-display'

const QuestionBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 54px;
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
	margin-top: 54px;
`

const AlternativeText = styled.p`
	background-color: #7bed9f;
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
`

//const AlternativeButton = styled.span``

const Dots = styled.div`
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
`

function App() {
	return (
		<div className='App'>
			<div>
				<QuestionBox>
					<Name>GINA</Name>
					<Question>will u be my gf?</Question>
					<Dots>
						<Dot>.</Dot>
						<Dot>.</Dot>
						<Dot>.</Dot>
					</Dots>
					<AlternativeBox>
						<Alternative>
							<AlternativeText>yes 💗</AlternativeText>
						</Alternative>
						<Alternative>
							<AlternativeText2>no 😔</AlternativeText2>
						</Alternative>
					</AlternativeBox>
				</QuestionBox>
			</div>
		</div>
	)
}

export default App
