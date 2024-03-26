/** 食材 */
export type TypeIngredient = {
  name: string; // 食材名稱
  quantity: string; // 食材份量(ex:2杯水)
};

export class Ingredient {
  constructor(public name: string, public quantity: string) {}
}
