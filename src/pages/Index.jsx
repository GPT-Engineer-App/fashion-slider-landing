import { useState } from "react";
import { Box, Container, VStack, Text, HStack, IconButton, Image, Link, Flex } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = ["https://images.unsplash.com/photo-1608806443077-278eb309dcc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG90aGVzJTIwMXxlbnwwfHx8fDE3MTYxNTE3NTR8MA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1700061654480-ce6fa3343713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG90aGVzJTIwMnxlbnwwfHx8fDE3MTYxNTE3NTZ8MA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1528291781122-cd7443caef8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG90aGVzJTIwM3xlbnwwfHx8fDE3MTYxNTE3NTh8MA&ixlib=rb-4.0.3&q=80&w=1080"];

const Navbar = () => {
  return (
    <Flex as="nav" width="100%" padding="1rem" backgroundColor="teal.500" justifyContent="space-between" alignItems="center">
      <HStack spacing={8}>
        <Link href="#" color="white" fontSize="lg">
          Home
        </Link>
        <Link href="#" color="white" fontSize="lg">
          Products
        </Link>
        <Link href="#" color="white" fontSize="lg">
          About
        </Link>
        <Link href="#" color="white" fontSize="lg">
          Cart
        </Link>
      </HStack>
    </Flex>
  );
};

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <Box position="relative" width="100%" maxW="600px" height="400px" overflow="hidden">
      <Image src={images[currentIndex]} alt={`Slide ${currentIndex}`} width="100%" height="100%" objectFit="cover" />
      <IconButton aria-label="Previous Slide" icon={<FaArrowLeft />} position="absolute" top="50%" left="10px" transform="translateY(-50%)" onClick={prevSlide} />
      <IconButton aria-label="Next Slide" icon={<FaArrowRight />} position="absolute" top="50%" right="10px" transform="translateY(-50%)" onClick={nextSlide} />
    </Box>
  );
};

const Index = () => {
  return (
    <Container maxW="container.xl" padding={0}>
      <Navbar />
      <VStack spacing={8} paddingTop={8}>
        <Text fontSize="3xl" fontWeight="bold">
          Welcome to Our Clothing Store
        </Text>
        <ImageSlider />
      </VStack>
    </Container>
  );
};

export default Index;
