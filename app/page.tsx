'use client'
import { useDynamicContext } from "@dynamic-labs/sdk-react";

import InstructionsComponent from "@/components/instructionsComponent";
import NftGallery from "@/components/nftGalleryComponent";
import styles from "./page.module.css";
import "./globals.css";

export default function Home() {
  const { primaryWallet } = useDynamicContext();
  const address = primaryWallet?.address;

  return (
    <main className={styles.main}>
      <NftGallery pageSize={5} walletAddress={address} collectionAddress={"0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"} chain={"ETH_MAINNET"}></NftGallery>
      <InstructionsComponent></InstructionsComponent>
    </main>
  );
}
