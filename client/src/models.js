import NewModel from './images/new-model.png'
import SlideImg from './images/slide-img.png'
import ManItem from "./images/man-item.png";
import Man from "./images/category-man.png";
import WoMan from "./images/WoMan.png";

export const allProducts = [
  {
    title: 'Коктейльное платье',
    img: NewModel,
    price: 40_000,
    _id: 5,
    sales: 0,
    category: 'Для мужчин',
    type: 'Футболка',
    new: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, est, laborum. Amet consectetur consequuntur deserunt ex, excepturi facere iste, magni minus nostrum quam quas reprehenderit sequi tenetur voluptatem voluptates, voluptatibus?'
  },
  {
    title: 'Вечернее платье',
    img: NewModel,
    price: 60_000,
    _id: 6,
    sales: 0,
    category: 'Для мужчин',
    type: 'Обувь',
    new: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, est, laborum. Amet consectetur consequuntur deserunt ex, excepturi facere iste, magni minus nostrum quam quas reprehenderit sequi tenetur voluptatem voluptates, voluptatibus?'
  },
  {
    title: 'Дэфолтный скин',
    img: NewModel,
    price: 12_222,
    _id: 7,
    category: 'Для женщин',
    type: 'Платье',
    new: true,
    sales: 0,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, est, laborum. Amet consectetur consequuntur deserunt ex, excepturi facere iste, magni minus nostrum quam quas reprehenderit sequi tenetur voluptatem voluptates, voluptatibus?'
  },
  {
    title: 'Старое платье',
    img: NewModel,
    price: 10_000,
    _id: 8,
    category: 'Для женщин',
    type: 'Обувь',
    new: true,
    sales: 0,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, est, laborum. Amet consectetur consequuntur deserunt ex, excepturi facere iste, magni minus nostrum quam quas reprehenderit sequi tenetur voluptatem voluptates, voluptatibus?'
  },
  {
    title: 'Пивная футболка',
    img: NewModel,
    price: 30_000,
    _id: 1,
    category: 'Для детей',
    type: 'Обувь',
    sales: "50%",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, est, laborum. Amet consectetur consequuntur deserunt ex, excepturi facere iste, magni minus nostrum quam quas reprehenderit sequi tenetur voluptatem voluptates, voluptatibus?'

  },
  {
    title: 'Утреняя футболка',
    img: NewModel,
    price: 25_000,
    _id: 2,
    sales: "50%",
    category: 'Для женщин',
    type: 'Обувь',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, est, laborum. Amet consectetur consequuntur deserunt ex, excepturi facere iste, magni minus nostrum quam quas reprehenderit sequi tenetur voluptatem voluptates, voluptatibus?'

  },
  {
    title: 'Рарный скин',
    img: NewModel,
    price: 18_000,
    _id: 3,
    category: 'Для детей',
    type: 'Платье',
    sales: "50%",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, est, laborum. Amet consectetur consequuntur deserunt ex, excepturi facere iste, magni minus nostrum quam quas reprehenderit sequi tenetur voluptatem voluptates, voluptatibus?'

  },
  {
    title: 'Старая футболка',
    img: NewModel,
    price: 10_000,
    _id: 4,
    sales: "50%",
    category: 'Для женщин',
    type: 'Футболка',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, est, laborum. Amet consectetur consequuntur deserunt ex, excepturi facere iste, magni minus nostrum quam quas reprehenderit sequi tenetur voluptatem voluptates, voluptatibus?'
  },
  {
    title: 'Красное платье',
    img: NewModel,
    price: 16_262,
    _id: 9,
    category: 'Для женщин',
    type: 'Платье',
    new: true,
    sales: 0,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, est, laborum. Amet consectetur consequuntur deserunt ex, excepturi facere iste, magni minus nostrum quam quas reprehenderit sequi tenetur voluptatem voluptates, voluptatibus?'
  },
  {
    title: 'Новые ботинки',
    img: NewModel,
    price: 100_000,
    _id: 10,
    category: 'Для женщин',
    type: 'Обувь',
    new: true,
    sales: 0,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, est, laborum. Amet consectetur consequuntur deserunt ex, excepturi facere iste, magni minus nostrum quam quas reprehenderit sequi tenetur voluptatem voluptates, voluptatibus?'
  },
  {
    title: 'Child футболка',
    img: NewModel,
    price: 30_000,
    _id: 11,
    category: 'Для детей',
    type: 'Футболка',
    sales: "50%",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, est, laborum. Amet consectetur consequuntur deserunt ex, excepturi facere iste, magni minus nostrum quam quas reprehenderit sequi tenetur voluptatem voluptates, voluptatibus?'

  },
  {
    title: 'Грязная футболка',
    img: NewModel,
    price: 5_000,
    _id: 12,
    sales: "50%",
    category: 'Для женщин',
    type: 'Футболка',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, est, laborum. Amet consectetur consequuntur deserunt ex, excepturi facere iste, magni minus nostrum quam quas reprehenderit sequi tenetur voluptatem voluptates, voluptatibus?'

  },
]

export const newModels = allProducts.filter(item => item.new)
export const modelSales = allProducts.filter(item => parseInt(item.sales) > 0)

export const maleModels = allProducts.filter(item => item.category === 'Для мужчин')
export const femaleModels = allProducts.filter(item => item.category === 'Для женщин')
export const childrenModels = allProducts.filter(item => item.category === 'Для детей')

export const dressModels = allProducts.filter(item => item.type === 'Платье')
export const tShirtModels = allProducts.filter(item => item.type === 'Футболка')
export const shoesModels = allProducts.filter(item => item.type === 'Обувь')

export const slideDescription = [
  {
    title: "Зимняя распродажа",
    sales: "СКИДКИ ДО 90%",
    linkTitle: "СМОТРЕТЬ МОДЕЛИ",
    img: SlideImg,
    defSale: "9 900 ₽",
    sale: "1 900 ₽"
  },
  {
    title: "Летняя распродажа",
    sales: "СКИДКИ ДО 70%",
    linkTitle: "СМОТРЕТЬ МОДЕЛИ",
    img: SlideImg,
    defSale: "11 900 ₽",
    sale: "6 900 ₽"
  },
  {
    title: "Просто распродажа",
    sales: "СКИДКИ ДО 45%",
    linkTitle: "СМОТРЕТЬ МОДЕЛИ",
    img: SlideImg,
    defSale: "2 900 ₽",
    sale: "900 ₽"
  },
]

export const catalogItems = [
  {
    title: 'ПЛАТЬЯ',
    image: ManItem,
  },
  {
    title: 'ПЛАТЬЯ',
    image: ManItem,
  },
  {
    title: 'ПЛАТЬЯ',
    image: ManItem,
  },
  {
    title: 'ПЛАТЬЯ',
    image: ManItem,
  },
  {
    title: 'ПЛАТЬЯ',
    image: ManItem,
  },
  {
    title: 'ПЛАТЬЯ',
    image: ManItem,
  },
  {
    title: 'ПЛАТЬЯ',
    image: ManItem,
  },
  {
    title: 'ПЛАТЬЯ',
    image: ManItem,
  }
]

export const categories = {
  colMan: {
    titleSex: 'МУЖСКАЯ ',
    description: 'Обувь, полуверы, костюмы',
    link_id: 1,
    img: Man,
  },
  colWoMan: {
    titleSex: 'ЖЕНСКАЯ ',
    description: 'Обувь, полуверы, костюмы',
    link_id: 2,
    img: WoMan,
  }
}
