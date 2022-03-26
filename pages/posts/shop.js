import SlidableImage from "../../components/slidable-image/SlidableImage";

import fryGray from '../../public/images/fry-gray.jpeg';
import fryColor from '../../public/images/fry-color.jpg';

import ShopComponent from '../../components/shop/Shop';
import {products} from "../../data/products";

function Shop(props) {
  return <div>
    <noscript><strong>Aby dokonać zakupów sklep wymaga obsługi JavaScript.</strong></noscript>
    <ShopComponent products={props.products} />
  </div>
}

export async function getStaticProps() {
  return await Promise.resolve({
    props: {
      products
    }
  });
}

export default Shop;
