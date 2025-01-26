import { ReactElement, ReactNode } from 'react';
import { useState } from 'react';
import clsx from 'clsx';
import styles from './Modal.module.scss';
import { createPortal } from 'react-dom';

export type ModalProps = {
	className?: string;
	children: ReactNode;
	onClose?: () => void;
};

export function Modal({ className, children, onClose }: ModalProps) {
	const handleOverlayClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) onClose?.(); // Закрытие при клике на оверлей
	};

	return createPortal(
		<div
			className={clsx(styles.overlay, className)}
			onClick={handleOverlayClick}
			data-testid="Modal"
		>
			<div className={styles.container}>
				<button className={styles.close} onClick={onClose} aria-label="Close">
					×
				</button>
				<div className={styles.content}>{children}</div>
			</div>
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
