import * as React from 'react';
import cn from 'classnames';
import { withStorePage } from '../../components/with-store-page';
import { FUNT_CURRENCY } from '../../constants';
import { TStoreItem } from '../../types';
import styles from '../../styles/store-item.module.css';

type TStoreFuncPageProps = {
    storeItem: TStoreItem,
};

const StoreFuncPageComponent = React.memo(({ storeItem: {
    brand,
    currency = FUNT_CURRENCY,
    description,
    descriptionFull,
    title,
    price,
}}: TStoreFuncPageProps) => (
<div className={styles['main-content']}>
    <h2>
        {brand}
    </h2>
    <h1 className={styles['h1']}>
        {title}
    </h1>
    <h3 className={styles['h3']}>
        {description}
    </h3>
    <div className={styles['description']}>
        {descriptionFull}
    </div>
    <div className={cn(styles['highlight-window'], styles['mobile'])}>
        <div className={styles['highlight-overlay']}></div>
    </div>
    <div className={styles['divider']}></div>
    <div className={styles['purchase-info']}>
        <div className={styles['price']}>
            {currency}{price}
        </div>
        <button className={styles['button']}>
            Добавить в корзину
        </button>
    </div>
</div>
));

export const StoreFuncPage = withStorePage(StoreFuncPageComponent);