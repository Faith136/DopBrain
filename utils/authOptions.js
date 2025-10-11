import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;

        // 👇 import here so it's not run during build
        const dbConnect = (await import("@/utils/dbConnect")).default;
        const User = (await import("@/model/User")).default;

        await dbConnect();
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("Invalid email");
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
          throw new Error("Invalid password");
        }

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};
