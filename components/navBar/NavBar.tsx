import React from 'react';
import Link from "next/link";

import styles from './NavBar.module.css';

type TNavBarProps = {}

export const NavBar: React.FC<TNavBarProps> = (props) => {
    return (
        <nav className={styles.navBarContainer}>
            <ul className={styles.navList}>
                {
                    [["/", "Main"],
                        ["/users", "Users"],
                    ].map(([href, label]) => <li key={href}><Link href={href} className={styles.navList__link}>{label}</Link></li>)
                }
            </ul>
        </nav>
    );
}

