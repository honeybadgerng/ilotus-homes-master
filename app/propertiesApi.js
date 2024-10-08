// propertiesApi.js

// Sample data for properties and locations
export const properties = [
  {
    id: "1",
    title: "Airlotus Court",
    location: "Lekki",
    images: [
      require("../assets/app_pix/aviation3.jpg"),
      require("../assets/app_pix/aviation4.jpg"),
      require("../assets/app_pix/aviation5.jpg"),
      require("../assets/app_pix/aviation6.jpg"),
      require("../assets/app_pix/aviation7.jpg"),
      require("../assets/app_pix/aviation8.jpg"),
      require("../assets/app_pix/aviation9.jpg"),
      require("../assets/app_pix/aviation10.jpg"),
      require("../assets/app_pix/ilotusflyer.jpeg"),
      // Add more images as needed
    ],
    price: "₦34,000,000",
    description: `AIRLOTUS COURT

WELCOME TO THE LUXURY LIFESTYLE!!!

Every investor needs to invest their money on a property with high rate of Return on Investment (ROI), Fast Developing Area with Good Title and very Serene Environment.

AIRLOTUS COURT is one of those Estates that appreciates so fast and allows your investment put smiles on your face.

This Estate has beautiful topography (100% dry land)  with instant allocation. 

Location: Lekki Aviation Town, Eleko, Lagos. 

LANDMARKS
◼️Lekki free trade zone
◼️Alaro City
◼️Pan Atlantic University 
◼️Proposed International Airport 

🚙 30 minutes drive from Ajah roundabout. 

🚦Tarred road from Lekki to the estate. 

Price: 34m for 500sqm(full plot.
This offer is just for few plots. 


Title: Government Allocation

For more Enquires/Site inspection, Kindly click on Book Inspection.`,
  },
  {
    id: "2",
    title: "WhiteGold Court",
    location: "Lekki",
    images: [
      require("../assets/app_pix/whitegold.jpg"),
      require("../assets/app_pix/whitegold1.jpeg"),
      require("../assets/app_pix/whitegold3.jpeg"),
      require("../assets/app_pix/whitegold4.jpeg"),
      require("../assets/app_pix/whitegold2.jpg"),
      require("../assets/app_pix/whitegoldflyer.jpeg"),
      // Add more images as needed
    ],
    price: "₦110,000,000",
    description: `WHITE GOLD

Imagine a stunning structure that exudes refinement, sophistication, and timeless beauty. White Gold is a 4 Bedroom semi detached duplex, located at Destiny Homes, Abijo GRA. Here's a vivid description of White Gold:


Exterior:

- The building's facade is crafted from sleek, cream-colored limestone or marble, with clean lines and symmetrical proportions.
- Fully automated functionalities which includes voice control and remote controlled devices.
- Tall, slender columns or pilasters frame the entrance, supporting a pediment or a delicate arch.
- Intricately carved ornamental details, such as acanthus leaves or scrollwork, add a touch of classic elegance.
- Large windows, often arched or rounded, allow natural light to flood the interior and offer breathtaking views.


Interior:

- The entrance hall boasts a grand staircase with ornate balustrades, curved or sweeping in design.
- Polished marble or hardwood floors reflect the light, while plush carpets add warmth underfoot.
- Elegant chandeliers or sconces provide soft, warm illumination.
- Walls are adorned with refined moldings, and ceilings often feature decorative coffers or ornate plasterwork.


Architectural Style:

- Inspired by classical styles, such as Neoclassical, Art Deco, or Renaissance Revival.
- Symmetrical and balanced, with a sense of harmony and proportion.


Materials:

- High-quality materials, including limestone, marble, bronze, and rich hardwoods.
- Luxurious textiles, like silk or velvet, used for upholstery and drapery.


Overall Impression:

- The building radiates poise, sophistication, and refinement.
- Every detail, from the proportions to the ornamentation, contributes to an atmosphere of understated luxury.
- The elegant building stands as a testament to timeless design, transcending fleeting trends

Price: 110 million naira.

For more Enquires/Site inspection, kindly click on Book Inspection.`,
  },
  {
    id: "3",
    title: "Yuta",
    location: "Leki",
    images: [
      require("../assets/app_pix/Yuta.jpg"),
      require("../assets/app_pix/Yuta2.jpg"),
      // Add more images as needed
    ],
    price: "₦3,000,000",
    description: `YUTA LAGOS
Every investor needs to invest their money on a property with high rate of Return on Investment (ROI), Fast Developing Area with Good Title and very Serene Environment.

YUTA LAGOS is one of those Estates that appreciates so fast and allows your investment put smiles on your face.

This Estate has beautiful topography (100% dry land) with instant allocation. 

Location: Epe, Lagos. 

LANDMARKS
◼️Isimi, Lagos
◼️Imota Rice farm
◼️Lagos Film City
◼️Lagos State Food Security System and Logistics Hub
◼️Proposed International Airport 

🚙 12 minutes drive from Epe T-junction. 

🚦Tarred road from Lekki to the estate junction. 

Price: 3m for 600sqm (full plot).
1.5m for 300sqm (half plot).

This offer is just for few plots. 

Title: Registered Survey and Deed of Assignment

For more Enquires/Site inspection, Kindly click on Book inspection`,
  },

  // Add more properties as needed
];

export const locations = [
  {
    id: "1",
    name: "Lekki",
    image: require("../assets/lekki.jpg"),
    description: "A vibrant and upscale neighborhood in Lagos.",
  },
  {
    id: "2",
    name: "Yaba",
    image: require("../assets/yaba.jpg"),
    description: "A bustling area known for its educational institutions.",
  },
  // Add more locations as needed
];

// Function to get all properties
export const getAllProperties = () => {
  return properties;
};

// Function to get all locations
export const getAllLocations = () => {
  return locations;
};

// Function to get property by ID
export const getPropertyById = (id) => {
  return properties.find((property) => property.id === id);
};

// Function to get location by ID
export const getLocationById = (id) => {
  return locations.find((location) => location.id === id);
};

// Function to get properties by location
export const getPropertiesByLocation = (locationName) => {
  return properties.filter((property) => property.location === locationName);
};

// Additional API functions can be added as needed
