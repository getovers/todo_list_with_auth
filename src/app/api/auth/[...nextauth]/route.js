import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongoDB from "../../../../../libs/mongodb";
import User from "../../../../../models/user";
import bcrypt from "bcryptjs";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const {username, password} = credentials;
                // console.log({username, password});
                try {
                    await connectMongoDB();
                    const user = await User.findOne({username})
                    // console.log(user);
                    if (!user) return null;

                    const passwordMatch = await bcrypt.compare(password, user.password);

                    if (!passwordMatch) return null;
                    return user;
                } catch (error) {
                    console.log("Error:", error);
                }
            }
        })
    ],
    callbacks: {
        async session({session, token}) {
            session.user = {...token.user, name: token.user.username};
            ;
            return session;
        },
        async jwt({token, user}) {
            if (user) {
                token.user = user;
            }
            return token;
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
}
const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};