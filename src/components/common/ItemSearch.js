/** @format */

import { Box, Center, HStack, Input, Text } from "@chakra-ui/react";
import React from "react";

export default function ItemSearch({ text, icon, children }) {
	return (
		<Box m={3} border='4px' borderRadius='2xl' borderColor='yellow.400'>
			<Box p={1}>
				<Text
					textAlign='center'
					opacity='0.7'
					fontSize='12px'
					color='black'>
					{text}
				</Text>
				<HStack>
					{icon}
					{children}
				</HStack>
			</Box>
		</Box>
	);
}
