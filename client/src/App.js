import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.png';
import Post from './components/Posts/Post/Post.js'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form.js'

const App =()=> {

return(
	<Container maxidth="lg">
		<AppBar position="static" color="inherit">
			<Typography variant='h2' align="center">Memories</Typography>
			<img src={memories} alt="memories" height="60"/>
		</AppBar>
		<Grow>
			<Container>
				<Grid container justify="space-between" alignItems="strech">
					<Grid item xs={12} sm={7}>
						<Post/>
						
					</Grid>
					<Grid item xs={12} sm={4}>
						<Form/>
						
					</Grid>
				</Grid>




			</Container>


		</Grow>

	</Container>
)


}


export default App;