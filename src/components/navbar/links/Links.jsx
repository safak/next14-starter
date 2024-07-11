"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";

const links = [
	{ id: 1, title: "Home", url: "/" },
	{ id: 2, title: "About", url: "/about" },
	{ id: 3, title: "Blog", url: "/blog" },
	{ id: 4, title: "Contact", url: "/contact" },
];

const Links = () => {
	const [open, setOpen] = useState(false);

	const session = true;
	const isAdmin = true;

	return (
		<div className={styles.container}>
			<div className={styles.links}>
				{links.map((link) => (
					<NavLink item={link} key={link.id} />
				))}
				{session ? (
					<>
						{isAdmin && (
							<NavLink item={{ title: "Admin", url: "/admin" }} />
						)}
						<button className={styles.logout}>Logout</button>
					</>
				) : (
					<NavLink item={{ title: "Login", url: "/login" }} />
				)}
			</div>
			<button
				className={styles.menuBtn}
				onClick={() => setOpen((prev) => !prev)}
			>
				Menu
			</button>
			{open && (
				<div className={styles.mobileLinks}>
					{links.map((link) => (
						<NavLink item={link} key={link.id} />
					))}
				</div>
			)}
		</div>
	);
};

export default Links;
