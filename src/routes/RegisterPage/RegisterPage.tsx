import { Section } from "@/components/Layout/Section/Section";
import { RegisterForm, RegisterFormProps } from "@/screens/RegisterForm/RegisterForm";


export function RegisterPage({  formSettings }: RegisterFormProps) {
	return <main  >
		<Section>
			<RegisterForm formSettings={formSettings} />
		</Section>
	</main>
}