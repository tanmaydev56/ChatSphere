"use client";

import { sidebarLinks } from '../../constants/index';
import Link from 'next/link';
import Image from 'next/image';
import { SignedIn, SignOutButton, useAuth } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

const LeftSideBar = () => {
  const pathname = usePathname();
  const { userId } = useAuth();

  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          // Dynamically modify the route for the profile link
          if (link.route === '/newprofile' && userId) {
            link.route = `${link.route}/${userId}`;
          }

          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${isActive ? 'bg-[#3B82F6]' : ''}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-[#1F2937] max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 px-6">
        <SignedIn>
          <SignOutButton redirectUrl="/sign-in">
            <div className="flex cursor-pointer gap-4 p-4">
              <Image
                src="/assets/logout.svg"
                alt="logout"
                width={24}
                height={24}
              />
              <p className="text-[#1F2937] max-lg:hidden">Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftSideBar;
