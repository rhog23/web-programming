import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

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
  const { data: user } = useCurrentUser();
  return (
    <main>
      <h1 className="text-2xl text-blue-500">Netflix App</h1>
      <p className="text-white">Logged in as: {user?.name}</p>
      <button
        onClick={() => signOut()}
        className="px-5 w-auto h-10 bg-slate-200"
      >
        Sign Out
      </button>
    </main>
  );
}
