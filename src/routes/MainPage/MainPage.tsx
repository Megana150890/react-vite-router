import { Button } from '@/components/Common/Action';
import { Title, Typography } from '@/components/Common/Typography/Typography';
import { FormProps } from '@/components/Form/Form';
import { Trigger } from '@/components/Layout/Modal/Modal';
import { Section } from '@/components/Layout/Section/Section';
import { LoginForm } from '@/screens/LoginForm/LoginForm';
import { RegisterForm } from '@/screens/RegisterForm/RegisterForm';

type MainPageProps = {
	data: { result: string };
    formSettings?: Omit<FormProps, 'children'>;
};

export function MainPage({ data }: MainPageProps) {
	return (
		<main >
			<Section>
				<Title>Message: {data.result}</Title>
				<Trigger modalContent={<LoginForm />}>
					<Button variant="link">Sign In</Button>
				</Trigger>

				<Trigger modalContent={<RegisterForm />}>
					<Button variant="link">Sign Up</Button>
				</Trigger>
			</Section>
		</main>
	);
}
