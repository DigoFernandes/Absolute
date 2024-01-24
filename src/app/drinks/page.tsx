"use client"

import { BackIcon } from "@/components/icons/back-icon";
import styles from "./page.module.css";
import { Card } from "@/components/card";
import { useRouter } from "next/navigation";

interface DrinkPageProps {
  searchParams: {
    search: string;
  };
}
export default function DrinkPage({ searchParams }: DrinkPageProps) {
  const router = useRouter();

  console.log(searchParams.search);

  const handleGoToHome = () => {  
    router.push("/");
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <button className={styles.backBtn} onClick={handleGoToHome}>
          <BackIcon />
        </button>
        <h1 className={styles.title}>{searchParams.search}</h1>

        <div></div>
      </header>
      <div className={styles.cardList}>
        <Card
          imageUrl="https://plus.unsplash.com/premium_photo-1661370085023-16bf34456bbf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Negroni"
        />
      </div>
    </main>
  );
}
