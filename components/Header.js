import Head from "next/head";
import Link from "next/link";

function Header({ title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <img src="/tiktok.svg" alt="logo-tiktok" className="logo" />
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <style jsx>{`
          ul {
            padding-left: 0;
            width: 20%;
            display: flex;
            list-style-type: none;
          }
          ul li {
            margin-right: 20px;
          }
          ul li a {
            font-size: 18px;
            font-weight: 700;
          }
        `}</style>
      </ul>
    </>
  );
}

export default Header;
