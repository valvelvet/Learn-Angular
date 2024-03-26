import { Component } from '@angular/core';
import { RecipeDetail } from '../recipe.model';

@Component({
  selector: 'app-basics-pratice-recipe-detail',
  templateUrl: './basics-pratice-recipe-detail.component.html',
  styleUrl: './basics-pratice-recipe-detail.component.scss',
})
export class BasicsPraticeRecipeDetailComponent {
  recipe: RecipeDetail = new RecipeDetail(
    '桂花梅漬番茄',
    '小番茄去皮用話梅、檸檬汁及糖醃漬，酸甜爽口、冰涼消暑，我另外加了桂花釀及梅酒，讓甜味及香氣更加有層次。在家宴客時端上這樣點心，餐前能開胃餐後能解膩，絕對能得到賓客們的讚美哦。',
    'https://imageproxy.icook.network/resize?background=255%2C255%2C255&height=150&nocrop=false&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Frecipe%2Fcover%2F400790%2F6fbb71acbce07b10.jpg&width=200',
    30,
    [
      { name: '小番茄', quantity: '1000g' },
      { name: '冰糖', quantity: '70g' },
      { name: '話梅', quantity: '15顆' },
      { name: '桂花釀', quantity: '80g' },
      { name: '水', quantity: '1000ml' },
      { name: '檸檬汁', quantity: '2顆' },
      { name: '梅酒', quantity: '70ml' },
    ],
    [
      {
        content: '1公升的水倒入鍋中加熱，加入話梅、桂花釀及冰糖煮滾後轉小火煮10分鐘。倒出放滾備用',
        img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F2043874%2F341eccec1370a50b.jpg&width=220',
      },
      { content: '小番茄去蒂洗淨，在尾部用刀輕劃十字', img: '' },
      {
        content: '另外煮一鍋水，水沸騰後放入小番茄快速川燙30秒後撈起',
        img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F2043876%2F5b837ef45bf4be4f.jpg&width=220',
      },
      { content: '起鍋的小番茄馬上泡到冰水中', img: '' },
      {
        content: '剝除果皮',
        img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F2043878%2F32de1657749a1d18.jpg&width=220',
      },
      { content: '醬汁涼透後加入檸檬汁及梅酒', img: '' },
      {
        content: '醬汁倒到放小番茄容器中，醬汁高度要醃過小番茄，密封好就可以放入冰箱醃漬。小番茄醃漬一天即可食用，大番茄則要三天',
        img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F2043880%2Fbb2c5fbc150c4bf4.jpg&width=220',
      },
    ]
  );
}
