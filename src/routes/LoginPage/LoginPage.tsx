import { Section } from '@/components/Layout/Section/Section';
import { LoginForm, LoginFormProps } from '@/screens/LoginForm/LoginForm';
import clsx from 'clsx';


export function LoginPage({ formSettings }: LoginFormProps) {
	return (
		<main>
			<Section>
				<LoginForm formSettings={formSettings} />
			</Section>
		</main>
	);
}
