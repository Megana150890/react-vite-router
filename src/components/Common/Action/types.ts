import React, { FunctionComponent } from 'react';


export type ActionTag =
	| keyof Pick<React.JSX.IntrinsicElements, 'a' | 'button'>
	| FunctionComponent;

export enum ButtonVariant {
	primary = 'primary',
	outline = 'outline',
	secondary = 'secondary',
	link = 'link',
}

export enum ButtonType {
	button = 'button',
	submit = 'submit',
}
