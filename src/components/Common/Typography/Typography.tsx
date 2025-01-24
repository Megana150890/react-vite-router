import React from 'react';
import clsx from 'clsx';
import { TypographyProps } from './types';
import styles from './Typography.module.scss';

const withTypography = (defaultProps: Partial<TypographyProps>) => {
	return function Typography(props: TypographyProps) {
		const {
			className,
			children,
			variant = defaultProps.variant || 'normal',
			Tag = defaultProps.Tag || 'span',
			...rest
		} = props;

		return (
			<Tag
				{...rest}
				className={clsx(styles.container, className, styles[variant])}
			>
				{children}
			</Tag>
		);
	};
};
export const Typography = withTypography({});
export const Text = withTypography({
	Tag: 'span',
	variant: 'normal',
});

export const Title = withTypography({
	Tag: 'h3',
	variant: 'title',
});
