import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <h2>Welcome to Wellesley Chinese Language School</h2>
      <a href="./sign-in/page.tsx"><p>Sign-in</p></a>
      <a href="./sign-up/page.tsx"><p>Sign-up</p></a>
    </main>
  );
}
