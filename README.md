# PledgeCraft_Project

Kickstarter is a platform where people aka contributors fund money to a project creator who has listed his or her product in the platform in hopes of uilding it. It is kind of like a fundraiser for creating a new project to life. The contributors donate some money to the building of the project which helps the project creator to create the project. 

### Problem

The problem is that some creators turn out to be scammers, who have no intention in creating the product but hoard all the campaign money for their personal benefits. As of now, after contributors donate their money, they dont have any say in how the campaign money is used by the creator since Kickstarter directly deposits these funds to the Private bank account of the creator. The money spent is in complete autonomy to the creator while the donators have no idea about it.

### Solution

One of the solution is that we can develop a Ethereum Smart contract in which the entire Kickstarter campaign money be sent. Now the contributors would send their money to the Eth smart contract. After this, the creator now has to create a **SPENDING REQUEST** which would be approved by all the contributors using a Majority Voting system. After having majority votes as **YES** then the spending request gets approved which and the money needed to buy any manufacturing materials can be directly send to the Address of the specific vendor who sells the materials. 

Although this is not a perfect solution since the creator can obviosuly give a fake address of the vendor or we dont know if all the contributors would vote for the project or not. But it is one of the steps to having a clean system of contribution.

Allows you to create and manage campaigns in Sepolia network using Ethereum smart contracts.

Packages utilized:
  - [Next JS](https://nextjs.org/) - Server Rendered Apps
  - [Web3 JS](https://web3js.readthedocs.io/en/1.0/) - Ethereum Javascript API
  - [Semantic UI](https://react.semantic-ui.com/) - User Interface

![Ethereum Kickstarter Project](https://i.imgur.com/ZJnIbFN.gif)

## Pre-Requisites

You need to install [metamask browser extension](https://metamask.io/) and create an account.

Once your account is ready, you need to add some ether balance using [Sepolia Authenticated Faucet](https://www.alchemy.com/faucets/ethereum-sepolia).

In the absence of Metamask, the project will fallback to using [Infura node](https://infura.io/) to access Sepolia network.

## Smart Contract

Campaign contract is deployed at address `0x2280cB3780CACe8da81dF119f9af16F3aF73c02A` and is available inside the contracts folder.

Our app will interact with the deployed contract to create campaigns.

## Running the project

```
npm run dev
```

Go to browser at address http://localhost:3000 to access the web page.

Next JS performs server side rendering of the pages and hot reloading as you make any changes to the code.

## Operations

### Create Campaign

You can create a campaign by specifying a minimum contribution required. 

Once the campaign is created, you become the manager of the campaign and will be able to create requests which needs to be approved by the contributors.

Any user who contributes below the requirement for the campaign will have their transaction rejected.

### View Campaign

Shows details of the campaign such as address of the account which created the campaign, minimum contribution required, campaign balance, number of people who have donated for the campaign and number of requests created by the manager.

### Contribute

Allows you to contribute to the campaign.

### View Requests

List the requests created by the manager for the campaign.

Contributors can approve the requests.

Once the approval criteria is met, the manager can finalize the request for payment to the recipient.

### Add Request

Manager of a campaign can create a request which will be fulfilled by the recipient.

Once more than 50% of the campaign contributors approve the request, the manager can finalize the payment to the vendor. 
