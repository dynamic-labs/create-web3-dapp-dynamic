import { useState, useEffect } from "react";
import styles from "../styles/TokensBalanceDisplay.module.css";

// Define TokensBalancePanel component
export default function TokensBalancePanel({ walletAddress, chain }) {
  // Define state variables using the useState hook
  const [tokensBalance, setTokensBalance] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [address, setAddress] = useState();
  // Define function to get token balances
  const getBalance = async () => {
    setIsloading(true);
    if (walletAddress) {
      try {
        const fetchedTokensBalance = await fetch("/api/getTokensBalance", {
          method: "POST",
          body: JSON.stringify({
            address: address,
            chain: chain ? chain : "ETH_MAINNET",
          }),
        }).then((res) => res.json());
        setTokensBalance(fetchedTokensBalance);
      } catch (e) {
        console.log(e);
      }
    }
    setIsloading(false);
  };

  // Hydration error guard
  useEffect(() => {
    if (walletAddress?.length) setAddress(walletAddress);
  }, [walletAddress]);

  //   Fetch token balances when page loads

  useEffect(() => {
    if (address) getBalance();
  }, [address]);

  // Render TokensBalancePanel component
  return (
    <div className={styles.token_panel_container}>
      <div className={styles.tokens_box}>
        {address?.length ? (
          <div className={styles.header}>
            {address?.slice(0, 6)}...
            {address?.slice(address.length - 4)}
          </div>
        ) : (
          ""
        )}

        {isLoading
          ? "Loading..."
          : tokensBalance?.length &&
            tokensBalance?.map((token, i) => {
              const convertedBalance = Math.round(token.balance * 100) / 100;
              return (
                <div key={i} className={styles.token_container}>
                  <div className={styles.token_name_logo}>
                    {token.logo ? (
                      <div className={styles.image_container}>
                        <img src={token.logo} alt={""}></img>
                      </div>
                    ) : (
                      <div className={styles.image_placeholder_container}></div>
                    )}
                    <div className={styles.coin_name}>
                      {token.name?.length > 15
                        ? token.name?.substring(0, 15)
                        : token.name}
                    </div>
                  </div>
                  <div className={styles.token_info}>
                    <div className={styles.price}>{convertedBalance}</div>
                    <div className={styles.coin_symbol}>{token.symbol}</div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}