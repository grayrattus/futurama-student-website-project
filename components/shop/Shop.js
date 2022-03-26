import styles from './Shop.module.css';

import imageShop from '../../public/images/shop.jpeg';

import ShoppingItem from './shopping-item/ShoppingItem';
import BannerImage from '../banner-image/BannerImage';

function Shop(props) {
  console.log(props);
  return <div className={styles.shop}>
    <BannerImage
      image={{src: imageShop, alt: 'Postacie z Futurama'}}
      title='Sklep online'
    />
    <div className={styles.shopItems}>
       {props.products.map((product) => <ShoppingItem key={product.id} product={product} />)}
    </div>
  </div>
}

export default Shop;
