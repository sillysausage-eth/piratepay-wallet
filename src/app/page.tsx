export default function Home() {
  return (
    <div className="grid grid-rows-[80px_1fr_60px] items-center justify-items-center min-h-screen p-8 gap-8 sm:p-12 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">🏴‍☠️</span>
          <h1 className="text-2xl font-bold">PiratePay Wallet</h1>
        </div>
        <nav className="hidden sm:flex gap-6">
          <a href="#features" className="hover:text-gray-600 transition-colors">Features</a>
          <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
        </nav>
        <button className="rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium hover:opacity-80 transition-opacity">
          Launch App
        </button>
      </header>

      <main className="flex flex-col gap-10 items-center text-center max-w-3xl">
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Secure, Fast, & <span className="text-purple-600">Pirate-Approved</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            The crypto wallet that protects your treasure with the strongest encryption
            and makes transactions as swift as the sea wind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="rounded-full bg-black text-white dark:bg-white dark:text-black px-6 py-3 font-medium hover:opacity-80 transition-opacity">
              Get Started
            </button>
            <button className="rounded-full border border-black dark:border-white px-6 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-left">
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
            <p className="text-gray-600 dark:text-gray-400">Protect your digital treasures with military-grade encryption and secure key management.</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-left">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Fast Transactions</h3>
            <p className="text-gray-600 dark:text-gray-400">Send and receive crypto with lightning speed and minimal transaction fees.</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-left">
            <div className="text-3xl mb-4">🌊</div>
            <h3 className="text-xl font-semibold mb-2">Multi-Chain Support</h3>
            <p className="text-gray-600 dark:text-gray-400">Sail the seas of crypto with support for all major blockchains and tokens.</p>
          </div>
        </div>
      </main>

      <footer className="w-full text-center border-t border-gray-200 dark:border-gray-800 py-6">
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="text-gray-600 hover:text-black dark:hover:text-white">
            Twitter
          </a>
          <a href="#" className="text-gray-600 hover:text-black dark:hover:text-white">
            Discord
          </a>
          <a href="https://github.com/sillysausage-eth/piratepay-wallet" className="text-gray-600 hover:text-black dark:hover:text-white">
            GitHub
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © 2024 PiratePay Wallet. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
