import { auth, signOut } from "@/auth"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const session = await auth()
  
  if (!session?.user) {
    redirect("/auth/signin")
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">ข้อมูลผู้ใช้</h2>
            <div className="space-y-2">
              <p><strong>Name:</strong> {session.user.name || "N/A"}</p>
              <p><strong>Email:</strong> {session.user.email || "N/A"}</p>
              {session.user.image && (
                <div>
                  <strong>Avatar:</strong>
                  <img 
                    src={session.user.image} 
                    alt="User avatar" 
                    className="mt-2 h-16 w-16 rounded-full"
                  />
                </div>
              )}
            </div>
          </div>

          <form
            action={async () => {
              "use server"
              await signOut()
            }}
          >
            <button
              type="submit"
              className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-500"
            >
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
