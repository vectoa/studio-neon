// src/services/dbService.js (nouvelle version pour DynamoDB)
import AWS from 'aws-sdk';

AWS.config.update({
  region: "us-east-1",
  credentials: new AWS.Credentials(process.env.AWS_ACCESS_KEY, process.env.AWS_SECRET_KEY)
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export async function getShopProductsFromDB() {
  const params = { TableName: "ShopProducts" };
  const result = await dynamoDB.scan(params).promise();
  return result.Items;
}

export async function saveShopProductsToDB(updatedShop) {
  // Ici, il faut écrire une logique pour enregistrer tous les produits
  // Par exemple, en utilisant une transaction ou en itérant sur chaque produit
  for (const product of updatedShop) {
    await dynamoDB.put({
      TableName: "ShopProducts",
      Item: product,
    }).promise();
  }
  return updatedShop;
}

/*
*Ensuite, dans le Dashboard Admin, il faudra remplacer les appels à getShopProducts() par 
getShopProductsFromDB() et saveShopProducts(updatedShop) par saveShopProductsToDB(updatedShop).
*/