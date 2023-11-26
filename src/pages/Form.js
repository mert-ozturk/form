import React from 'react'
import {useForm} from "react-hook-form"
import * as yup from 'yup'

const Form = () => {
  const {register,handleSubmit} = useForm();

  const onSubmit = (data) => {
    console.log(data)

  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Full Name" {...register("fullname")}/>
        <input type="text" placeholder="Email" {...register("email")}/>
        <input type="number" placeholder="Age" {...register("age")}/>
        <input type="password" placeholder="Password" {...register("password")}/>
        <input type="password" placeholder="Confirm Password" {...register("password")}/>
        <input type="submit"/>
    </form>
  )
}

export default Form