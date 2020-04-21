
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/nyatindopatrick/mesg-mpesa-service">
    <img src="https://user-images.githubusercontent.com/48393059/79856716-6096f500-83d5-11ea-81b4-2b063e0cca08.jpg" alt="Logo" width="150" height="80">
  </a>

  <h3 align="center">MPesa MESG Service</h3>

  <p align="center">
    Charge customers easily through MPesa and get payment notifications in real time
    <br />
    <a href="https://github.com/nyatindopatrick/mesg-mpesa-service"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/nyatindopatrick/mesg-mpesa-service/issues">Report Bug</a>
    ·
    <a href="https://github.com/nyatindopatrick/mesg-mpesa-service/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
- [Installation](#installation)
  - [Built With](#built-with)
- [Live version](#live-version)
- [Contributor](#contributor)
- [Acknowledgements](#acknowledgements)
- [📝 License](#%f0%9f%93%9d-license)

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://user-images.githubusercontent.com/48393059/79856716-6096f500-83d5-11ea-81b4-2b063e0cca08.jpg)

<!-- ABOUT THE PROJECT -->
## Contents

- [Installation](#Installation)
  - [MESG SDK](#MESG-SDK)
  - [Deploy the Service](#Service)
- [Definitions](#Definitions)
  - [Events](#Events)
    - [charged](#charged)
  - [Tasks](#Tasks)
    - [charge](#charge)

## Installation

### MESG SDK

This service requires [MESG SDK](https://github.com/mesg-foundation/engine) to be installed first.

You can install MESG SDK by running the following command or [follow the installation guide](https://docs.mesg.com/guide/start-here/installation.html).

```bash
npm i -g @mesg/cli
```

### Deploy the Service

To deploy this service, go to [this service page](https://marketplace.mesg.com/services/mesg-mpesa-service) on the [MESG Marketplace](https://marketplace.mesg.com) and click the button "get/buy this service".

## Definitions

### Events

<h4 id="charged">charged</h4>

Event key: `charged`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **amount** | `amount` | `Number` | Amount in cents of the charge |
| **currencyCode** | `KES` | `String` | Currency used to charge |
| **Source** | `ProductName` | `String` | name of your Africa's Talking payment product |
| **paid** | `paid` | `Boolean` | Boolean that indicates if the payment has been done |
| **metadata** | `metadata` | `Object` | This metadata will be included when we send back the final payment notification |

### Tasks

<h4 id="charge">charge</h4>

Task key: `charge`



##### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **phone** | `phone` | `Number` | Phone Number of the user to charge |
| **amount** | `amount` | `Number` | Amount to charge, this value should be in cents |
| **africansTalkingSecretKey** | `africasTalkingSecretKey` | `String` | The secret key for the AfricasTalking API  |
| **Source** | `metadata` | `Object` | Some meta data related to the payment |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **stransactionId** | `id` | `String` | ID of the charge on AfricansTalking |
| **amount** | `amount` | `Number` | Amount in cents of the charge |
| **Status** | `String` | Status message related to the payment |

## Below is a sample wallet transfer response for a successful request:

{
    `status`: `Success`,
    `description`: `Topped up user stash. New Stash Balance: KES 1500.00`,
    `transactionId`: `ATPid_SampleTxnId123`,
}


### Built With
This project was built using these technologies.
* Docker
* Node
* VsCode

<!-- LIVE VERSION -->
## Live version

You can see it working [here](https://youtube.com)

<!-- CONTACT -->
## Contributor

👤 **Patrick Nyatindo** 
    
- LinkedIn: [Patrick Nyatindo](https://www.linkedin.com/in/dickens-juma-363061182/) 
- GitHub: [@nyatinopatrick](https://github.com/nyatindopatrick/)
- E-mail: nyatindopatrick@gmail.com

👤 **Cyrus Kiprop** 
    
- LinkedIn: [Cyrus Kiprop](https://www.linkedin.com/in/dickens-juma-363061182/) 
- GitHub: [@Cyrus-Kiprop](https://github.com/Cyrus-Kiprop)
- E-mail: cyruskiprop254@gmail.com

👤 **Dickens Juma** 
    
- LinkedIn: [Dickens Juma](https://www.linkedin.com/in/dickens-juma-363061182/) 
- GitHub: [@DickensJuma](https://github.com/DickensJuma)
- E-mail: dickensjuma13@gmail.com


## Show your support

Give a ⭐️ if you like this project!

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [MESG](https://mesg.com/)
* [AfricansTalking](https://africastalking.com/)
* [Devpost](https://devpost.com/)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/nyatindopatrick/mesg-mpesa-service.svg?style=flat-square
[contributors-url]: https://github.com/nyatindopatrick/mesg-mpesa-service/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/nyatindopatrick/mesg-mpesa-service.svg?style=flat-square
[forks-url]: https://github.com/nyatindopatrick/mesg-mpesa-service/network/members
[stars-shield]: https://img.shields.io/github/stars/nyatindopatrick/mesg-mpesa-service.svg?style=flat-square
[stars-url]: https://github.com/nyatindopatrick/mesg-mpesa-service/stargazers
[issues-shield]: https://img.shields.io/github/issues/nyatindopatrick/mesg-mpesa-service.svg?style=flat-square
[issues-url]: https://github.com/nyatindopatrick/mesg-mpesa-service/issues
[product-screenshot]: https://user-images.githubusercontent.com/48393059/79856716-6096f500-83d5-11ea-81b4-2b063e0cca08.jpg

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.