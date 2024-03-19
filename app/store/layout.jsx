import Link from "next/link";

function StoreLayout({ children }) {
  return (
    <>
      <nav>
        <h3>Secction</h3>

        <ul>
          <li>
            <Link href="/store/category">Category</Link>
          </li>
          <li>
            <Link href="/store/category/computer">Computers</Link>
          </li>
        </ul>
      </nav>

      {children}
    </>
  );
}

export default StoreLayout;
