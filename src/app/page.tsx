"use client";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/auth-store";
import Link from "next/link";

export default function Home() {
  const profile = useAuthStore((state) => state.profile);
  return (
    <div className="bg-muted flex flex-col space-y-4 justify-center items-center h-screen">
      <h1 className="text-3xl font-semibold">Welcome {profile?.name}</h1>
      <Link href={profile?.role === "admin" ? "/admin" : "/order"}>
        <Button className="bg-teal-500 text-white">Access Dashboard</Button>
      </Link>
    </div>
  );
}
