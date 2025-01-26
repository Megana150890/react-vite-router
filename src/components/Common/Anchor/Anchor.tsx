import {AnchorProps} from '@/components/Common/Anchor/AnchorProvider';
import { useAnchor, useLinkProps } from './hooks';
import React from 'react';


export function Anchor ({href, children, ...props}: AnchorProps) {
    const LinkElement = useAnchor(href);
    const propsLink = useLinkProps(href);
    if (typeof LinkElement === 'string') {
        return React.createElement(
            LinkElement,
            { ...props, ...propsLink },
            children
        );
    }

    return (
        <LinkElement {...props} {...propsLink}>
            {children}
        </LinkElement>
    )
}