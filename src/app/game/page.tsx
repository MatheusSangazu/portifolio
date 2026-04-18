import { SpaceGame } from "@/components/SpaceGame";

export const metadata = {
  title: "Asteroid Defense | Matheus Henrique",
  robots: { index: false, follow: false },
};

export default function GamePage() {
  return <SpaceGame />;
}
