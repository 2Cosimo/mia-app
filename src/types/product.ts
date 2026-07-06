export interface ProductRating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
  rating: ProductRating;
}


// In sintesi, questo codice definisce le interfacce ProductRating e Product 
// che rappresentano rispettivamente la valutazione di un prodotto e un prodotto stesso. 
// L'interfaccia ProductRating contiene le proprietà rate e count, mentre l'interfaccia Product 
// contiene le proprietà id, title, category, price, description.