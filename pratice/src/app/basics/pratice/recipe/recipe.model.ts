// 份量
type Unit = '杯' | '克' | '大匙' | '個';

export class Recipe {
  public name: string; // 食譜名稱
  public description: string; // 說明
  public imgPath: string; // 圖片
  public time: number; // 時間(min)
  // public serves: number; // 幾人份

  constructor(
    name: string,
    desc: string,
    imgPath: string,
    time: number,
    // serves: number
  ) {
    this.name = name;
    this.description = desc;
    this.imgPath = imgPath;
    this.time = time;
    // this.serves = serves;
  }

  // // 食材
  // public ingredients: {
  //   name: string; // 食材名稱
  //   quantity: { num: number; unit: Unit }; // 食材份量(數量、單位)
  // };
  // // 調料
  // public seasoning: {
  //   name: string; // 調料名稱
  //   quantity: string; // 調料份量
  // };
}
