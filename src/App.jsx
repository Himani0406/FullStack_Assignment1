class App extends React.Component {
		// Click Event.
		render() {
			return(
			<div>
				<div>
					<h1 id="name">Himani Singh</h1>
				</div>
				<div>
					<img id="image" src='./images/image.jpg' />
				</div>
				<div>
					<p id="intro">Himani Singh is a graduate student at San Diego State University. She is pursuing her Master's in Computer Science.
					She has completed her under-graduate from India with a GPA of 3.32. She has gained a work experience of 4 years before starting her Master's program.
					She worked with Cognizant for 2.5 years and Genesys for 1.5 years. She is a determined student with a sense of responsibility 
					with every task she completes. After completing semester 1, her GPA stands at 3.46 which includes subjects - Machine Learning, 
					Applied Computer Vision and Advanced Object Oriented Programming.</p>
				</div>
				<div id="btnWrapper">
					<button onClick={btnClick} type="button">View My Github Repo</button>
				</div>
			</div>
		)
	}
}
function btnClick() {
	window.open("https://github.com/himani0406/");
}
ReactDOM.render(<App/>, document.getElementById('contents'));