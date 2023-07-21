import axios from 'axios';
import Layout from '../common/Layout';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail() {
	const params = useParams();
	const [Detail, setDetail] = useState('');

	useEffect(() => {
		axios
			.post('/api/detail', params)
			.then((res) => {
				if (res.data.success) {
					setDetail(res.data.detail);
				} else {
					alert('상세 글 호출에 실패 하였습니다.');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<Layout name={'Detail'}>
			<h2>{Detail?.title}</h2>
			<p>{Detail?.content}</p>
		</Layout>
	);
}

export default Detail;
