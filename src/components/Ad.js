/** @format */

import { Box, Center, HStack, Image, VStack } from "@chakra-ui/react";
import React from "react";

export default function Ad() {
	return (
		<Center m={28}>
			<HStack>
				<Image src='./Screenshot 2022-10-30 150907.png' w='420px' />
				<Box position='relative'>
					<Image src='./Screenshot 2022-10-30 151158.png' w='740px' />
					<VStack zIndex={6} position='absolute'>
						<HStack>
							<Box w='50%' cursor='pointer'></Box>
							<Box w='50%' cursor='pointer'></Box>
						</HStack>
						<HStack>
							<Box w='50%' cursor='pointer'></Box>
							<Box w='50%' cursor='pointer'></Box>
						</HStack>
					</VStack>
				</Box>
			</HStack>
		</Center>
	);
}
