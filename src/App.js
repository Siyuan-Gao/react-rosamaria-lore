import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';

// LOCALS
import Home from './pages';
import About from './pages/about-me';
import Blog from './pages/blog';
import Projects from './pages/projects';
import Contanct from './pages/contact';
import DetailPost from './pages/posts/slug';

export const theme = {
	colors: {
		main_color: 'var(--main-color)',
		link_color: 'var(--link-color)',
		active_color: 'var(--active-link-color)',
		link_hover_color: 'var(--active-link-color)',
		font_color: 'var(--font-color)',
		black_color: 'var(--black-color)',
		white_color: 'var(--white-color)',
		date_color: 'var(--date-color)',
		// ${props => props.theme.colors.black_color};
	},
	mediaQ: {
		Lg: `only screen and (min-width: 942px) and (max-width: 1170px)`,
		Md: `only screen and (min-width: 768px) and (max-width: 960px)`,
		Xs: `only screen and (max-width: 767px)`,
		Sm: `only screen and (min-width: 480px) and (max-width: 768px)`,
	},
};
function App() {
	return (
		<ThemeProvider theme={theme}>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/about-me">
					<About />
				</Route>
				<Route exact path="/posts">
					<Blog />
				</Route>
				<Route exact path="/posts/page/:count">
					<Blog />
				</Route>
				<Route path="/posts/:slug">
					<DetailPost />
				</Route>
				<Route exact path="/projects">
					<Projects />
				</Route>
				<Route exact path="/contact">
					<Contanct />
				</Route>
				<Route>
					<p>Error...</p>
				</Route>
			</Switch>
		</ThemeProvider>
	);
}

export default App;
