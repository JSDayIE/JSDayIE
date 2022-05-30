import React from "react";
import { Navbar, Footer } from "@jsdayie/components";
import { routes } from "@jsdayie/config";

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
      <div className="pageBody">{children}</div>
      <Footer
        name="Wolk Software Limited"
        href="http://www.wolksoftware.com"
        year={2018}
      />
    </>
  );
};
