import CredentialsProvider from 'next-auth/providers/credentials'
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password', placeholder: '*****' },
      },
      async authorize(credentials): Promise<any> {
        // const userFound = await db.user.findUnique({
        //   where: {
        //     email: credentials.email,
        //   },
        // })
        const userFound = {
          id: 1,
          username: 'John',
          email: '',
        }
        // if (!userFound) throw new Error('No user found')
        // const matchPassword = await bcrypt.compare(
        //   credentials.password,
        //   userFound.password,
        // )

        // if (!matchPassword) throw new Error('Wrong password')

        const res = {
          id: userFound.id,
          csrfToken: (credentials as { csrfToken?: string }).csrfToken ?? '',
          // name: userFound.username,
          email: credentials?.email,
        }
        return res
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
}
