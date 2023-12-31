import styled from 'styled-components';

const MainWrap = styled.main`
	width: calc(100% - 350px);
	min-height: 100vh;
	float: right;

	> .inner {
		width: 100%;
		padding: 60px;

		h1 {
			font: normal 40px/1 'arial';
			color: #333;
			margin-bottom: 30px;
		}

		section {
			label {
				display: block;
				font: 16px/1 'arial';
				color: #555;
				margin-bottom: 5px;
			}
			input[type='text'],
			input[type='email'],
			input[type='password'],
			textarea {
				width: 50%;
				padding: 5px 8px;
				border: 1px solid #999;
				margin-bottom: 20px;
				resize: none;
				display: block;
			}
			button {
				display: inline-block;
				padding: 5px 20px;
				background: #555;
				color: #fff;
				border: none;
				cursor: pointer;
			}
		}
	}
`;

function Layout({ children, name }) {
	return (
		<MainWrap className={`content ${name}`}>
			<div className='inner'>
				<h1>{name}</h1>

				<section>{children}</section>
			</div>
		</MainWrap>
	);
}

export default Layout;
