import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavBarItem {
  isIndex?: boolean;
  title: string;
  href: string;
}

interface NavbarItemsProps {
  items: NavBarItem[];
}

const NavBarItems: React.FC<NavbarItemsProps> = (props) => {
  const { items } = props;
  return (
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      {items
        .filter((i) => i.isIndex !== true)
        .map((item) => {
          return (
            <li className="nav-item" key={item.href}>
              <Link href={item.href}>
                <a className="nav-link">{item.title}</a>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

interface NavbarProps {
  items: NavBarItem[];
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { items } = props;
  const indexItems = items.filter((i) => i.isIndex === true);
  if (indexItems.length > 1) {
    throw new Error("Only one of the items can be the index route!");
  }
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-warning">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {indexItems.length === 1 ? (
            <Link href={indexItems[0].href}>
              <>
                <Image
                  src="https://jsdayie.azureedge.net/data/media/jslogo.png"
                  alt="logo"
                  width="30"
                  height="30"
                />
                <a className="navbar-brand">{indexItems[0].title}</a>
              </>
            </Link>
          ) : null}
          <NavBarItems items={items} />
          <form
            className="form-inline my-2 my-lg-0"
            action="https://ti.to/wolk-software-limited/jsdayie-2023/"
          >
            <button type="submit" className="btn btn-outline-light">
              2023 Tickets
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
