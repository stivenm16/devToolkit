'use client'
import { yupResolver } from '@hookform/resolvers/yup'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

interface IFormInput {
  email: string
  password: string
  confirmPassword?: string
}

const schema = yup.object().shape({
  email: yup.string().email().required('Email is a required field'),
  password: yup.string().required('Password is a required field'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Passwords must match'),
})
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) })

  const [isRegister, setIsRegister] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const onSubmit = async (data: IFormInput) => {
    if (data) {
      if (isRegister) {
        // Logica de login, llamada al endpoint de login
        //
        // await fetch('/api/auth/login', {}

        const res = await signIn('credentials', {
          email: data.email,
          password: data.password,
          redirect: false,
        })
        if (res?.error) {
          setError(res?.error)
        } else {
          console.log(res, 'Login')
          router.push('/auth/login')
          router.refresh()
        }
      } else {
        console.log(data, 'Sign up')

        // Logica de registro, llamada al endpoint de crear usuario
        setIsRegister(true)
      }
    }
  }
  return (
    <div className="bg-indigo-800 p-8 rounded-xl shadow-xl h-fit w-3/4 md:w-1/4  relative">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 z-10">
        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-bold mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className={`w-full px-4 py-2 rounded border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            {...register('email', {
              required: {
                value: true,
                message: 'Email is required',
              },
            })}
          />
          <span className="text-white text-xs font-bold mt-1">
            {errors.email?.message}
          </span>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-white font-bold mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: {
                value: true,
                message: 'Password is required',
              },
            })}
            className={`w-full px-4 py-2 rounded border ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          <p className="text-white text-xs font-bold mt-1">
            {errors.password?.message}
          </p>
        </div>

        {!isRegister && (
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-white font-bold mb-1"
            >
              Confirm password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register('confirmPassword', {
                required: {
                  value: true,
                  message: 'confirm Password is required',
                },
              })}
              className={`w-full px-4 py-2 rounded border ${
                errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <p className="text-white text-xs font-bold mt-1">
              {errors.confirmPassword?.message}
            </p>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-indigo-800 text-white py-2 rounded hover:bg-indigo-900 focus:outline-none"
        >
          Login
        </button>
        <p className="text-white text-center pt-auto">
          {isRegister ? 'Already have an account?' : "Don't have an account?"}
          <span
            className="text-indigo-300 cursor-pointer ml-2"
            onClick={() => setIsRegister(!isRegister)}
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  )
}

export default LoginForm
