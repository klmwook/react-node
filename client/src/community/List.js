import Layout from '../common/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function List() {
	const [Posts, setPosts] = useState([]);

	useEffect(() => {
		axios.post('/api/read').then((res) => {
			console.log(res);
			setPosts(res.data.communityList);
		});
	}, []);
	return (
		<Layout name={'List'}>
			{Posts.map((post) => {
				return (
					<article key={post._id}>
						<Link to={`/detail/${post.communityNum}`}>{post.title}</Link>
					</article>
				);
			})}
		</Layout>
	);
}

export default List;
