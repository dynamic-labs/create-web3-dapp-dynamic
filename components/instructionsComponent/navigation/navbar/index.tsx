'use client'

import {DynamicWidget } from "@dynamic-labs/sdk-react";

import styles from "./navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
        <p>create-web3-dapp</p>
      </a>
      <DynamicWidget />
    </nav>
  );
}
