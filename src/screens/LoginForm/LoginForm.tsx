import { InputEmail, InputPassword } from '@/components/Form/Input/Input';
import { Field } from '@/components/Form/Field/Field';
import { Title } from '@/components/Common/Typography/Typography';
import { Form } from '@/components/Form/Form'
import { Button } from '@/components/Common/Action';
import { FormProps } from '@/components/Form/Form';
import styles from './LoginForm.module.scss';
import clsx from 'clsx';


export type LoginFormProps = {
	className?: string;
	formSettings?: Omit<FormProps, 'children'>;
};

export function LoginForm({ className, formSettings }: LoginFormProps) {
	return <Form {...formSettings} method="post" className={clsx(styles.container, className)}>
		<Title>Sign In</Title>
		<Field>
			<InputEmail name="email" />
		</Field>
		<Field>
			<InputPassword name="password" placeholder="Password" />
		</Field>
		<Button type="submit" name="signin">Sign In</Button>
	</Form>;
}
