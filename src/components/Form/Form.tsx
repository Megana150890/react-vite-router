import React, { FormHTMLAttributes, FunctionComponent } from 'react';
import clsx from 'clsx';
import styles from './Form.module.scss';

export type FormTag = 'form' | FunctionComponent;

export type FormProps = {
	className?: string;
	Tag?: FormTag;
	children: React.ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

export function Form({
	className,
	children,
	Tag = 'form',
	...props
}: FormProps) {
	return (
		<Tag {...props} className={clsx(styles.container, className)}>
			{children}
		</Tag>
	);
}
