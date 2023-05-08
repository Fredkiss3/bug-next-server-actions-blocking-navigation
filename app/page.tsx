import { revalidatePath } from "next/cache";
import Link from "next/link";

function wait(ms: number): Promise<void> {
  // Wait for the specified amount of time
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Home() {
  async function action() {
    "use server";
    await wait(1000).then((_) => revalidatePath("/"));
  }
  return (
    <main>
      <Link href={`/other-page`}>Go to other page</Link>

      <h1>Bug with server actions blocking UI</h1>
      <form action={action}>
        <button>Perform action</button>
      </form>
    </main>
  );
}
