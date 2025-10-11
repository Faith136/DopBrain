import NextAuth from "next-auth";
import { authOptions } from "@/utils/authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };











/*import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(request) {
  return NextResponse.json({ time: new Date().toISOString() });
}*/


