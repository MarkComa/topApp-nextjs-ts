import React, { FunctionComponent, useRef, useState } from "react";
import { Footer, Header, Sidebar } from ".";
import { LayoutProps } from "./Layout.props";
import s from "./Layout.module.css";
import { AppContextProvider, IAppContext } from "../context/app.context";
import { Up } from "../components";
import cn from "classnames";

const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
	const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] =
		useState<boolean>(false);
    const bodyRef = useRef<HTMLDivElement>(null)
	const skipContentAction = (key: KeyboardEvent) => {
    if (key.code == 'space' || key.code == 'Enter') {
			key.preventDefault();
      bodyRef.current?.focus();
		}
    setIsSkipLinkDisplayed(false);
  };
	return (
		<div {...props} className={s.container}>
			<a
				tabIndex={1}
				className={cn(s.skipLink, {
					[s.displayed]: isSkipLinkDisplayed,
				})}
				onFocus={() => setIsSkipLinkDisplayed(true)}
				onKeyDown={skipContentAction}>
				Сразу к содержанию
			</a>
			<Header className={s.header} />
			<Sidebar className={s.sidebar} />
			<div className={s.body} ref={bodyRef} tabIndex={0}>{children}</div>
			<Footer className={s.footer} />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
	Component: FunctionComponent<T>,
) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<AppContextProvider
				menu={props.menu}
				firstCategory={props.firstCategory}>
				<Layout>
					<Component {...props} />
					<Up />
				</Layout>
			</AppContextProvider>
		);
	};
};
