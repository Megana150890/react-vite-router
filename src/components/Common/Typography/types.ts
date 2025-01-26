import React, { HTMLAttributes } from 'react';

export type TypographyTag =
	| 'p'
	| 'span'
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6';

export type TypographyVariant = 'caption' | 'label' | 'normal' | 'title';

export type TypographyProps = {
	className?: string;
	children?: React.ReactNode;
	variant?: TypographyVariant;
	Tag?: TypographyTag;
} & HTMLAttributes<HTMLElement>;
