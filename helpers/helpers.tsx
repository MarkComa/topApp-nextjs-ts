import CoursesIcon from "./Icon/courses.svg";
import ServicesIcon from "./Icon/service.svg";
import BooksIcon from "./Icon/books.svg";
import ProductsIcon from "./Icon/product.svg";
import { TopLevelCategory } from "../interfaces/page.interface";
import { FirstLevelMenuItem } from "../interfaces/menu.interface";


export const firstLevelMenu: FirstLevelMenuItem[] = [
	{
		route: "courses",
		name: "Курсы",
		icon: <CoursesIcon />,
		id: TopLevelCategory.Courses,
	},
	{
		route: "services",
		name: "Сервисы",
		icon: <ServicesIcon />,
		id: TopLevelCategory.Services,
	},
	{
		route: "books",
		name: "Книги",
		icon: <BooksIcon />,
		id: TopLevelCategory.Books,
	},
	{
		route: "products",
		name: "Товары",
		icon: <ProductsIcon />,
		id: TopLevelCategory.Products,
	},
];
export const priceRu = (price: number):string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ").concat(' '+ 'Р')