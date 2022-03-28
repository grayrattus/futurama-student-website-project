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
