import { ReactNode } from "react";
import styles from './Section.module.scss';
import clsx from "clsx";


 export type SectionProps = {
    children?: ReactNode;
    className?: string;
 }

 export function Section ({className, children}: SectionProps) {
    return (
<section className={clsx(styles.section, className)}>
<div className={styles.container}>{children}</div>
</section>
    )
 }