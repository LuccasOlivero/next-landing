import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <Link href={"/"}>Home</Link>
      <ul>
        <li>
          <Link href={"/users"}>Users</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
