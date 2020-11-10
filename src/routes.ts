import { ComponentType } from 'react';
import { StoreFuncPage } from './pages/store-func-page';
import { StoreClassPage } from './pages/store-class-page';
import { CalendarPage } from './pages/calendar-page';

export type TRouteItem = {
    component: ComponentType<any>;
    label: string;
    path: string;
};

export const ROUTES: TRouteItem[] = [
    {
        component: () => null,
        label: 'Домой',
        path: '/',
    },
    {
        component: StoreFuncPage,
        label: 'Магазин Функция',
        path: '/store-func',
    },
    {
        component: StoreClassPage,
        label: 'Магазин Класс',
        path: '/store-class',
    },
    {
        component: CalendarPage,
        label: 'Календарь',
        path: '/calendar',
    },
];