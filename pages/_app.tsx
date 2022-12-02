import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useMemo } from 'react';
import { ExodusWalletAdapter, PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';


export default function App({ Component, pageProps }: AppProps) {
  const endpoint = "https://solana-mainnet.g.alchemy.com/v2/575tomZNC-UI6pDC_9GR8kY4SIKrfYmc"

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new ExodusWalletAdapter()
    ], []
  );
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          <Component {...pageProps} />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
