import Link from "next/link";
import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { SolanaLogo } from "components";

export const HomeView: FC = () => {
  const { publicKey } = useWallet();

  return (
    <div className="container mx-auto max-w-7xl p-5">
      <nav className="bg-gray-800 text-white rounded-lg shadow-md mb-10 p-4 flex justify-between items-center">
        <button className="text-4xl hover:text-gray-400">🦤</button>
        <h1 className="text-2xl font-bold text-gray-200">Caw Caw</h1>
        <WalletMultiButton className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
      </nav>

      <main className="text-center">
        <section className="bg-white shadow-xl rounded-lg p-8 mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to Multisend Solana DApp</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            A decentralized application (DApp) designed for seamless and efficient management of Solana transactions.
            It enables users to send sol (or lamports) to both individual and multiple accounts with ease and security.
            This project features a user-friendly React frontend, styled using Tailwind CSS.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            Solana wallet adapter is connected and ready to use.
          </p>
          <p className="text-lg font-semibold">
            {publicKey ? <>Your address: <span className="text-blue-500">{publicKey.toBase58()}</span></> : "Connect your wallet to display the address."}
          </p>
        </section>

        <section className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Explore:</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/multi">
                <a className="text-3xl font-bold text-blue-500 hover:text-blue-600 hover:underline">🐦 -- Multisend Solana dApp</a>
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};
