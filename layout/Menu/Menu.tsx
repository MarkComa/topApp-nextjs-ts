import React, { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interface";
import s from "./Menu.module.css";
import cn from "classnames";
import CoursesIcon from "./Icon/courses.svg";
import ServicesIcon from "./Icon/service.svg";
import BooksIcon from "./Icon/books.svg";
import ProductsIcon from "./Icon/product.svg";
import { TopLevelCategory } from "../../interfaces/page.interface";

const firstLevelMenu: FirstLevelMenuItem[] = [
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

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	const buildFirstLevel = () => {
		return (
		<>
    {firstLevelMenu.map(m => (
      <div key={m.route}>
        <a href={`/${m.route}`}>
          <div className={cn(s.firstLevel, {
            [s.firstLevelActive]: m.id == firstCategory 
          })}>
            {m.icon}
            <span>{m.name}</span>
          </div>
        </a>
        {m.id == firstCategory && buildSecondLevel(m)}
      </div>
  ))} 
    </>
		);
	};
	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={s.secondBlock}>
        {menu.map(m => (
          <div key={m._id.secondCategory}>
            <div className={s.secondLevel}>
              {m._id.secondCategory}
            </div>
            <div className={cn(s.secondLevelBlock, {
              [s.secondLevelBlockOpened]: m.isOpened , 
            })}>
             {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    )
  };
	const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      pages.map(p => (
           <a href={`/${route}/${p.alias}`} key={p._id} className={cn(s.thirdLevel, {
             [s.thirdLevelActive]: false
           })}>
             {p.category}
           </a>
    ))
      );
  };

	return (
  <div className={s.menu}>
    {buildFirstLevel()}
  </div>
  );
};
