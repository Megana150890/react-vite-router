import clsx from 'clsx';
import styles from './Card.module.scss';
import { ReactNode } from 'react';

export type CardProps = {
	className?: string;
	children?: ReactNode;
};

export function Card({ className, children }: CardProps) {
	return <div className={clsx(styles.card, className)}>{children}</div>;
}