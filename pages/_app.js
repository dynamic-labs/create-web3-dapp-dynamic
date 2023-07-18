import "../styles/globals.css";

import { DynamicContextProvider } from "@dynamic-labs/sdk-react";

import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";

import { useAccount } from "wagmi";

import MainLayout from "../layout/mainLayout";
import Home from "../components/home/home";

function MyApp({ Component, pageProps }) {
  const { address, isConnected } = useAccount();

  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID,
      }}
    >
      <DynamicWagmiConnector>
        <MainLayout>
          <Home isConnected={isConnected} address={address} />
        </MainLayout>
      </DynamicWagmiConnector>
    </DynamicContextProvider>
  );
}

export default MyApp;
