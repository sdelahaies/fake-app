// app/page.js
import { redirect } from "next/navigation";

export default function Home() {
    redirect("/login");  // Redirect to login page by default
}