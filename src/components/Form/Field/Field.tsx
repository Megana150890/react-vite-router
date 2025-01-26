import clsx from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';
import styles from './Field.module.scss';

export type FieldProps = {
	className?: string;
	label?: string;
	error?: string;
	children?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export function Field({
	className,
	label,
	error,
	children,
	...props
}: FieldProps) {
	return (
		<label className={clsx(styles.container, className)}>
			{label && <span className={styles.label}>{label}</span>}
			{children}
			{error && <span className={styles.errorMessage}>{error}</span>}
		</label>
	);
}

