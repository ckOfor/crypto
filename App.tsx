// react
import React, { useState, useEffect } from 'react';

// third-party
import { ViewStyle } from 'react-native';

// third-party
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

// screens
import HomeNavigator from './navigation/home';

// layouts
import { Layout } from './constants';
import DraweNavigator from './navigation/drawer';


const ROOT: ViewStyle = {
	height: '100%',
	width: Layout.window.width,
	backgroundColor: '#000',
};

export default function App() {
	const navigationRef = useNavigationContainerRef();
	const [isLoadingComplete, setIsLoadingComplete] = useState(false)

	useEffect(() => {
		loadResourcesAsync()
	}, [])

	const loadResourcesAsync = async () => {
		setIsLoadingComplete(true)
	};

	if (!isLoadingComplete) return null;

	return (
		<NavigationContainer
			ref={navigationRef}
		>
			<DraweNavigator />
		</NavigationContainer>
	);
}
