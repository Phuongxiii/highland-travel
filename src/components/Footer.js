/** @format */

import React from "react";
import { Box, Center, Divider, HStack, Text, VStack } from "@chakra-ui/react";

export default function Footer() {
	return (
		<Center w='full'>
			<VStack w='container.lg'>
				<Text>Văn Phòng chính: 79 Giải Phóng, Hai Bà Trưng</Text>
				<HStack>
					<VStack w='180px'>
						<Text>Tư Vấn Tour</Text>
						<Box h='20px' />
						<Text>SDT: 0987 187 781</Text>
					</VStack>
					<Box w='40px' />
					<Divider height='120px' orientation='vertical' />
					<Box w='60px' />
					<VStack w='180px'>
						<Center>
							<Text>Tư vấn hợp tác cung cấp phòng, dịch vụ</Text>
						</Center>
						<Text>SDT: 0987 187 781</Text>
					</VStack>
				</HStack>
			</VStack>
		</Center>
	);
}
