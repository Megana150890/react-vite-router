import clsx from 'clsx';
import logoDefault from '../../../assets/images/Group.png';
import styles from './logo.module.scss';


export type LogoProps = {
    className?: string;
    src?: string;
    alt?: string;
};

export function Logo({className, src = logoDefault, alt = "logo"}: LogoProps){
    return (
        <img 
        src = {src}
        alt={alt}
        className={clsx(styles.container, className)} />
    )
}