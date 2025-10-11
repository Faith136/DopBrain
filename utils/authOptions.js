import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/model/User';
import bcrypt from 'bcrypt';
import dbConnect from '@/utils/dbConnect';

export const authOptions = {
session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
      dbConnect();
        const { email, password } = credentials;
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("invalid email");
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
          throw new Error("Invalid password");
        }
        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,    //later when the user tries to access to a page that requires authenticated user they will be redirected to the login page
  pages: {
    signIn: "/login"
  }
}