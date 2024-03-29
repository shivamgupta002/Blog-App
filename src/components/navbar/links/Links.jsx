"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
const links = [
  {
    title: "HomePage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
const Links = () => {
  const [open, setOpen] = useState(false);
  //Temporary
  const session = true;
  const isAdmin = true;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.links}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
          {session ? (
            <>
              {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            <NavLink item={{ title: "login", path: "/login" }} />
          )}
        </div>
        {/* <button onClick={() => setOpen((prev) => !prev)} className={styles.menuButton}>Menu</button> */}
        <Image src="/menu.png" alt="hamburger" width={30} height={30} onClick={() => setOpen((prev) => !prev)} className={styles.menuButton} />
        {open && (
          <div className={styles.mobileLinks}>
            {links.map((link) => (
              <NavLink item={link} key={link.title} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Links;
