import React from 'react'
import { useForm } from 'react-hook-form'

type Inputs = {
    email: string,
    password: string
}


const Register = () => {

    const {register,handleSubmit} = useForm<Inputs>({
        shouldUseNativeValidation: true,
      });
    const onSubmit = (data: Inputs) => {alert(data.email + " " + data.password)};

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email',{required:"กรอกด้วยสิ อย่าลืมนะ"})}/>
            <input type="password" {...register('password')}/>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Register