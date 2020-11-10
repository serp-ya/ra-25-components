import * as React from 'react';
import { Link } from 'react-router-dom';
import { TRouteItem } from '../../routes';
import styles from './top-menu.module.css';

type TTopMenuProps = {
    routes: TRouteItem[],
};

export const TopMenu = React.memo(({ routes }: TTopMenuProps) => (
    <ul className={styles['menu']}>
        {routes.map((routeItem: TRouteItem) => (
            <Link
                className={styles['menu-item']}
                key={routeItem.path}
                to={routeItem.path}
            >
                {routeItem.label}
            </Link>
        ))}
    </ul>
));