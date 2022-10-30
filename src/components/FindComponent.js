/** @format */

import { Box, Button, Center, HStack, Input, Text } from "@chakra-ui/react";
import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowLeftRight, BsFillCalendarFill } from "react-icons/bs";
import ItemSearch from "./common/ItemSearch";

export default function FindComponent() {
	return (
		<Center backgroundColor='white' borderRadius={23}>
			<ItemSearch
				text='Địa điểm'
				icon={<HiLocationMarker color='black' fontSize={28} />}
				children={<Input inputMode='text' textColor='black' />}
			/>
			<BsArrowLeftRight color='black' />
			<ItemSearch
				text='Điểm đến '
				icon={<HiLocationMarker color='black' fontSize={28} />}
				children={
					<Input placeholder='Hãy chọn địa điểm ' textColor='black' />
				}
			/>
			<ItemSearch
				text='Ngày đi '
				icon={<BsFillCalendarFill color='black' fontSize={28} />}
				children={<Input inputMode='text' textColor='black' />}
			/>
			<ItemSearch
				text='Số ngày '
				icon={<BsFillCalendarFill color='black' fontSize={28} />}
				children={<Input inputMode='text' textColor='black' />}
			/>
			<Button colorScheme='black' p={4} color='black' w={28}>
				<AiOutlineArrowRight />
			</Button>
		</Center>
	);
}
