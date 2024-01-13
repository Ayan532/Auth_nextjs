import { LoginButton } from "@/components/auth/login-button"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"

const fonts=Poppins({
  subsets:['latin'],
  weight:['600']
})
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center 
      bg-sky-500
    ">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md",
          fonts.className,
        )}>
        🔐Auth
        </h1>
        <p className="text-white text-lg">A Simple Authentication Sevice</p>
        <div>
          <LoginButton>

            <Button variant={'secondary'} size={'lg'}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}
