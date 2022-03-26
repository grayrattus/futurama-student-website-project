import Image from 'next/image';
import styles from './ShoppingItem.module.css';

export default function ShoppingItem(props) {
  return <article className={styles.shoppingItem}>
    <Image src={props.product.image} alt={props.product.alt} />
    <h3>{props.product.name}</h3>
    <p>{props.product.description}</p>
    <button
      className='snipcart-add-item'
      data-item-id={props.product.id}
      data-item-name={props.product.name}
      data-item-price={props.product.price}
      data-item-url={props.product.url}
      data-item-image={props.product.image.src}>
      Dodaj do koszyka
    </button>
  </article>
}
