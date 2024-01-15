'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Header } from '../components'

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [error, setError] = useState(null)

  const onSubmit = handleSubmit(async (data: any) => {
    if (data) {
      // const res = await signIn('credentials', {
      //   email: data.email,
      //   password: data.password,
      //   redirect: false,
      // })
      // if (res.error) {
      //   setError(res.error)
      // } else {
      //     console.log(res)
      // }\
      console.log(data, 'data')
    }
  })

  return (
    <div className="bg-indigo-400 min-h-screen">
      <div className="fixed inset-0 flex items-center flex-col justify-center backdrop-blur-xl">
        <Header />
        <div className="bg-indigo-600 p-8 rounded-xl shadow-xl h-2/3 w-1/3 mb-44 mt-10 relative">
          <form onSubmit={onSubmit} className="space-y-4 z-10">
            {error && (
              <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">
                {error}
              </p>
            )}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white font-bold mb-1"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                // onChange={handleInputChange}
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
              {/* <span className="text-red-500 text-xs mt-1">
                {errors.email?.message}
              </span> */}
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-white font-bold mb-1"
              >
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
              {/* <p className="text-red-500 text-xs mt-1">{errors.password}</p> */}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-800 text-white py-2 rounded hover:bg-indigo-900 focus:outline-none"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
