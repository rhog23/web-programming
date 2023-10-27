import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-orange-300 px-8 py-3">
      <Link className="font-bold" href={"/"}>
        Home
      </Link>
      <Link
        className="bg-orange-600 rounded-sm text-white p-2"
        href={"/add-topic"}
      >
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;
