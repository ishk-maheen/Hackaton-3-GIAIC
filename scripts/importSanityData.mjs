// import { createClient } from '@sanity/client';
// import axios from 'axios';
// import dotenv from 'dotenv';
// import { fileURLToPath } from 'url';
// import path from 'path';

// // Load environment variables from .env.local
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// // Create Sanity client
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN,
//   apiVersion: '2021-08-31'
// });

// async function uploadImageToSanity(imageUrl) {
//   try {
//     console.log(`Uploading image: ${imageUrl}`);
//     const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
//     const buffer = Buffer.from(response.data);
//     const asset = await client.assets.upload('image', buffer, {
//       filename: imageUrl.split('/').pop()
//     });
//     console.log(`Image uploaded successfully: ${asset._id}`);
//     return asset._id;
//   } catch (error) {
//     console.error('Failed to upload image:', imageUrl, error);
//     return null;
//   }
// }

// async function importData() {
//   try {
//     console.log('Fetching car data from API...');

//     // API endpoint containing car data
//     const response = await axios.get('https://sanity-nextjs-application.vercel.app/api/hackathon/template7');
//     const product = response.data;

//     console.log(`Fetched ${product.length} cars`);

//     for (const product of product) {
//       console.log(`Processing car: ${product.name}`);

//       let imageRef = null;
//       if (product.image_url) {
//         imageRef = await uploadImageToSanity(product.image_url);
//       }

//       const sanityProduct = {
//         _type: 'product',
//         name: product.name,
//         brand: product.brand || null,
//         type: product.type,
//         fuelCapacity: product.fuel_capacity,
//         transmission: product.transmission,
//         seatingCapacity: product.seating_capacity,
//         pricePerDay: product.price_per_day,
//         originalPrice: product.original_price || null,
//         tags: product.tags || [],
//         image: imageRef ? {
//           _type: 'image',
//           asset: {
//             _type: 'reference',
//             _ref: imageRef,
//           },
//         } : undefined,
//       };

//       console.log('Uploading car to Sanity:', sanityProduct.name);
//       const result = await client.create(sanityProduct);
//       console.log(`Car uploaded successfully: ${result._id}`);
//     }

//     console.log('Data import completed successfully!');
//   } catch (error) {
//     console.error('Error importing data:', error);
//   }
// }

// importData();



















import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31'
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop()
    });
    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function importData() {
  try {
    console.log('Fetching product data from API...');

    // API endpoint containing product data
    const response = await axios.get('https://sanity-nextjs-application.vercel.app/api/hackathon/template7');
    const products = response.data;  // Changed variable name to 'products'

    console.log(`Fetched ${products.length} products`);

    for (const product of products) {
      console.log(`Processing product: ${product.name}`);

      let imageRef = null;
      if (product.image_url) {
        imageRef = await uploadImageToSanity(product.image_url);
      }

      const sanityProduct = {
        _type: 'product',
        name: product.name,
        brand: product.brand || null,
        type: product.type,
        fuelCapacity: product.fuel_capacity,
        transmission: product.transmission,
        seatingCapacity: product.seating_capacity,
        pricePerDay: product.price_per_day,
        originalPrice: product.original_price || null,
        tags: product.tags || [],
        image: imageRef ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageRef,
          },
        } : undefined,
      };

      console.log('Uploading product to Sanity:', sanityProduct.name);
      const result = await client.create(sanityProduct);
      console.log(`Product uploaded successfully: ${result._id}`);
    }

    console.log('Data import completed successfully!');
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

importData();












// import { createClient } from '@sanity/client';
// import axios from 'axios';
// import dotenv from 'dotenv';
// import { fileURLToPath } from 'url';
// import path from 'path';

// // Load environment variables from .env.local
// const __filename = fileURLToPath(import.meta.url);
// const _dirname = path.dirname(_filename);
// dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// // Create Sanity client
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN,
//   apiVersion: '2021-08-31',
// });

// // Function to upload image to Sanity
// async function uploadImageToSanity(imageUrl) {
//   try {
//     console.log(`Uploading image: ${imageUrl}`);

//     // Fetch image from URL
//     const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
//     const buffer = Buffer.from(response.data);

//     // Upload image to Sanity
//     const asset = await client.assets.upload('image', buffer, {
//       filename: imageUrl.split('/').pop(),
//     });

//     console.log(`Image uploaded successfully: ${asset._id}`);
//     return asset._id;
//   } catch (error) {
//     console.error(`Failed to upload image: ${imageUrl}, error.message`);
//     return null;
//   }
// }

// // Function to import data into Sanity
// async function importData() {
//   try {
//     console.log('Fetching products from API...');
//     const response = await axios.get('https://sanity-nextjs-application.vercel.app/api/hackathon/template7');
//     const products = response.data;

//     console.log(`Fetched ${products.length} products`);

//     if (!Array.isArray(products) || products.length === 0) {
//       console.log('No products found in the response!');
//       return;
//     }

//     for (const product of products) {
//       console.log(`Processing product: ${product.name}`);

//       let imageRef = null;
//       if (product.imagePath) {
//         imageRef = await uploadImageToSanity(product.imagePath);
//       }

//       // Prepare the Sanity document for the product
//       const sanityProduct = {
//         _type: 'product', // Matches your Sanity schema
//         name: product.name,
//         price: product.price || '0', // Fallback to '0' if missing
//         para: product.description || '', // First paragraph (required)
//         para2: product.additionalInfo || '', // Optional second paragraph
//         originalPrice: product.originalPrice || '', // Optional field
//         category: product.category || 'Uncategorized', // Default to 'Uncategorized'
//         image: imageRef
//           ? {
//               _type: 'image',
//               asset: {
//                 _type: 'reference',
//                 _ref: imageRef, // Reference to the uploaded image
//               },
//             }
//           : undefined,
//       };

//       console.log('Uploading product to Sanity:', sanityProduct.name);
//       const result = await client.create(sanityProduct);
//       console.log(`Product uploaded successfully: ${result._id}`);
//     }

//     console.log('Data import completed successfully!');
//   } catch (error) {
//     console.error('Error importing data:', error.message);
//   }
// }

// // Call the import function to start the process
// importData();