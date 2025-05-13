# Pure Farm
Pure Farm is a multi-vendor marketplace for farmers and organic food lovers. It enables farmers to sell their farm produce easily and simply by just registering on the platform and starting to upload the food box that they want to sell. On the other hand, buyers can get on the platform and search for the food boxes they want.

At first glance of the platform, you will be greeted with a beautiful landing page, and you can see some of the food boxes on the overview of the landing page, and on the market, where you see all the food boxes available on the platform. As an unregistered user, you can view all the products, view the farmers currently registered on the platform, and add food boxes to your cart.

When a user registers as a customer, they will have access to a profile page where they can edit their profile and make some changes if there was a mistake. Then, they can continue to enter their delivery address, place an order, and make a purchase.

When a user registers as a farmer, they have all the privileges of á customer and the extra privilege of having a dashboard where they can manage their digital farm. On this dashboard, they can delete an unwanted product or edit the product information. They can also create a new product, where a lot of information would be needed about the food box and what is in it.

## Main Technologies Used to Build the App

Next.js
Node.js
MongoDB
Material ui
Paypal Payment
Cloudinary

## The application is fully deployed on
VERCEL: [Vercel](https://pure-farm.vercel.app/)

## Setup

If you would like to set up the project yourself, follow these steps:

## MongoDB Atlas

- The application requires MongoDB Atlas in order to work.
- It is necessary to create or have a [MongoDB Atlas Account](https://account.mongodb.com/account/login) for that.
- Once you finish that, you must create a new cluster if you don't have one yet.
- Stick to the instructions of the [Official Documentation](https://docs.atlas.mongodb.com/tutorial/create-new-cluster/) to do that.
- Please make sure you select a shared database since it is the only one that is free.
- After having done all of the previous steps, you should see your cluster under Deployment/Databases.
- Click on 'Browse Collections'.
- Create a new database with a name you would like.
- Return to the main page under Deployment/Databases once you've created the database.
- Click on 'Connect' and then click on 'Connect your application'.
- Copy the connection string starting with 'mongodb+srv...'. You will need it for the next step.

## Cloning the Project

- Clone the project using git clone.
- Add your project to your GitHub Profile.
- After you're done with that, open your code editor and terminal.
- Run yarn to install all the required dependencies.

- Create a .env.local file in the root directory.

- You need to declare seven environment variables in there:

- MONGODB_URI (with the value of the connection string you copied from MongoDB Atlas).

- DB_Name (with the value of the database name you created within the cluster).

- JWT_SECRET (This will be needed if you want the user authentication functionality).

- PAYPAL_CLIENT_ID (For PayPal payment to work, you will need this from the PayPal developer sandbox; follow the instructions there.)

- CLOUDINARY_CLOUD_NAME (This information you need to get the picture upload functionality).

- CLOUDINARY_API_KEY (This is the information you need to get the picture upload functionality).

- CLOUDINARY_API_SECRET (This is the information you need to get the picture upload functionality).

## SOME VISUALS

![Landing Image](https://i.imgur.com/AgCsF2k.png)
\
&nbsp;
\
&nbsp;
![Landing Image](https://i.imgur.com/62NYybP.png)
\
&nbsp;
\
&nbsp;
![Landing Image](https://i.imgur.com/mIXcBNX.png)


## Info
The updated version of Pure Farm has the latest Next.js, TypeScript, and other important improvements. The old version with Next.js Page route can be found here 👉 https://github.com/Eprince-hub/pure-farm

### Thanks For Viewing

