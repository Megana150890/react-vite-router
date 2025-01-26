import { LinkValue } from "@/components/Common/Anchor/AnchorProvider";
import { Anchor } from '../../Common/Anchor/Anchor'
import clsx from "clsx";
import styles from './menu.module.scss'

export type MenuItem = {
    label: string,
    href: LinkValue;
};

export type MenuProps = {
    className?: string;
    items: MenuItem[];
}

export function Menu ({ className, items}: MenuProps) {
    return(
        <nav className={clsx(styles.container, className)}>
            <ul className={styles.menu}>
                {items.map((item, index) => (
                    <li key={index}>
                        <Anchor href={item.href}>{item.label}</Anchor>
                    </li>
                ))}
            </ul>
        </nav>
    )
}