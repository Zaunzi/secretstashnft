import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";

// This is the chainId your dApp will work on.

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={"polygon"}>
      <Head>
        <title>Secret Stash</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Secret Stash Minting dApp - Discover a world of digital treasures hidden within the Secret Stash! Unlock the gateway to an ever-evolving collection of unique NFT collectibles, blending art, utility, and rarity."
        />
        <meta
          name="keywords"
          content="Secret Stash Minting dApp - Discover a world of digital treasures hidden within the Secret Stash! Unlock the gateway to an ever-evolving collection of unique NFT collectibles, blending art, utility, and rarity."
        />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
