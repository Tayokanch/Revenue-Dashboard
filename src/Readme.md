***Financial Data Dashboard Documentation***

***Clone the Repo***
https://github.com/Tayokanch/Revenue-Dashboard

***Installation & Running the Application***
* npm install - Install dependencies
* npm run dev - Start the React dev server
NOTE - In a separate terminal, launch the mock API server by running the line below
* npm run json-server


***Features***

**Overview**: Summary cards (revenue, transactions, processed amount)

**PriceData**: Asset price table

**Bills & Revenue:** Bill payment analytics

**Assets & Revenue:** Crypto revenue breakdown

**Platform Balance:** Provider balances with threshold alerts (CEO-only). NOTE: this section is hidden by default, gain Visibilty by providing the ACCESS TOKEN BELOW 
**TOKEN** : eyJyb2xlIjoiQ0VPIiwiZW1haWwiOiJGSUFUVVJFLkNFTy5jby51ayJ9

***Additional Feature***
There is a STICKY CALCULATOR in the Platform Balance section, that allows easy calculation without navigating from the platform

***Notes for Reviewers***

All data is static (simulated via json-server).

CEO access is UI-only for demo purposes (no backend auth).


