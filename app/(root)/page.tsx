//app/page.tsx
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1 className="head-text text-left">Home</h1>
    </div>
  );
}
// NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_bmF0dXJhbC1zY3VscGluLTk2LmNsZXJrLmFjY291bnRzLmRldiQ
// CLERK_SECRET_KEY=sk_test_7tNpI0DiuNvXpFvs6kk60yHbIpuTLn4zbjIM4eJTyn

// NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
// NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
// NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
// NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
