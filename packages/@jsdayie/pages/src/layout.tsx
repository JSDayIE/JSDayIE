import React from "react";
import { Navbar, Footer } from "@jsdayie/components";
import { routes, PATHS } from "@jsdayie/config";
import Image from "next/image";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar
        items={routes
          .filter((r) => r.displayInNavBar !== false)
          .map((r) => {
            return {
              href: r.path,
              isIndex: r.isIndex,
              title: r.title,
            };
          })}
      />
      <div className="global-ribbon global-ribbon-top-right">
        <div className="global-ribbon-content">
          <Link href={PATHS.awards}>
            <Image
              alt="JSAwarsIE"
              src="/media/awards.png"
              width="100"
              height="27"
            />
          </Link>
        </div>
      </div>
      <div className="pageBody">{children}</div>
      <Footer
        name="Wolk Software Limited"
        href="http://www.wolksoftware.com"
        year={2018}
      />
    </>
  );
};
