import AppConfig from './package.json'
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ApplicationNavigator from './application/navigator';


const initialState = {
	application: {
		version: AppConfig.version
	},
	cars: [
		{
			id: '1512838520000',
			brand: 'Citroën',
			model:'DS7 Crossback',
			constructionYear: '2017'
		},
		{
			id: '1512838520001',
			brand: 'Volkswagen',
			model:'Polo',
			constructionYear: '2017'
		},
		{
			id: '1512838520002',
			brand: 'Volkswagen',
			model:'Golf',
			constructionYear: '2017'
		},
		{
			id: '1512838520003',
			brand: 'Subaru',
			model:'XV',
			constructionYear: '2017'
		},
		{
			id: '1512838520004',
			brand: 'Kia',
			model:'Optima',
			constructionYear: '2017'
		},
		{
			id: '1512838520005',
			brand: 'Kia',
			model:'Niro',
			constructionYear: '2017'
		},
		{
			id: '1512838520006',
			brand: 'Ford',
			model:'Kuga',
			constructionYear: '2017'
		},
		{
			id: '1512838520007',
			brand: 'Ford',
			model:'C-Max',
			constructionYear: '2017'
		},
		{
			id: '1512838520008',
			brand: 'Ford',
			model:'Focus',
			constructionYear: '2017'
		},
		{
			id: '1512838520009',
			brand: 'Skoda',
			model:'Kodiaq',
			constructionYear: '2017'
		},
		{
			id: '1512838520010',
			brand: 'Skoda',
			model:'Karoq',
			constructionYear: '2017'
		},
		{
			id: '1512838520011',
			brand: 'Mazda',
			model:'6',
			constructionYear: '2017'
		},
		{
			id: '1512838520012',
			brand: 'Mazda',
			model:'CX-5',
			constructionYear: '2017'
		},
		{
			id: '1512838520013',
			brand: 'Volvo',
			model:'XC60',
			constructionYear: '2017'
		},
		{
			id: '1512838520014',
			brand: 'Volvo',
			model:'V70',
			constructionYear: '2017'
		},
		{
			id: '1512838520015',
			brand: 'Mini Cooper',
			model:'S',
			constructionYear: '2017'
		},
	]
};

// reducer placeholder,
const reducer = (state, action) => state;

const store = createStore(reducer, initialState);

export default () => {
	return (
		<Provider store={store}>
			<ApplicationNavigator/>
		</Provider>
	);
};