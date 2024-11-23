import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className="py-8 xl:py12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Luke <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop and hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="./contact">
            <Button>Hire me</Button>
          </Link>

          {/** Mobile nav */}
          <div className="xl:hidden">mobile nav</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
