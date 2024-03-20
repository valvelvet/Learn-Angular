import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-basics-pratice-recipe-list',
  templateUrl: './basics-pratice-recipe-list.component.html',
  styleUrl: './basics-pratice-recipe-list.component.scss',
})
export class BasicsPraticeRecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      '碗粿',
      '傳統民俗小吃自製不難！鹹香好滋味，自己做的料更多！',
      'https://imageproxy.icook.network/resize?background=255%2C255%2C255&height=300&nocrop=false&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Frecipe%2Fcover%2F256549%2Faf4bbac41039a494.jpg&width=400',
      60
    ),
    new Recipe(
      '桂花梅漬番茄',
      '小番茄去皮用話梅、檸檬汁及糖醃漬， 酸甜爽口、冰涼消暑， 我另外加了桂花釀及梅酒， 讓甜味及香氣更加有層次。 在家宴客時端上這樣點',
      'https://imageproxy.icook.network/resize?background=255%2C255%2C255&height=150&nocrop=false&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Frecipe%2Fcover%2F400790%2F6fbb71acbce07b10.jpg&width=200',
      30
    ),
    new Recipe(
      '莓果麵包布丁',
      '朋友問有沒有製作簡單，備料容易但看起來有點厲害的點心？ 打個蛋、溫牛奶、烤一下就能完成的 #麵包布丁 來試試 不加奶油不加糖健',
      'https://imageproxy.icook.network/resize?background=255%2C255%2C255&height=150&nocrop=false&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Frecipe%2Fcover%2F395146%2F29e1c9c5f0fc464c.jpg&width=200',
      20
    ),
    new Recipe(
      '烏魚子糙米香',
      '素有台灣「烏金」之稱的烏魚子，是台灣農曆年圍爐的經典菜色，米香是傳統農業社會普遍的古早味零食，將兩者結合在一起，一口咬下，可以吃到',
      'https://imageproxy.icook.network/resize?background=255%2C255%2C255&height=150&nocrop=false&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Frecipe%2Fcover%2F415713%2F75f1437c9742b82f.jpg&width=200',
      90
    ),
    new Recipe(
      '鮪魚生菜沙拉佐油醋醬',
      '洋蔥爽口, 檸檬解膩, 同鮪魚拌做沙拉, 抹在烤過的吐司上, 吐司酥脆, 沙拉滑順, 口感層次豐富, 搭配生菜, 美味又營養!',
      'https://imageproxy.icook.network/resize?background=255%2C255%2C255&height=150&nocrop=false&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Frecipe%2Fcover%2F176152%2Fb51ceb3435160890.jpg&width=200',
      15
    ),
  ];
}
