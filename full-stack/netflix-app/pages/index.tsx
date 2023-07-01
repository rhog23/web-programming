import Billboard from "@/components/Billboard";
import Navbar from "@/components/Navbar";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

// import Image from "next/image";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(context: NextPageContext) {
  // creates session, which determines whether a user is logged in or not
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Billboard />
    </main>
  );
}
