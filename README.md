# NORTHWIND front end

[Client app](https://northwind-ggzk.onrender.com)

Northwind front end was created to help organize orders in northwind database.

The Northwind sample database was provided with Microsoft Access as a tutorial schema for managing small business customers, orders, inventory, purchasing, suppliers, shipping, and employees. Northwind is an excellent tutorial schema for a small-business ERP, with customers, orders, inventory, purchasing, suppliers, shipping, employees, and single-entry accounting.

All the TABLES and VIEWS from the MSSQL-2000 version have been converted to Sqlite3 and included here. Included is a single version prepopulated with data. Should you decide to, you can use the included python script to pump the database full of more data.

TerveysHelppi was created to help organize your important health information and make it easy to access in a central and secure place. This application acts as a coach who gives you standardized and reliable information for your health and fitness.

## App features

<ul>
  <li> Display list of orders from northwind database with pagination
  <li> Filter orders base on product name and status of delivery
  <li> Display information of order
  <li> Warning the order is late or was delivery out of time
</ul>
  
## A sneak peek of Northwind!!

- Start application: Loading the data
<p align="center">
  <img src="https://user-images.githubusercontent.com/73076333/227782641-3e95317d-93d4-4dfb-b5ee-390608d77e42.png" width="750"> 
</p> 

- Fetched orders data from database
<p align="center">
  <img src="https://user-images.githubusercontent.com/73076333/227782781-99d11d5b-e9ea-44c3-b143-9606c9bab37d.png" width="750"> 
</p> 

- Filter orders data with name of products
<p align="center">
  <img src="https://user-images.githubusercontent.com/73076333/227782843-bfe128f0-345f-4370-aec4-aab5641a71b6.png" width="750"> 
</p>

- Filter orders data with name of product and status of delivery
<p align="center">
  <img src="https://user-images.githubusercontent.com/73076333/227782994-652f6075-7a57-43a6-a486-f0983401a8a4.png" width="750"> 
</p> 

- Filter orders data when no result
<p align="center">
  <img src="https://user-images.githubusercontent.com/73076333/227783012-fe7c1de0-d5e3-4a4c-bf6a-576e98dac3a1.png" width="750"> 
</p> 

- Order details
<p align="center">
  <img src="https://user-images.githubusercontent.com/73076333/227783075-e11b131d-46da-45ea-8afb-912ad83c0304.png" width="750"> 
</p> 

## Installation

1. Clone northwind_frontend to local:
```
$ git clone git@github.com:minhson0506/northwind_frontend.git
```
2. Build and run project:
```
$ cd northwind_backEnd
$ npm i
$ npm run dev
```
3. Build and run project:
```
$ npm run test
```



