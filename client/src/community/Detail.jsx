import Layout from '../common/Layout';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const DetailWrap = styled.div`
	width: 100%;
	padding: 40px;
	background: #fff;
	box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.02);
`;

const BtnSet = styled.nav`
	display: flex;
	gap: 20px;
	margin-top: 20px;

	a {
		color: #fff;
	}
`;

function Detail() {
	const navigate = useNavigate();
	const params = useParams();
	const [Detail, setDetail] = useState(null);

	const handleDelete = () => {
		if (!window.confirm('정말 삭제하시겠습니까?')) return;

		axios.post('/api/community/delete', params).then((res) => {
			if (res.data.success) {
				alert('게시글이 삭제 되었습니다.');
				navigate('/list');
			} else {
				alert('게시글 삭제에 실패했습니다.');
			}
		});
	};

	useEffect(() => {
		axios
			.post('/api/community/detail', params)
			.then((res) => {
				if (res.data.success) {
					setDetail(res.data.detail);
				} else {
					alert('상세 글 호출에 실패했습니다.');
				}
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<Layout name={'Detail'}>
			<DetailWrap>
				<h2>{Detail?.title}</h2>
				<p>{Detail?.content}</p>
			</DetailWrap>

			<BtnSet>
				<button>
					<Link to={`/edit/${params.id}`}>Edit</Link>
				</button>
				<button onClick={handleDelete}>Delete</button>
			</BtnSet>
		</Layout>
	);
}

export default Detail;
