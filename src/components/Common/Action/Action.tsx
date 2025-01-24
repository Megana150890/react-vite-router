import { ActionTag, ButtonType, ButtonVariant } from './types';
import { ReactNode } from 'react';
import { Anchor } from '../Anchor/Anchor';
import clsx from 'clsx';
import styles from './Action.module.scss';

export type ButtonProps = {
	type?: ButtonType | keyof typeof ButtonType;
	variant?: ButtonVariant | keyof typeof ButtonVariant;
	onclick?: () => void;
	disabled?: boolean;
	href?: string;
	name?: string;
	className?: string;
	Tag?: ActionTag;
	children?: ReactNode;
};
const withAction = ({
	type = 'button',
	variant = 'primary',
	Tag = 'button',
	...defaults
}: ButtonProps) => {
	return function Action(props: ButtonProps) {
		const { className, children, disabled, href, ...rest } = {
			...defaults,
			...props,
		};
		const TagElement = Tag === 'a' ? Anchor : Tag;
		return (
			<TagElement
				{...rest}
				type={Tag === 'button' ? type : undefined}
				href={Tag === 'a' ? href : undefined}
				disabled={disabled}
				className={clsx(styles.button, styles[variant], className, {
					[styles.disabled]: disabled,
				})}
			>
				{children}
			</TagElement>
		);
	};
};



export const Action = withAction({});

export const Button = withAction({
    type: "button",
	Tag: 'button',
	variant: 'primary',
});

export const Link = withAction({
    type: "button",
	Tag: 'a',
	variant: 'link',
});

export const Submit = withAction({
	Tag: 'button',
	type: 'submit',
	variant: 'primary',
});
