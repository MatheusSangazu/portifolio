import { redirect } from "next/navigation";

// Redireciona a rota antiga /check-facil para a nova estrutura /projetos/check-facil,
// preservando links externos que possam apontar para cá.
export default function CheckFacilRedirect() {
  redirect("/projetos/check-facil");
}
