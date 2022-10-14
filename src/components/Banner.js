/** @format */

import { Box, Center, Heading } from "@chakra-ui/react";
import Search from "./Search";

const Banner = () => {
	return (
		<Box>
			<Center
				h='70vh'
				position='relative'
				w='full'
				backgroundPosition='bottom'
				backgroundImage='./Banner.jpg'
				backgroundSize='cover'>
				<Heading
					position='absolute'
					fontSize='8xl'
					as='h1'
					fontStyle={64}
					color='#FFECEF'>
					Highland Travel
					<Box h='40vh'></Box>
				</Heading>
				<Search />
			</Center>
		</Box>
	);
};

export default Banner;
