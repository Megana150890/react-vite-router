import { ReactNode } from "react";
import clsx from "clsx";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import styles from './Layout.module.scss'




export type LayoutProps = {
	className?: string;
	children?: ReactNode;
};

export function Layout({ className, children }: LayoutProps) {
	return (
		<div className={clsx(styles.container, className)}>
			<Header  />
			<main >{children}</main>
			<Footer />
		</div>
	);
}