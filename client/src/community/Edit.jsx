import React, { useEffect, useState } from 'react';
import Layout from '../common/Layout';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Edit() {
	const params = useParams();
	const [Title, setTitle] = useState('');
	const [Content, setContent] = useState('');

	useEffect(() => {
		axios.post('/api/community/detail', params).then((res) => {
			if (res.data.success) {
				console.log(res.data.detail);
			}
		});
	});

	return (
		<Layout name={'Post'}>
			<label htmlFor='tit'>title</label>
			<input type='text' id='tit' value={Title} onChange={(e) => setTitle(e.target.value)} /> <br />
			<label htmlFor='con'>Content</label>
			<textarea name='con' cols='30' rows='3' value='{Content}' onChange={(e) => setContent(e.target.value)}></textarea> <br />
			<button>UPDATE</button>
		</Layout>
	);
}

export default Edit;
