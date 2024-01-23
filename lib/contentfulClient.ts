import {
  TypeRecipeListItem,
  TypeRecipeDetailItem,
} from "@/app/(contentful)/types/TypeRecipe";

const gqlAllRecipesQuery = `query RecipeList {
    recipesCollection {
        items {
            sys {
                id 
            }
            recipeName,
            recipeAuthor,
            recipeImage {
                url
            }
            recipeIngredients {
                json
            }
            recipeInstructions {
                json
            }
        }
    }
    entryCollection {
        items {
            contentfulMetadata {
                tags {
                    name
                }
            }
        }
    }
}`;

interface RecipeCollectionResponse {
  recipeCollection: {
    items: RecipeItem[];
  };
}

interface RecipeItem {
  sys: {
    id: string;
  };
  recipeName: string;
  recipeAuthor: string;
  recipeImage: {
    url: string;
  };
  recipeIngredients: {
    json: any;
  };
  recipeInstructions: {
    json: any;
  };
  entryCollection: {
    items: {
      map(arg0: (tag: any) => any): any;
      contentfulMetadata: {
        tags: {
          name: string;
        };
      };
    };
  };
}

const baseUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;

const getAllRecipes = async (): Promise<TypeRecipeListItem[]> => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query: gqlAllRecipesQuery }),
    });

    // Get the response as JSON, cast as RecipeCollectionResponse
    const body = (await response.json()) as {
      data: RecipeCollectionResponse;
    };

    // Map the response to the format we want
    const recipes: TypeRecipeListItem[] = body.data.recipeCollection.items.map(
      (item) => ({
        id: item.sys.id,
        name: item.recipeName,
        author: item.recipeAuthor,
        image: item.recipeImage.url,
        ingredients: item.recipeIngredients.json.content.map(
          (ingredient: any) => ingredient.content[0].value
        ),
        instructions: item.recipeInstructions.json.content.map(
          (instruction: any) => instruction.content[0].value
        ),
        tags: item.entryCollection.items.map(
          (tag: any) => tag.contentfulMetadata.tags.name
        ),
      })
    );

    return recipes;
  } catch (error) {
    console.log(error);

    return [];
  }
};

const contentfulService = {
  getAllRecipes,
};

export default contentfulService;
