/** @format */

import { Box, Center, Heading, HStack, Image, Text } from "@chakra-ui/react";
import FindComponent from "./FindComponent";

const Banner = () => {
	return (
		<Box>
			<Center
				h='70vh'
				position='relative'
				w='full'
				backgroundPosition='bottom'
				backgroundImage='./Banner1.jpg'
				backgroundSize='cover'>
				<Heading
					position='absolute'
					fontSize='8xl'
					as='h1'
					fontStyle={64}
					color='#FFECEF'>
					<HStack>
						<Image
							w={48}
							borderRadius='3xl'
							src='./313347539_794196045253520_5041460814508530242_n.jpg'
						/>
						<Text> Highland Travel</Text>
					</HStack>
					<Box h='40vh'></Box>
				</Heading>
				{/* <Search /> */}
				<FindComponent />
			</Center>
		</Box>
	);
};

export default Banner;
