 
#ADGCOIN BANK
pragma solidity ^0.8.1;
contract ADGCOIN {
    address payable private owner;
    event LogDeposit(uint amount, address indexed sender);
    event LogWithdrawal(uint amount, address indexed recipient);

    constructor() {
        owner = payable(msg.sender);
    }
    function deposit() public payable {
        require(msg.value > 0, "Must send ADGCOIN.");
        emit LogDeposit(msg.value, msg.sender);
    }
    function withdraw(uint amount, address payable recipient) public {
        require(msg.sender == owner, "Only the owner of this wallet can withdraw.");
        require(address(this).balance >= amount, "Not enough funds.");
        emit LogWithdrawal(amount, recipient);
        recipient.transfer(amount);
    }
}
contract ADCCOINTOKEN {
    address public owner;
    uint256 public constant token_supply = 1000000000000;  
    mapping (address => uint) public balances;
    constructor() {
        owner = msg.sender;
        balances[owner] = token_supply;
    }
    function transfer(address receiver, uint amount) public {
      
        require(amount <= balances[msg.sender], "Insufficient balance.");
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
    }
}
const adgcoin = require("adgcoin");
const mnemonic = "announce room limb pattern dry unit scale effort smooth jazz weasel alcohol";
const walletMnemonic = adgcoin.Wallet.fromMnemonic(mnemonic);
const walletPrivateKey = new adgcoin.Wallet(walletMnemonic.privateKey);
const randomWallet = adgcoin.Wallet.createRandom();

walletMnemonic.address;
walletMnemonic.privateKey;
walletMnemonic.publicKey;
const tx = {
  to: "0x8ba1f109551bD432803012645Ac136ddd64DBA72",
  value: adgcoin.utils.parseEther("1.0"),
};
walletMnemonic.signTransaction(tx);
const wallet = walletMnemonic.connect(provider);
wallet.getBalance();
wallet.getTransactionCount();
wallet.sendTransaction(tx);

contract ADGCOINDOMAINRegistry {
    address public owner;
    uint constant public DOMAIN_NAME_COST = 1 adgcoin; 
    mapping (string => address) public domainNames;
    constructor() {
        owner = msg.sender;
    }  
    function register(string memory domainName) public payable {
        require(msg.value >= DOMAIN_NAME_COST, "Insufficient amount.");
        require(domainNames[domainName] == address(0), "Domain name already registered.");
        domainNames[domainName] = msg.sender;
    } 
    function transfer(address receiver, string memory domainName) public {
        require(domainNames[domainName] == msg.sender, "Only the domain name owner can transfer.");
        domainNames[domainName] = receiver;
    }
    function withdraw() public {
        require(msg.sender == owner, "Only the contract owner can withdraw.");
        payable(msg.sender).transfer(address(this).balance);
    }
}
      
