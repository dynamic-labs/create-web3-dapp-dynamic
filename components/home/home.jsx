import styles from "../../styles/Home.module.css";

import { DynamicWidget } from "@dynamic-labs/sdk-react";
import NftGallery from "../nftGallery.jsx";
import TokensBalanceDisplay from "../tokensBalanceDisplay.jsx";

export default function Home({ address, isConnected }) {
  return (
    <div className={styles.container}>
      <DynamicWidget />

      <div className={styles.featureContainer}>
        {isConnected && <NftGallery walletAddress={address} />}
        {isConnected && <TokensBalanceDisplay walletAddress={address} />}
      </div>
    </div>
  );
}
