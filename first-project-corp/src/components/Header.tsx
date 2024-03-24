import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full z-10 text-white absolute">
      <nav className="container mx-auto relative p-8 flex flex-wrap justify-between items-center">
      <Link href="/" className="text-3xl font-semibold">Home</Link>
      <div className="space-x-7 text-xl">
      <Link href="/performance">Performance</Link>
      <Link href="/reliability">Reliability</Link>
      <Link href="/scale">Scale</Link>
      </div>
      </nav>
    </div>
  );
};

export default Header;
