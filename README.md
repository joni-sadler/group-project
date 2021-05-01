# Wearables Group E-Commerce Project

## Introduction

The main objective for our group project for Concordia University’s Full-Stack Web Development Diploma program was to create an e-commerce store that sells wearable technologies. Our goal was to develop a user-friendly website that allows customers to easily navigate through the dataset of 300+ products and to go through a purchase process once products had been added to their cart.


## Project Requirements

Frontend<br />
Allow users to:<br />
View all items in the database<br />
Purchase items that are in stock<br />
View a cart containing the items they intend to purchase<br />
Edit cart before completing purchase<br />

Backend<br />
The node server should:<br />
Be RESTful<br />
Provide the frontend with the required data in a succinct and organized way<br />
Update the inventory as users make purchases<br />


## Packages Used

Frontend:<br />
react-animations<br />
react-icons<br />
react-redux<br />
react-router-dom <br />


## Methodology and Languages

Our tech stack for this project included React.Js, Redux, and Node.Js while styling was primarily executed with Styled-Components. We divided the workload so that each team member had the opportunity to work on both backend and frontend aspects. This allowed us to gain valuable experience with each framework while also cementing our ability to collaborate effectively as a team.


## Features

• Animated burger menu<br />
The hamburger menu is animated with opening and closing animations. The menu items also change position when clicked, and they also change positions if they have sub-menu-items.

• Searchbar<br />
Customers can search and filter through the 300+ products offered on the e-commerce site.

• Filtering of products<br />
Customers are able to filter and sort the products by various parameters such as company name, category, and price.

• Pagination<br />
To make viewing the products more user-friendly, we implemented pagination to allow users to scroll through pages instead of having all the products on the same page.

• Tax calculations<br />
Customers are prompted to select their home province upon checkout. Once they have specified their province, the appropriate taxes are then automatically calculated and added to their total purchase cost.

• Database update<br />
Whenever a certain product is added in the cart, the quantity is updated in the database at the same time, which in turn updates the redux state at the frontend. This enables a live change of the product quantity at every click. This also makes it possible to maintain the maximum number of specific items that the customers can purchase.

• Local storage<br />
Since the project uses redux states for rendering the most updated data, it was imperative to store those states locally using local storage, and update redux state using local storage. This ensures that the entire state persists when the user reloads the page or opens the application again while the server is running.

<img src="./screenshots/homepage.png" style="width: 100%;" />
<img src="./screenshots/lifestyle.png" style="width: 100%;" />
<img src="./screenshots/product.png" style="width: 100%;" />

