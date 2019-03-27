//
//  Checkout
//  Burp
//
//  Created by Abhishek Bhagwat.
//  Copyright © 2018 [Company]. All rights reserved.
//

import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "./CheckoutStyleSheet"
import React from "react"


export default class Checkout extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onButtonCopyPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("PaymentDetails")
	}

	render() {
	
		return <View
				style={styles.checkoutView}>
				<View
					style={styles.headerView}>
					<Image
						source={require("./../../assets/images/header-menu-dark.png")}
						style={styles.headerMenuDarkImage}/>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							flex: 1,
							flexDirection: "row",
							justifyContent: "flex-end",
							alignItems: "center",
						}}>
						<Image
							source={require("./../../assets/images/header-options-dark.png")}
							style={styles.headerOptionsDarkImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							width: "100%",
							height: "100%",
							alignSelf: "stretch",
							position: "absolute",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<Text
							style={styles.checkoutText}>CHECKOUT</Text>
					</View>
				</View>
				<Text
					style={styles.titleText}>PAYMENT METHOD</Text>
				<View
					style={styles.paypalView}>
					<Image
						source={require("./../../assets/images/image.png")}
						style={styles.imageImage}/>
					<View
						pointerEvents="box-none">
						<Text
							style={styles.methodNameFourText}>PAYPAL</Text>
						<Text
							style={styles.valueFourText}>******@gmail.com</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "flex-end",
							alignItems: "center",
						}}>
						<Image
							source={require("./../../assets/images/check.png")}
							style={styles.checkFourImage}/>
					</View>
				</View>
				<View
					style={styles.visaView}>
					<View
						style={styles.imageThreeView}>
						<Image
							source={require("./../../assets/images/bitmap-2.png")}
							style={styles.bitmapTwoImage}/>
					</View>
					<View
						pointerEvents="box-none">
						<Text
							style={styles.methodNameThreeText}>VISA</Text>
						<Text
							style={styles.valueThreeText}>**** **** **** 2323</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "flex-end",
							alignItems: "center",
						}}>
						<Image
							source={require("./../../assets/images/check-2.png")}
							style={styles.checkThreeImage}/>
					</View>
				</View>
				<View
					style={styles.mastercardView}>
					<View
						style={styles.imageView}>
						<Image
							source={require("./../../assets/images/bitmap.png")}
							style={styles.bitmapImage}/>
					</View>
					<View
						pointerEvents="box-none">
						<Text
							style={styles.methodNameText}>MASTERCARD</Text>
						<Text
							style={styles.valueText}>**** **** **** 4352</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "flex-end",
							alignItems: "center",
						}}>
						<Image
							source={require("./../../assets/images/check.png")}
							style={styles.checkImage}/>
					</View>
				</View>
				<View
					style={styles.mastercardCopyView}>
					<View
						style={styles.imageTwoView}>
						<Image
							source={require("./../../assets/images/nets-logo.png")}
							style={styles.netsLogoImage}/>
					</View>
					<View
						pointerEvents="box-none">
						<Text
							style={styles.methodNameTwoText}>NETS</Text>
						<Text
							style={styles.valueTwoText}>**** **** **** 1999</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "flex-end",
							alignItems: "center",
						}}>
						<Image
							source={require("./../../assets/images/check.png")}
							style={styles.checkTwoImage}/>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
						flex: 1,
						justifyContent: "flex-end",
						alignItems: "center",
					}}>
					<View
						style={styles.buttonView}>
						<Text
							style={styles.continueText}>CONTINUE</Text>
					</View>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						width: "100%",
						height: "100%",
						alignSelf: "stretch",
						flex: 1,
						position: "absolute",
						justifyContent: "flex-end",
						alignItems: "center",
					}}>
					<TouchableOpacity
						onPress={this.onButtonCopyPressed}
						style={styles.continueBuyButton}>
						<Text
							style={styles.continueBuyButtonText}>CONTINUE</Text>
					</TouchableOpacity>
				</View>
			</View>
	}
}
