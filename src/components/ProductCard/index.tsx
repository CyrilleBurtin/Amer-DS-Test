import Title from '../Title';
import Text from '../Text';
import Label from '../Label';
import { type Product } from '../../interfaces/product';
import { LABEL_VARIANT } from '../Label/constants';
import { TITLE_VARIANT } from '../Title/constants';
import timer from 'assets/icons/timer.svg';
import './ProductCard.scss';

const ProductCard = ({ img, title, description, time, label }: Product) => {
  const classes = {
    container: 'slm-product-card',
    image: 'slm-product-card__image',
    content: 'slm-product-card__content',
    header: 'slm-product-card__header',
    info: 'slm-product-card__info',
    time: 'slm-product-card__time'
  };

  return (
    <div className={classes.container}>
      <img src={`${img}`} alt={description} width="354" height="210" />
      <div className={classes.content}>
        <header className={classes.header}>
          <Title is="h2" variant={TITLE_VARIANT.RED}>
            {title}
          </Title>
          <Text>{description}</Text>
        </header>
        <div className={classes.info}>
          <p className={classes.time}>
            <img
              src={timer}
              alt="timing"
              width="24"
              height="24"
              loading="lazy"
            />{' '}
            {time}
            &nbsp;min
          </p>
          <Label variant={LABEL_VARIANT.GRAY}>{label}</Label>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
