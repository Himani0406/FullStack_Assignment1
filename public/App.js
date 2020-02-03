"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: "render",

		// Click Event.
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					null,
					React.createElement(
						"h1",
						{ id: "name" },
						"Himani Singh"
					)
				),
				React.createElement(
					"div",
					null,
					React.createElement("img", { id: "image", src: "./images/image.jpg" })
				),
				React.createElement(
					"div",
					null,
					React.createElement(
						"p",
						{ id: "intro" },
						"Himani Singh is a graduate student at San Diego State University. She is pursuing her Master's in Computer Science. She has completed her under-graduate from India with a GPA of 3.32. She has gained a work experience of 4 years before starting her Master's program. She worked with Cognizant for 2.5 years and Genesys for 1.5 years. She is a determined student with a sense of responsibility with every task she completes. After completing semester 1, her GPA stands at 3.46 which includes subjects - Machine Learning, Applied Computer Vision and Advanced Object Oriented Programming."
					)
				),
				React.createElement(
					"div",
					{ id: "btnWrapper" },
					React.createElement(
						"button",
						{ onClick: btnClick, type: "button" },
						"View My Github Repo"
					)
				)
			);
		}
	}]);

	return App;
}(React.Component);

function btnClick() {
	window.open("https://github.com/himani0406/");
}
ReactDOM.render(React.createElement(App, null), document.getElementById('contents'));