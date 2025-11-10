import { auth } from "@/auth"
import Link from "next/link"

export default async function Home() {
  const session = await auth()

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="w-full max-w-2xl space-y-8 rounded-2xl bg-white p-12 shadow-xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            NextAuth Demo
          </h1>
          <p className="text-lg text-gray-600">
            ตัวอย่างการใช้งาน NextAuth v5 ใน Next.js
          </p>
        </div>

        {session?.user ? (
          <div className="space-y-6">
            <div className="rounded-lg bg-green-50 p-6 border border-green-200">
              <h2 className="text-xl font-semibold text-green-800 mb-3">
                ✓ เข้าสู่ระบบแล้ว
              </h2>
              <p className="text-gray-700">
                ยินดีต้อนรับ, <strong>{session.user.name || session.user.email}</strong>
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/dashboard"
                className="flex-1 rounded-lg bg-blue-600 px-6 py-3 text-center text-white font-medium hover:bg-blue-700 transition-colors"
              >
                ไปที่ Dashboard
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="rounded-lg bg-gray-50 p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                ยังไม่ได้เข้าสู่ระบบ
              </h2>
              <p className="text-gray-600">
                กรุณาเข้าสู่ระบบเพื่อเข้าถึง Dashboard
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/auth/signin"
                className="rounded-lg bg-indigo-600 px-6 py-3 text-center text-white font-medium hover:bg-indigo-700 transition-colors"
              >
                เข้าสู่ระบบ
              </Link>
              <Link
                href="/dashboard"
                className="rounded-lg border-2 border-indigo-600 px-6 py-3 text-center text-indigo-600 font-medium hover:bg-indigo-50 transition-colors"
              >
                ลอง Dashboard (จะ redirect ไป signin)
              </Link>
            </div>
          </div>
        )}

        <div className="border-t pt-6 text-sm text-gray-500">
          <h3 className="font-semibold mb-2">คุณสมบัติ:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>GitHub OAuth</li>
            <li>Google OAuth</li>
            <li>Credentials (Email/Password)</li>
            <li>Protected Routes (Middleware)</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
