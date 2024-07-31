import { type Products } from '../../interfaces/products'
import timer from 'assets/icons/timer.svg'
import Title from '../Title/Title'
import Text from '../Text/Text'
import Label from '../Label/Label'
import { LABEL_VARIANT } from '../Label/constants'
import './ProductCard.scss'
import { TITLE_VARIANT } from '../Title/constants'

const ProductCard = ({ img, title, description, time, label }: Products) => {
  const classes = {
    container: 'slm-product-card',
    image: 'slm-product-card__image',
    content: 'slm-product-card__content',
    header: 'slm-product-card__header',
    info: 'slm-product-card__info',
    time: 'slm-product-card__time'
  }

  return (
    <div className={classes.container}>
      <img src={img} alt={description} className={classes.image} />
      <div className={classes.content}>
        <div className={classes.header}>
          <Title is="h2" variant={TITLE_VARIANT.RED}>
            {title}
          </Title>
          <Text>{description}</Text>
        </div>
        <div className={classes.info}>
          <Text className={classes.time}>
            <img src={timer} alt="timing" /> {time}&nbsp;min
          </Text>
          <Label variant={LABEL_VARIANT.GRAY}>{label}</Label>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
