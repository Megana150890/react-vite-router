import { Button } from "@/components/Common/Action";
import { Title } from "@/components/Common/Typography/Typography";
import { Field } from "@/components/Form/Field/Field";
import { Form, FormProps } from "@/components/Form/Form";
import { InputEmail, InputPassword, InputText } from "@/components/Form/Input/Input";
import clsx from "clsx";
import styles from './RegisterForm.module.scss'




export type RegisterFormProps = {
	className?: string;
	formSettings?: Omit<FormProps, 'children'>;
};

export function RegisterForm({ className, formSettings }: RegisterFormProps) {
	return <Form {...formSettings} method="post" className={clsx(styles.container, className)} >
		<Title>Sign Up</Title>
		<Field>
			<InputText name="name" placeholder="Name" />
		</Field>
		<Field>
			<InputEmail name="email" placeholder="email@example.com" />
		</Field>
		<Field>
			<InputPassword name="password" placeholder="Password" />
		</Field>
		<Field>
			<InputPassword placeholder="Repeat password" />
		</Field>
		<Button type="submit" variant='primary' name="signup">Sign Up</Button>
	</Form>;
}
