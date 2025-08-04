import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-muted flex flex-col space-y-4 justify-center items-center h-screen">
      <h1 className="text-3xl font-semibold">Welcome Fajri Dwi Septariady</h1>
      <Link href="/admin">
        <Button className="bg-teal-500 text-white">Access Dashboard</Button>
      </Link>
    </div>
  );
}
