import { ReactElement, ReactNode } from 'react';
import { useState } from 'react';
import clsx from 'clsx';
import styles from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { Card } from '../Card/Card';

export type ModalProps = {
	className?: string;
	children: ReactNode;
	onClose?: () => void;
};

export function Modal({ className, children, onClose }: ModalProps) {
	const handleOverlayClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) onClose?.(); 
	};

	return createPortal(
		<div
			className={clsx(styles.overlay, className)}
			onClick={handleOverlayClick}
		>
			
				<Card className={styles.content}
				>
					<button className={styles.close} onClick={onClose} aria-label="Close">
					×
				</button>
				{children}
			</Card>
		</div>,
		document.body
	);
}

export type TriggerProps = {
	children?: ReactElement;
	modalContent: ReactNode;
};

export function Trigger({ children, modalContent }: TriggerProps) {
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	return (
		<>
			<button onClick={openModal}>{children}</button>
			{isModalOpen && <Modal onClose={closeModal}>{modalContent}</Modal>}
		</>
	);
}
