/** @format */
import Banner from "./components/Banner";
import { Box } from "@chakra-ui/react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Ad from "./components/Ad";

function App() {
	return (
		<Box className='App' background='white'>
			<Banner />
			<Box height={8} />
			<Content />
			<Box height={8} />
			<Ad />
			<Box height={8} />
			<Footer />
		</Box>
	);
}

export default App;
