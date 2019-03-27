//
//  App.js
//  Burp
//
//  Created by Abhishek Bhagwat.
//  Copyright © 2018 [Company]. All rights reserved.
//

import OrderHistory from "./App/OrderHistory/OrderHistory"
import SignUp from "./App/SignUp/SignUp"
import Messages from "./App/Messages/Messages"
import ProductDetails from "./App/ProductDetails/ProductDetails"
import { Font, DangerZone } from "expo"
import GalleryCategory from "./App/GalleryCategory/GalleryCategory"
import EditUserProfile from "./App/EditUserProfile/EditUserProfile"
import Welcome from "./App/Welcome/Welcome"
import { createStackNavigator, createAppContainer } from "react-navigation"
import Cart from "./App/Cart/Cart"
import React from "react"
import NorthSpineTwo from "./App/NorthSpineTwo/NorthSpineTwo"
import PaymentDetails from "./App/PaymentDetails/PaymentDetails"
import SignIn from "./App/SignIn/SignIn"
import NavigationMenu from "./App/NavigationMenu/NavigationMenu"
import Checkout from "./App/Checkout/Checkout"
import NorthSpine from "./App/NorthSpine/NorthSpine"
import StartPage from "./App/StartPage/StartPage"

const PushRouteOne = createStackNavigator({
	Welcome: {
		screen: Welcome,
	},
	StartPage: {
		screen: StartPage,
	},
	SignIn: {
		screen: SignIn,
	},
	GalleryCategory: {
		screen: GalleryCategory,
	},
	NavigationMenu: {
		screen: NavigationMenu,
	},
	EditUserProfile: {
		screen: EditUserProfile,
	},
	Messages: {
		screen: Messages,
	},
	Cart: {
		screen: Cart,
	},
	Checkout: {
		screen: Checkout,
	},
	PaymentDetails: {
		screen: PaymentDetails,
	},
	OrderHistory: {
		screen: OrderHistory,
	},
	NorthSpineTwo: {
		screen: NorthSpineTwo,
	},
	NorthSpine: {
		screen: NorthSpine,
	},
	ProductDetails: {
		screen: ProductDetails,
	},
}, {
	initialRouteName: "Welcome",
})

const PushRouteTwo = createStackNavigator({
	SignUp: {
		screen: SignUp,
	},
	GalleryCategory: {
		screen: GalleryCategory,
	},
	NavigationMenu: {
		screen: NavigationMenu,
	},
	EditUserProfile: {
		screen: EditUserProfile,
	},
	Messages: {
		screen: Messages,
	},
	Cart: {
		screen: Cart,
	},
	Checkout: {
		screen: Checkout,
	},
	PaymentDetails: {
		screen: PaymentDetails,
	},
	OrderHistory: {
		screen: OrderHistory,
	},
	NorthSpineTwo: {
		screen: NorthSpineTwo,
	},
	NorthSpine: {
		screen: NorthSpine,
	},
	ProductDetails: {
		screen: ProductDetails,
	},
	SignIn: {
		screen: SignIn,
	},
}, {
	initialRouteName: "SignUp",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
	PushRouteTwo: {
		screen: PushRouteTwo,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)



export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fontsReady: false,
		}
	}

	componentDidMount() {
	
		this.initProjectFonts()
	}

	async initProjectFonts() {
	
		await Font.loadAsync({
			"Verdana": require("./assets/fonts/Verdana.ttf"),
			"Avenir-Light": require("./assets/fonts/AvenirLight.ttf"),
			"Avenir-Medium": require("./assets/fonts/AvenirMedium.ttf"),
			"Avenir-Book": require("./assets/fonts/AvenirBook.ttf"),
			".SFNSText": require("./assets/fonts/SFNSText.ttf"),
		})
		this.setState({
			fontsReady: true,
		})
	}

	render() {
	
		if (!this.state.fontsReady) { return (<Expo.AppLoading/>); }
		return <AppContainer/>
	}
}
