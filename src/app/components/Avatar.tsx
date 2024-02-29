"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import { Button } from ".";
import Image from "next/image";
import { redirect } from "next/navigation";
import { log } from "console";

const Avatar = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);  
  const session = useSession();
  
  let loggedUser = JSON.parse(localStorage.getItem("user")!);
  
  // console.log(avatar, "AVATAR");
  // console.log(loggedUser, "LOGGEDUSER");

  const toggleDropDown = () => {
    setShowDropdown(!showDropdown);
  };
  const logOut = () => {
    localStorage.removeItem("user");
    console.log("click");
    window.location.href = "/";
  };

  return (
    <div className='absolute top-4 right-8 transition-all ease-in-out grid gap-3 justify-items-end'>
      {!!loggedUser ? (
        <div
          onClick={toggleDropDown}
          className='relative inline-flex items-center justify-center w-14 h-14 cursor-pointer overflow-hidden bg-indigo-100 rounded-full dark:bg-indigo-600'
        >
          <Image
            src={loggedUser?.user.avatar_url}
            alt='avatar'
            width={56}
            height={56}
          ></Image>
        </div>
      ) : (
        <Link href={"/auth/login"}>
          <div className='relative w-9 h-9  overflow-hidden cursor-pointer hover:bg-indigo-800 bg-indigo-700 transition ease-in-out rounded-full dark:bg-indigo-900'>
            <svg
              className='absolute w-11 h-11 text-indigo-300 -left-1 '
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                clipRule='evenodd'
              ></path>
            </svg>
          </div>
        </Link>
      )}
      {showDropdown && (
        <div className='z-10 bg-white divide-y px-3 divide-indigo-100 rounded-lg shadow-lg w-44 dark:bg-indigo-900 dark:divide-indigo-600'>
          <div className='px-4 py-3 text-sm text-indigo-900 dark:text-white'>
            <div>{(loggedUser as any).user.displayName}</div>
            <div className='font-medium truncate'>
              {(loggedUser as any).user.username}
            </div>
          </div>
          <ul
            className='py-2 text-sm text-indigo-700 dark:text-indigo-200'
            aria-labelledby='dropdownUserAvatarButton'
          >
            <li>
              <a
                href='#'
                className='block px-4 py-2 hover:bg-indigo-100 dark:hover:bg-indigo-600 dark:hover:text-white'
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block px-4 py-2 hover:bg-indigo-100 dark:hover:bg-indigo-600 dark:hover:text-white'
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block px-4 py-2 hover:bg-indigo-100 dark:hover:bg-indigo-600 dark:hover:text-white'
              >
                Earnings
              </a>
            </li>
          </ul>
          <div className='py-2'>
            <span
              onClick={logOut}
              className='block cursor-pointer px-4 py-2 text-sm text-indigo-700 hover:bg-indigo-100 dark:hover:bg-indigo-600 dark:text-indigo-200 dark:hover:text-white'
            >
              Sign out
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
