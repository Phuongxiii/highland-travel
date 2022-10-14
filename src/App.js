/** @format */
import Banner from "./components/Banner";
import { Box } from "@chakra-ui/react";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
	return (
		<Box h='1000px' className='App'>
			<Banner />
			<Box height={8} />
			<Content />
			<Box height={8} />
			<Footer />
			<Box height={120} />
		</Box>
	);
}

export default App;
