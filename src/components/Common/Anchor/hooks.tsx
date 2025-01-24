import { AnchorHTMLAttributes, useContext, MouseEvent } from "react";
import { AnchorContext, AnchorProps } from "./AnchorProvider";
import { convertURL } from "@/utils";


export function useAnchor(href?: AnchorProps['href']): keyof JSX.IntrinsicElements | React.FunctionComponent<AnchorProps> {
  const {LinkElement, ignoreFn} = useContext(AnchorContext);
  if(typeof href === 'string' && LinkElement) {
    if(!ignoreFn || ignoreFn(href)) {
      return LinkElement
    }
  }
  return 'a';
}

export function useLinkProps( href? : AnchorProps['href'],) : AnchorHTMLAttributes<HTMLAnchorElement> {
  const props: AnchorHTMLAttributes<HTMLAnchorElement> = {};
  if(typeof href === 'string') {
    const url = convertURL(href);
    props.href = href;
    if(url.origin !== window.location.origin) {
      props.rel = 'noopener noreferrer';
      props.target='_blank'
    }
  }

  if(typeof href === 'function') {
    props.onClick = (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      event.stopPropagation();
      href(event);
    };
  }
  return props;
}