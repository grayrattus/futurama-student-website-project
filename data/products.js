import image1 from '/public/images/shop/shirt1.jpeg';
import image2 from '/public/images/shop/shirt2.jpeg';
import image3 from '/public/images/shop/shirt3.jpeg';

export const products = [
  {
    id: "tshirt1",
    name: "Koszulka Futurama Nibler",
    price: 25.00,
    image: image1,
    alt: 'Koszulka Futurama 1',
    description: "Koszulka z biodegradowalnego materiału, kolor czarny w sam raz na festiwal rockowy.",
    url: '/api/products/tshirt1'
  },
  {
    id: "tshirt2",
    name: "Koszulka Futurama Fry",
    price: 25.00,
    image: image2,
    alt: 'Koszulka Futurama 2',
    description: "Koszulka z biodegradowalnego materiału, kolor szary w sam raz na festiwal popowy.",
    url: '/api/products/tshirt3'
  },
  {
    id: "tshirt3",
    name: "Koszulka Futurama Leela",
    price: 25.00,
    image: image3,
    alt: 'Koszulka Futurama 3',
    description: "Koszulka z biodegradowalnego materiału, kolor prawie biały nie do użytku na festiwalach.",
    url: '/api/products/tshirt3'
  },

];
