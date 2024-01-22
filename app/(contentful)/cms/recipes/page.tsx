import { SearchParams } from "@/app/blog/page";
import { BadgeProps, Badge } from "@/components/ui/badge";
import Link from "next/link";
import { FC } from "react";
import { TypeRecipeListItem } from "../../types/TypeRecipe";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import contentfulService from "@/lib/contentfulClient";

const RecipeCard: FC<TypeRecipeListItem> = ({
        id,
        name,
        image,
        tags,
    }) => (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle className="text-brand-purple-800">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Link href={`recipes/${tags}/${id}`}>
          <div className="relative w-96 h-60">
            <Image
              src={image}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-md hover:opacity-70"
              //  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              alt={name}
            />
          </div>
        </Link>
      </CardContent>
    </Card>
  );

const CmsPage: FC<SearchParams> = async ({ searchParams }) => {
  const recipes = await contentfulService.getAllRecipes();
  return (
    <main className="container flex flex-col items-center gap-10">
      <h1 className="font-roboto-condensed text-6xl font-extrabold text-brand-purple-900 my-4">
        Recipes in progress...
      </h1>
      <ul className="grid grid-cols-2 gap-8">
        {recipes.map((recipe: TypeRecipeListItem) => {
          return (
            <li key={recipe.id}>
              <RecipeCard {...recipe} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default CmsPage;