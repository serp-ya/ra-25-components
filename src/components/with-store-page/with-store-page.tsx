import * as React from 'react';
import { STORE_ITEM } from '../../constants';
import { TStoreItem } from '../../types';
import styles from './with-store-page.module.css';

type TwithStorePageProps = {
    storeItem: TStoreItem;
};

export const withStorePage = (WrappedComponent: React.ComponentType<TwithStorePageProps>) => (
    React.memo(() => (
        <div className={styles['container']}>
            <div className={styles['background-element']}>
            </div>
            <div className={styles['highlight-window']}>
                <div className={styles['highlight-overlay']}></div>
            </div>
            <div className={styles['window']}>
                <WrappedComponent storeItem={STORE_ITEM} />
            </div>
        </div>
    ))
);