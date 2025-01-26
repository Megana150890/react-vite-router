import { Logo } from "../Logo/logo";
import clsx from "clsx";
import { Menu } from "../Menu/menu";
import style from './header.module.scss'


export type HeaderProps = {
    className?: string;
    children?: React.ReactNode;
}

export function Header ({className, children}: HeaderProps) {
    const menuItems = [
        {label: 'home', href: './'},
        {label: 'login', href: '/login'},
        {label: 'register', href:'/register'}
    ];
    return (
        <header className={clsx(style.header, className)}>
            <div className={style.container}>
                <Logo/>
                <Menu items={menuItems}/>
                {children}
            </div>
        </header>
    )

}