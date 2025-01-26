import { clsx } from "clsx";
import { Logo } from "../Logo/logo";
import styles from './Footer.module.scss'
import { Anchor } from "@/components/Common/Anchor/Anchor";


export type FooterProps = {
    className?: string;
}

export function Footer({className}: FooterProps) {
    return (
        <footer className={clsx(styles.footer, className)}>
            <div className={styles.container}>
                <Logo/>
                <Anchor href = "/" >home</Anchor>
                <span className ={styles.copyright}>© 2017–2025 ProCharity</span>
            </div>
        </footer>
    )
}