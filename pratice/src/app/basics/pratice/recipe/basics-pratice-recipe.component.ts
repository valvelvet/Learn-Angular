import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-basics-pratice-recipe',
  templateUrl: './basics-pratice-recipe.component.html',
  styleUrl: './basics-pratice-recipe.component.scss',
})
export class BasicsPraticeRecipeComponent {
  currentRecipeId: number = 0;

  recipes: Recipe[] = [
    new Recipe(
      '碗粿',
      '傳統民俗小吃自製不難！鹹香好滋味，自己做的料更多！',
      'https://imageproxy.icook.network/resize?background=255%2C255%2C255&height=300&nocrop=false&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Frecipe%2Fcover%2F256549%2Faf4bbac41039a494.jpg&width=400',
      60,
      [
        { name: '香菇', quantity: '5個' },
        { name: '絞肉', quantity: '280克' },
        { name: '蝦米', quantity: '20克' },
        { name: '菜脯', quantity: '150克' },
        { name: '香料共和國白胡椒粉', quantity: '5克' },
        { name: '川露薄鹽油膏', quantity: '40克' },
        { name: '紅蔥酥', quantity: '20克' },
        { name: '在來米粉', quantity: '250克' },
        { name: '日本太白粉', quantity: '40克' },
        { name: '冷水', quantity: '250克' },
        { name: '滾水', quantity: '500克' },
      ],
      [
        { content: '香菇去蒂頭、切成小塊狀。' },
        {
          content: '炒鍋倒入一點油，炒香香菇後加入絞肉，炒散絞肉。',
          img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F1249295%2Fda04148ca5134e3d.jpg&width=220',
        },
        { content: '絞肉半熟後加入蝦米、菜脯，均勻拌勻炒熟。' },
        {
          content:
            '加入白胡椒粉拌勻，再加入醬油膏，全部翻炒均勻，最後加入紅蔥酥拌勻。',
        },
        { content: '在來米粉、日本太白粉一起倒入攪拌盆，再加入冷水稍微拌勻。' },
        {
          content: '加入滾水，拌勻呈粉水狀，分次加入炒好的餡料，全部拌勻。',
          img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F1249298%2F05d22d6a39cf9407.jpg&width=220',
        },
        {
          content: '準備可以蒸的容器，舀入粉水與餡料，蒸30分鐘就完成囉！',
          img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F1249299%2F710fe6c3ad6d0180.jpg&width=220',
        },
      ]
    ),
    new Recipe(
      '桂花梅漬番茄',
      '小番茄去皮用話梅、檸檬汁及糖醃漬， 酸甜爽口、冰涼消暑， 我另外加了桂花釀及梅酒， 讓甜味及香氣更加有層次。 在家宴客時端上這樣點',
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
          content:
            '1公升的水倒入鍋中加熱，加入話梅、桂花釀及冰糖煮滾後轉小火煮10分鐘。倒出放滾備用',
          img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F2043874%2F341eccec1370a50b.jpg&width=220',
        },
        { content: '小番茄去蒂洗淨，在尾部用刀輕劃十字' },
        {
          content: '另外煮一鍋水，水沸騰後放入小番茄快速川燙30秒後撈起',
          img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F2043876%2F5b837ef45bf4be4f.jpg&width=220',
        },
        { content: '起鍋的小番茄馬上泡到冰水中' },
        {
          content: '剝除果皮',
          img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F2043878%2F32de1657749a1d18.jpg&width=220',
        },
        { content: '醬汁涼透後加入檸檬汁及梅酒' },
        {
          content:
            '醬汁倒到放小番茄容器中，醬汁高度要醃過小番茄，密封好就可以放入冰箱醃漬。小番茄醃漬一天即可食用，大番茄則要三天',
          img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F2043880%2Fbb2c5fbc150c4bf4.jpg&width=220',
        },
      ]
    ),
    new Recipe(
      '莓果麵包布丁',
      '朋友問有沒有製作簡單，備料容易但看起來有點厲害的點心？ 打個蛋、溫牛奶、烤一下就能完成的 #麵包布丁 來試試 不加奶油不加糖健',
      'https://imageproxy.icook.network/resize?background=255%2C255%2C255&height=150&nocrop=false&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Frecipe%2Fcover%2F395146%2F29e1c9c5f0fc464c.jpg&width=200',
      20,
      [
        { name: '吐司', quantity: '3片' },
        { name: '有機蛋', quantity: '2顆' },
        { name: '鮮奶', quantity: '200cc' },
        { name: '冷凍莓果', quantity: '適量' },
      ],
      [
        {
          content: '吐司用剪刀剪塊，發揮拼圖精神，鋪好鋪滿在烤盤裡。',
          img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F2010520%2F5d93e4c807de3884.jpg&width=220',
        },
        { content: '鮮奶小火加熱3分鐘左右，不需沸騰呦。' },
        {
          content:
            '將煮溫熱的牛奶慢慢倒入打散的蛋液中，邊倒邊攪拌均勻。(如果有香草精（莢）可以加進鮮奶中增加香氣；若喜歡甜可加細砂糖煮牛奶，我不愛甜沒加糖）。',
        },
        { content: '將煮溫熱的牛奶邊攪拌邊倒進蛋液中。' },
        { content: '混合後的牛奶蛋液用濾網過篩增加布丁的細緻度。' },
        {
          content: '將牛奶蛋液倒滿，放置5分鐘讓麵包完全吸飽牛奶蛋液。',
          img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F2009728%2F671df9527cdc3cf0.jpg&width=220',
        },
        { content: '烤箱上下火180度，烤盤加些熱水。' },
        {
          content:
            '烤15分鐘至蛋液完全凝固。(每個烤箱功率烤溫不同，依自己的烤箱調整烤溫跟時間，布丁液烤熟即可）',
          img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F2009729%2F62ab9ade2820f15e.jpg&width=220',
        },
        {
          content:
            '最後放上喜歡的冷凍莓果藍莓、蔓越莓，就完成無敵簡單的早餐/下午茶點心啦～',
        },
      ]
    ),
    new Recipe(
      '烏魚子糙米香',
      '素有台灣「烏金」之稱的烏魚子，是台灣農曆年圍爐的經典菜色，米香是傳統農業社會普遍的古早味零食，將兩者結合在一起，一口咬下，可以吃到',
      'https://imageproxy.icook.network/resize?background=255%2C255%2C255&height=150&nocrop=false&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Frecipe%2Fcover%2F415713%2F75f1437c9742b82f.jpg&width=200',
      90,
      [
        { name: '糙米米香', quantity: '55克' },
        { name: '梓官漁會烏魚子', quantity: '30克' },
        { name: '南瓜子', quantity: '45克' },
        { name: '熟白芝麻', quantity: '10克' },
        { name: '細砂糖', quantity: '100克' },
        { name: '水', quantity: '40ml' },
        { name: '無鹽奶油', quantity: '50克' },
        { name: '法國鮮奶油', quantity: '70克' },
        { name: '鹽', quantity: '1/4小匙' },
      ],
      [
        { content: '準備焦糖醬的材料並稱重' },
        {
          content:
            '鮮奶油加無鹽奶油和鹽，放置爐上以小火煮至奶油融化，即可熄火放涼備用',
          img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F2129944%2F98d609e45f788cc8.jpg&width=220',
        },
        {
          content:
            '準備一個較深的鍋子煮焦糖，避免熬煮過程中，焦糖會略微噴濺而燙傷。在鍋中放入砂糖加水攪拌至砂糖略微溶解，即可放置爐火上，以小火熬煮',
          img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F2129946%2Ffa256be31965f993.jpg&width=220',
        },
        {
          content:
            '待熬煮至湯汁較為濃稠，且糖色略呈琥珀色（約要30分鐘），即可將之前煮好放涼的奶油鮮奶油混合液倒入焦糖液中，此時焦糖會略微噴濺，請小心避免燙傷',
          img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F2129947%2Fdde194ef1271c75f.jpg&width=220',
        },
        { content: '不斷攪拌鍋中的液體，使之混拌均勻' },
        {
          content:
            '再持續煮至焦糖更為黏稠，即可熄火靜置，蓋上蓋子，放涼後海鹽焦糖醬會更為黏稠',
          img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F2129950%2F4d73de2a33c06c43.jpg&width=220',
        },
        {
          content:
            '在等待焦糖放涼的過程中，將米香、烏魚子、南瓜子、熟芝麻等食材秤重',
        },
        {
          content:
            '烏魚子捏成小碎塊，去除表面的薄膜，避免影響口感。南瓜子用烤箱烤約2分半鐘',
          img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F2129952%2Fd29a616dd5514758.jpg&width=220',
        },
        { content: '將所有材料放入盆中混拌均勻' },
        {
          content:
            '倒入海鹽焦糖醬，讓所有食材跟焦糖醬混拌均勻，焦糖醬視混拌情況加入，不要一開始就加太多，剩餘的焦糖醬可以裝罐冷藏保存。',
          img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F2129954%2Fc10af36d619ce822.jpg&width=220',
        },
        { content: '待所有食材都均勻混拌後，即可裝入備好的模型中' },
        {
          content:
            '這次用的是方形的鳳梨酥模具，將食材填入模具中，再壓實，即可取出脫模',
          img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F2129956%2Fc711ec94bbe87afe.jpg&width=220',
        },
        {
          content:
            '烏魚子糙米香大功告成，可以放入冰箱冷藏，焦糖醬會較為凝固成型！',
          img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F2129957%2F64727aced8843428.jpg&width=220',
        },
      ]
    ),
    new Recipe(
      '鮪魚生菜沙拉佐油醋醬',
      '洋蔥爽口, 檸檬解膩, 同鮪魚拌做沙拉, 抹在烤過的吐司上, 吐司酥脆, 沙拉滑順, 口感層次豐富, 搭配生菜, 美味又營養!',
      'https://imageproxy.icook.network/resize?background=255%2C255%2C255&height=150&nocrop=false&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Frecipe%2Fcover%2F176152%2Fb51ceb3435160890.jpg&width=200',
      15,
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
          content:
            '1公升的水倒入鍋中加熱，加入話梅、桂花釀及冰糖煮滾後轉小火煮10分鐘。倒出放滾備用',
          img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F2043874%2F341eccec1370a50b.jpg&width=220',
        },
        { content: '小番茄去蒂洗淨，在尾部用刀輕劃十字' },
        {
          content: '另外煮一鍋水，水沸騰後放入小番茄快速川燙30秒後撈起',
          img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F2043876%2F5b837ef45bf4be4f.jpg&width=220',
        },
        { content: '起鍋的小番茄馬上泡到冰水中' },
        {
          content: '剝除果皮',
          img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F2043878%2F32de1657749a1d18.jpg&width=220',
        },
        { content: '醬汁涼透後加入檸檬汁及梅酒' },
        {
          content:
            '醬汁倒到放小番茄容器中，醬汁高度要醃過小番茄，密封好就可以放入冰箱醃漬。小番茄醃漬一天即可食用，大番茄則要三天',
          img: 'https://imageproxy.icook.network/resize?background=255%2C255%2C255&nocrop=true&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Fstep%2Fcover%2F2043880%2Fbb2c5fbc150c4bf4.jpg&width=220',
        },
      ]
    ),
  ];

  getRecipeList() {
    return this.recipes;
  }
  getCuttentRecipe() {
    return this.recipes.find((recipe) => recipe.id == this.currentRecipeId);
  }

  changeRecipe(data: { id: number }) {
    this.currentRecipeId = data.id;
  }
}
