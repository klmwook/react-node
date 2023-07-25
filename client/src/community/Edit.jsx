import React, { useEffect, useState } from 'react';
import Layout from '../common/Layout';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Edit() {
	const navigate = useNavigate();
	const params = useParams();
	const [Title, setTitle] = useState('');
	const [Content, setContent] = useState('');
	const [Detail, setDetail] = useState({});

	const handleUpdate = () => {
		if (Title.trim() === '' || Content.trim() === '') return alert('모든 항목을 입력하세요.');

		const item = {
			title: Title,
			content: Content,
			id: params.id,
		};

		axios.post('/api/community/edit', item).then((res) => {
			if (res.data.success === true) {
				alert('글 수정이 완료 되었습니다.');
				navigate(-1);
			} else {
				alert('글 수정이 실패 되었습니다.');
			}
		});
	};

	useEffect(() => {
		axios.post('/api/community/detail', params).then((res) => {
			if (res.data.success) {
				setDetail(res.data.detail);
			}
		});
	}, []);

	useEffect(() => {
		//서버쪽으로 새로운 응답이 넘어오자마자
		console.log(Detail);
		setTitle(Detail.title);
		setContent(Detail.content);
	}, [Detail]);

	return (
		<Layout name={'Post'}>
			<label htmlFor='tit'>title</label>
			<input type='text' id='tit' value={Title || ''} onChange={(e) => setTitle(e.target.value)} /> <br />
			<label htmlFor='con'>Content</label>
			<textarea name='con' cols='30' rows='3' value={Content} onChange={(e) => setContent(e.target.value)}></textarea> <br />
			<button onClick={handleUpdate}>UPDATE</button>
		</Layout>
	);
}

export default Edit;
