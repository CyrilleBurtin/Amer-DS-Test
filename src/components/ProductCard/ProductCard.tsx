import { type Products } from '../../interfaces/products'
import './ProductCard.scss'

const ProductCard = ({ img, title, subtitle, time, label }: Products) => {
  const classes = {
    container: 'slm-product-card',
    image: 'slm-product-card__image'
  }

  return (
    <div className={classes.container}>
      <img src={img} alt={subtitle} className={classes.image} />
      fdsfsd
    </div>
  )
}

export default ProductCard
