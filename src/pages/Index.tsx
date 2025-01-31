import { Search, Settings, Bell, ChevronDown, Copy, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";

const networks = [
  { id: "ERC20", name: "Ethereum", chain: "Ethereum" },
  { id: "ARETH", name: "Arbitrum", chain: "Arbitrum" },
  { id: "ZKSYNC", name: "zkSync Era", chain: "zkSync" },
  { id: "OPTIMISM", name: "Optimism", chain: "Optimism" },
];

const tokens = [
  { symbol: "ETH", name: "Ethereum", balance: "0.6354", value: "$2,580.20", change: "+1.06%" },
  { symbol: "FLOW", name: "Flow", balance: "580.03", value: "$6,187.06", change: "-7.65%" },
  { symbol: "XRP", name: "Ripple", balance: "370.4154", value: "$258.55", change: "+1.42%" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sidebar-accent"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <Settings size={20} className="text-gray-600" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-8">
          <div className="col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <img src="/placeholder.svg" alt="ETH" className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">2.06354 ETH</h2>
                <p className="text-gray-500">Ethereum +0.02%</p>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <button className="px-6 py-2 bg-sidebar-accent text-sidebar font-medium rounded-lg flex items-center gap-2">
                <ArrowUpRight size={20} />
                Send
              </button>
              <button className="px-6 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg flex items-center gap-2">
                <ArrowDownRight size={20} />
                Receive
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Choose network</label>
                <div className="grid grid-cols-4 gap-4">
                  {networks.map((network) => (
                    <button
                      key={network.id}
                      className="p-4 rounded-xl border border-gray-200 hover:border-sidebar-accent focus:border-sidebar-accent focus:outline-none transition-colors"
                    >
                      <p className="font-medium">{network.id}</p>
                      <p className="text-sm text-gray-500">{network.chain}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sidebar-accent"
                    placeholder="0.00"
                  />
                  <button className="absolute right-4 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium">
                    MAX
                  </button>
                </div>
                <p className="mt-2 text-sm text-gray-500">≈ $239.39</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sidebar-accent"
                    placeholder="Recipient address"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Copy size={20} className="text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Total Balance</h2>
              <p className="text-2xl font-bold">$19,280.01</p>
            </div>

            <div className="space-y-6">
              {tokens.map((token) => (
                <div key={token.symbol} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="font-medium">{token.symbol}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium">{token.name}</p>
                      <p className="font-medium">{token.balance}</p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <p className="text-gray-500">{token.value}</p>
                      <p className={token.change.startsWith("+") ? "text-crypto-green" : "text-crypto-red"}>
                        {token.change}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;