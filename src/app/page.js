import StarWarsCharacter from "./component/StarWarsCharacter";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <StarWarsCharacter />
     <Link href="/profile">StarWarsCharacter</Link>
    </main>
  );
}
