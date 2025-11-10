import { signIn } from "@/auth"

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-md">
        <div>
          <h2 className="text-center text-3xl font-bold">Sign In</h2>
          <p className="mt-2 text-center text-gray-600">
            เลือกวิธีการเข้าสู่ระบบ
          </p>
        </div>
        
        <div className="space-y-4">
          <form
            action={async () => {
              "use server"
              await signIn("github")
            }}
          >
            <button
              type="submit"
              className="w-full rounded-md bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
            >
              Sign in with GitHub
            </button>
          </form>

          <form
            action={async () => {
              "use server"
              await signIn("google")
            }}
          >
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
            >
              Sign in with Google
            </button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or</span>
            </div>
          </div>

          <form
            action={async (formData: FormData) => {
              "use server"
              await signIn("credentials", formData)
            }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="test@example.com"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-500"
            >
              Sign in with Credentials
            </button>
            <p className="text-xs text-gray-500 text-center">
              Demo: test@example.com / password
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
