import { TypeIngredient, Ingredient } from '../model/ingredient.model';

export class RecipeInfo {
  /** 食譜名稱 */ public name: string;
  /** 說明 */ public description: string;
  /** 圖片 */ public imgPath: string;
  /** 時間(min) */ public time: number;

  constructor(name: string, desc: string, imgPath: string, time: number) {
    this.name = name;
    this.description = desc;
    this.imgPath = imgPath;
    this.time = time;
  }
}

// /** 食材 */
// type Ingredients = {
//   name: string; // 食材名稱
//   quantity: string; // 食材份量(ex:2杯水)
// }[];
/** 步驟 */
type Steps = {
  content: string; // 文字說明
  img?: string; // 步驟配圖
}[];

export class Recipe extends RecipeInfo {
  static count: number = 0;
  id: number;
  /** 食材 */ public ingredients: Ingredient[] = [];
  /** 步驟 */ public steps: Steps;

  constructor(
    name: string,
    desc: string,
    imgPath: string,
    time: number,
    ingredients: TypeIngredient[],
    steps: Steps
  ) {
    super(name, desc, imgPath, time);
    ingredients.map((item) =>
      this.ingredients.push(new Ingredient(item.name, item.quantity))
    );
    this.steps = steps;
    Recipe.count++;
    this.id = Recipe.count;
  }
}
