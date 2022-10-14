/** @format */

import {
	Center,
	FormControl,
	Input,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Search = () => (
	<Center>
		<Center w='container.lg'>
			<FormControl borderRadius='6px' border='2px'>
				<InputGroup>
					<InputLeftElement>
						<SearchIcon boxSize={6} />
					</InputLeftElement>
					<Input type='text' />
				</InputGroup>
			</FormControl>
		</Center>
	</Center>
);

export default Search;
