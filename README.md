# NextAuth Demo

โปรเจคตัวอย่างการใช้งาน NextAuth v5 กับ Next.js 15

## การติดตั้ง

```bash
npm install
```

## ตั้งค่า Environment Variables

แก้ไขไฟล์ `.env.local`:

```env
# สร้าง secret key ด้วยคำสั่ง: openssl rand -base64 32
AUTH_SECRET=your-secret-key-change-this-in-production

# GitHub OAuth (ไปสร้างที่ https://github.com/settings/developers)
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

# Google OAuth (ไปสร้างที่ https://console.cloud.google.com/apis/credentials)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

AUTH_URL=http://localhost:3000
```

## การรันโปรเจค

```bash
npm run dev
```

เปิดเบราว์เซอร์ไปที่ [http://localhost:3000](http://localhost:3000)

## การใช้งาน

### 1. Credentials Login (Demo)
- Email: `test@example.com`
- Password: `password`

### 2. GitHub OAuth
- ต้องสร้าง OAuth App ที่ GitHub Settings
- Callback URL: `http://localhost:3000/api/auth/callback/github`

### 3. Google OAuth
- ต้องสร้าง OAuth Client ที่ Google Cloud Console
- Authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`

## โครงสร้างไฟล์

```
├── auth.ts                          # NextAuth configuration
├── middleware.ts                    # Protected routes middleware
├── app/
│   ├── api/auth/[...nextauth]/     # API routes
│   ├── auth/signin/                # Sign in page
│   ├── dashboard/                  # Protected dashboard page
│   └── page.tsx                    # Home page
└── .env.local                      # Environment variables
```

## คุณสมบัติ

- ✅ Multiple authentication providers (GitHub, Google, Credentials)
- ✅ Protected routes with middleware
- ✅ Server-side session handling
- ✅ Custom sign-in page
- ✅ TypeScript support
- ✅ Tailwind CSS styling
