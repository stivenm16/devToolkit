import React from "react";
import githubIcon from "../../../../../public/social-github.svg";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const GithubBtn = () => {
  const urlBackend = process.env.NEXT_PUBLIC_BACKEND_URL;
  const gitClientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;


  return (
    <Link href={`https://github.com/login/oauth/authorize?client_id=${gitClientId}&redirect_uri=${urlBackend}/auth/github/callback&scope=user:email`}>
      <div className='flex w-full justify-center p-4'>
        <Image src={githubIcon} alt='Github Icon' className='w-1/4 cursor-pointer'/>
      </div>
    </Link>
  );
};

export default GithubBtn;
