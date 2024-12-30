import { Center, Heading, Box, Text, Image, Button, Flex, VStack } from '@chakra-ui/react';
import '../css/recipe.css';

export const RecipePage = ({ data, setSelectedRecipe }) => {
  const handleBack = () => {
    setSelectedRecipe(false);
  };

  return (
    <Center flexDir="column" p={4} w="100%">
      <Button 
        onClick={handleBack} 
        alignSelf="flex-start" 
        colorScheme="teal" 
        mb={4}
        variant="solid"
      >
        Back
      </Button>

      <Heading className="title" as="h1" size="xl" mb={6}>
        Your Recipe App
      </Heading>

      <Box
        w={{ base: '90%', md: '80%', lg: '60%' }}
        bg="gray.100"
        p={6}
        borderRadius="lg"
        boxShadow="lg"
      >
        <VStack spacing={4} align="stretch">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            {data.recipe.label}
          </Text>

          <Image
            className="recipe-img"
            src={data.recipe.image}
            alt={data.recipe.label}
            borderRadius="md"
          />

          <Text>
            <strong>Meal Type:</strong> {data.recipe.mealType}
          </Text>
          <Text>
            <strong>Dish Type:</strong> {data.recipe.dishType}
          </Text>
          <Text>
            <strong>Cooking Time:</strong> {data.recipe.totalTime} minutes
          </Text>

          <Box>
            <Text><strong>Diet Labels:</strong> {data.recipe.dietLabels.join(', ')}</Text>
          </Box>

          <Box>
            <Text><strong>Health Labels:</strong> {data.recipe.healthLabels.join(', ')}</Text>
          </Box>

          <Box>
            <Text><strong>Cautions:</strong> {data.recipe.cautions.join(', ')}</Text>
          </Box>

          <Box>
            <Text><strong>Ingredients:</strong> {data.recipe.ingredientLines.join(', ')}</Text>
          </Box>

          <Text>
            <strong>Servings:</strong> {data.recipe.yield}
          </Text>
          <Text>
            <strong>KCAL:</strong> {data.recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)}
          </Text>
          <Text>
            <strong>Protein:</strong> {data.recipe.totalNutrients.PROCNT.quantity.toFixed(2)}g
          </Text>
          <Text>
            <strong>Fat:</strong> {data.recipe.totalNutrients.FAT.quantity.toFixed(2)}g
          </Text>
          <Text>
            <strong>Carbs:</strong> {data.recipe.totalNutrients.CHOCDF.quantity.toFixed(2)}g
          </Text>
          <Text>
            <strong>Cholesterol:</strong> {data.recipe.totalNutrients.CHOLE.quantity.toFixed(2)}mg
          </Text>
          <Text>
            <strong>Sodium:</strong> {data.recipe.totalNutrients.NA.quantity.toFixed(2)}mg
          </Text>
        </VStack>
      </Box>
    </Center>
  );
};
