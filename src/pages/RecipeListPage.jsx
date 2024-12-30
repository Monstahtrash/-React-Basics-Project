import { Center, Heading, Box, VStack, Image, Text, Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { RecipeSearch } from '../components/ui/RecipeSearch';
import '../css/recipe.css';

export const RecipeListPage = ({ data, setSelectedRecipe }) => {
  const [selectedRecipes, setSelectedRecipes] = useState([]);

  useEffect(() => {
    console.log(selectedRecipes);
  }, [selectedRecipes]);

  const onRecipeClick = (hit) => {
    setSelectedRecipe(hit);
  };

  return (
    <Center flexDir="column" p={4} w="100%">
      <Heading as="h1" size="xl" mb={6}>
        Your Recipe App
      </Heading>

      <RecipeSearch setSelected={setSelectedRecipes} />

      <VStack spacing={6} mt={4} w="100%" align="center">
        {selectedRecipes.map((hit, index) => (
          <Box
            key={index}
            w={{ base: '90%', md: '80%', lg: '60%' }}
            p={4}
            bg="gray.50"
            borderRadius="md"
            boxShadow="md"
            cursor="pointer"
            _hover={{ transform: 'scale(1.02)', transition: 'transform 0.2s' }}
            onClick={() => onRecipeClick(hit)}
          >
            <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems="center">
              <Image
                src={hit.recipe.image}
                alt={hit.recipe.label}
                boxSize="150px"
                objectFit="cover"
                borderRadius="md"
                mr={{ md: 4 }}
                mb={{ base: 4, md: 0 }}
              />

              <VStack align="start" spacing={2}>
                <Text fontSize="lg" fontWeight="bold">
                  {hit.recipe.label}
                </Text>
                {hit.recipe.dietLabels && (
                  <Text>
                    <strong>Diet Labels:</strong> {hit.recipe.dietLabels.join(', ')}
                  </Text>
                )}
                {hit.recipe.cautions && (
                  <Text>
                    <strong>Cautions:</strong> {hit.recipe.cautions.join(', ')}
                  </Text>
                )}
                <Text>
                  <strong>Meal Type:</strong> {hit.recipe.mealType}
                </Text>
                <Text>
                  <strong>Dish Type:</strong> {hit.recipe.dishType}
                </Text>
                {hit.recipe.healthLabels.includes('Vegetarian') && (
                  <Text>Vegetarian</Text>
                )}
                {hit.recipe.healthLabels.includes('Vegan') && (
                  <Text>Vegan</Text>
                )}
              </VStack>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Center>
  );
};
