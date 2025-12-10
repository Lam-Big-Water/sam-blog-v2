import React from "react";
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="block text-2xl font-semibold -leading-2 transition-all duration-400 ease-in-out will-change-transform pointer-fine:hover:font-black">
      Bits & Bytes
    </Link>
  );
};

export default Logo;
