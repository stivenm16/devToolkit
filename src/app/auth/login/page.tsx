import React from 'react'

import { Header, Layout } from '../../components'
import LoginForm from './components/LoginForm'

const Login: React.FC = () => {
  return (
    <Layout hideHeader={true}>
      <div className="fixed inset-0 flex items-center flex-col justify-center backdrop-blur-xl">
        <div className="absolute top-0 w-full">
          <Header />
        </div>

        <LoginForm />
      </div>
    </Layout>
  )
}

export default Login
