import React, {
	AnchorHTMLAttributes,
	createContext,
	FunctionComponent,
	MouseEvent,
	ReactNode,
} from 'react';

export type LinkValue =
	| string
	| ((event: MouseEvent<HTMLAnchorElement>) => void);

export type AnchorProps = Omit<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	'href'
> & {
	href?: LinkValue;
};

export type AnchorContextType = {
	LinkElement?: FunctionComponent<AnchorProps>;
	ignoreFn?: (href: string) => boolean;
};
export const AnchorContext = createContext<AnchorContextType>({});
type AnchorProviderProps = AnchorContextType & { children: ReactNode };

export const AnchorProvider: FunctionComponent<AnchorProviderProps> = ({
	children,
	LinkElement,
	ignoreFn,
}) => (
	<AnchorContext.Provider value={{ LinkElement, ignoreFn }}>
		{children}
	</AnchorContext.Provider>
);
