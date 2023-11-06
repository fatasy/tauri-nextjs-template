import { FormItem } from "@components/FormItem"
import { Button, DatePicker, Form, Input } from "antd"
import { useForm } from "react-hook-form"

import { FormType } from "@/@types/form.types"
import { User, UserFormValidation } from "@/validations/user.validations"

export default function UserForm({ data, onSubmit }: FormType<User>) {
  const { control, handleSubmit } = useForm<User>({
    resolver: UserFormValidation,
    defaultValues: data,
  })

  return (
    <Form onFinish={() => handleSubmit(onSubmit)}>
      <FormItem control={control} name="name" label="Nome">
        <Input />
      </FormItem>
      <FormItem control={control} name="password" label="Senha">
        <Input.Password />
      </FormItem>
      <FormItem control={control} name="birthData" label="Data de Aniversário">
        <DatePicker />
      </FormItem>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Cadastrar
        </Button>
      </Form.Item>
    </Form>
  )
}
