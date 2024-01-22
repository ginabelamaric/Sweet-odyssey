export interface TypeRecipeListItem {
  id: string;
  name: string;
  image: string;
  tags: string[];
}
  
export interface TypeRecipeDetailItem extends TypeRecipeListItem {
  author: string;
  ingredients: any;
  instructions: any;
}