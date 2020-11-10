import { Component } from 'react';

export type TRouteItem = {
    Component: Component;
    label: string;
    path: string;
};

export const ROUTES: TRouteItem[] = [
    {
        Component: '',
        label: 'Магазин Функция',
        path: 'store-func',
    },
    {
        Component: '',
        label: 'Магазин Класс',
        path: 'store-class',
    },
    {
        Component: '',
        label: 'Календарь',
        path: 'calendar',
    },
];