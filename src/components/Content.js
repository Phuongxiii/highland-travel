/** @format */

import {
	Center,
	Divider,
	Box,
	Text,
	HStack,
	VStack,
	Image,
	Heading,
} from "@chakra-ui/react";

const Content = () => {
	return (
		<Box color='black'>
			<Box h='48px' />
			<Center>
				<VStack>
					<HStack w='80%'>
						<Heading margin='-150px'>Địa điểm yêu thích</Heading>
					</HStack>
					<Box h='64px' />
					<HStack w='container.lg'>
						<Image
							alt='Ruộng bậc thang Tú Lệ - Điểm du lịch Mù Căng Chải hấp dẫn.'
							src='./8ad61322-866e-4a59-baab-911d6eaf2aa0-5.jpg'
						/>

						<Box p={8}>
							<Text fontSize='24px'>Điểm du lịch hấp dẫn</Text>
							<Text>
								V&agrave;o th&aacute;ng 9,10 l&agrave;
								m&ugrave;a gặt M&ugrave; Cang Chải, những sườn
								đồi chỉ to&agrave;n m&agrave;u v&agrave;ng ươm
								của l&uacute;a ch&iacute;n, lượn v&ograve;ng
								theo ruộng bậc thang như những lượt s&oacute;ng
								mềm mại. Đẹp mộng mị, m&ecirc; hoặc, l&atilde;ng
								mạn v&agrave; thanh tho&aacute;t&hellip; Đến
								M&ugrave; Căng Chải bạn kh&ocirc;ng thể bỏ qua
								những điểm du lịch hấp dẫn dưới đ&acirc;y.
							</Text>
							<Text>
								<strong>Thị Trấn T&uacute; Lệ</strong>: Được xem
								l&agrave;&nbsp;địa điểm du lịch kh&ocirc;ng thể
								bỏ qua khi du lịch M&ugrave; Cang Chải, tới
								đ&acirc;y bạn sẽ được chi&ecirc;m ngưỡng những
								c&aacute;nh đồng bậc thang trải d&agrave;i
								m&agrave;u v&agrave;ng chen m&agrave;u xanh
								tuyệt đẹp. Khi tới đ&acirc;y bạn c&oacute; thể
								đi thăm bản L&igrave;m Th&aacute;i, L&igrave;m
								M&ocirc;ng c&aacute;ch đ&oacute; khoảng 3km
								v&agrave; ngắm những ng&ocirc;i nh&agrave;
								s&agrave;n hai b&ecirc;n đường.
							</Text>
						</Box>
					</HStack>
					<Box h='64px' />
					<Text fontSize='24px'>Giá Phòng</Text>
					<Box h='64px' />
					<HStack w='container.lg'>
						<Box p={8}>
							<Text>
								Homestay - một loại hình du lịch mà du khách
								sống trong những ngôi nhà của người dân địa
								phương đang dần dần được ưa chuộng, đặc biệt là
								khách du lịch quốc tế
							</Text>
							<Box p={2} />
							<Text>
								Nhà sàn ở Bản Lác cao ráo, rộng rãi và sạch sẽ,
								giữ được lối kiến trúc cổ. Có giá là
								50k/người/đêm, nếu thuê cả sàn có giá từ 500k/
								đêm. Trang bị đầy đủ chăn, đệm, gối được gấp
								ngăn nắp, gọn gàng. sạch sẽ để phục vụ khách
							</Text>
							<Box p={2} />
							<Text>
								Mỗi nhà sàn đều có bếp liền kể để tiện cho việc
								nấu nướng và ăn uống Nếu muốn tự nấu nướng, ta
								có thể thuê bếp với giá 200 nghìn đồng. Du khách
								có thể đặt cơm với gia chủ để họ chuẩn bị sẵn .
								Đầu bản có nhà hàng kiểu dân tộc với các món ăn
								rừng núi và quán bar mở muộn.
							</Text>
						</Box>
						<Image alt='anbdcbskd' src='./Image1.png' />
					</HStack>
				</VStack>
			</Center>
			<Center>
				<Box w='container.lg'>
					<Box h='64px' />
					<Text fontSize='16px'>Giá tương ứng</Text>
					<Text fontSize='16px'>Điều khoản</Text>
					<Box h='64px' />
				</Box>
			</Center>
		</Box>
	);
};

export default Content;
