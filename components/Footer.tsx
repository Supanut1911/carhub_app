"use client";

import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-4 py-10">
        <div className="flex flex-col justify-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub 2023 <br /> All Rights Reserved &copy;
          </p>
        </div>
      </div>
      <div className="footer__links sm:px-16 px-4">
        {footerLinks.map((footer) => {
          return (
            <div className="footer__link" key={footer.title}>
              <h3 className="font-bold">{footer.title}</h3>
              {footer.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p className="sm:text-sm text-sm">@2023 Carhub. All rights reserve</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500 text-sm">
            Privacy policy
          </Link>
          <Link href="/" className="text-gray-500 text-sm">
            Tern of use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
