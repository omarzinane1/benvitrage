import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-end gap-2">
        <Image src="/logo2.png" alt="logo" width={120} height={120} />
      </div>
    </Link>
  );
};

export default Logo;
