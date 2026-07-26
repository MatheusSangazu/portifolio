import { redirect } from "next/navigation";

// Redirecionamento permanente para a versão em português.
export default function BioRedirect() {
  redirect("/pt/bio");
}
