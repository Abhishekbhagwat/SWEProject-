//
//  Cart
//  Burp
//
//  Created by Abhishek Bhagwat.
//  Copyright © 2018 [Company]. All rights reserved.
//

import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "./CartStyleSheet"
import React from "react"


export default class Cart extends React.Component {

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

	onButtonPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("Checkout")
	}

	render() {
	
		return <View
				style={styles.cartView}>
				<View
					style={styles.headerView}>
					<View
						pointerEvents="box-none"
						style={{
							flexDirection: "row",
						}}>
						<Image
							source={require("./../../assets/images/header-menu-dark.png")}
							style={styles.headerMenuDarkImage}/>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								flexDirection: "row",
								justifyContent: "flex-end",
							}}>
							<Text
								style={styles.cartText}>CART</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							justifyContent: "flex-end",
						}}>
						<Text
							style={styles.titleTwoText}>MY ORDERS{"\n"}</Text>
					</View>
				</View>
				<View
					style={styles.group3View}>
					<View
						style={styles.categoryView}>
						<Image
							source={require("./../../assets/images/bitmap-6.png")}
							style={styles.bitmapImage}/>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								flex: 1,
								flexDirection: "row",
								justifyContent: "flex-end",
								alignItems: "center",
							}}>
							<Text
								style={styles.titleText}>CHICKEN RICE{"\n"}$3.00{"\n"}NORTH SPINE FOOD COURT</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							justifyContent: "flex-end",
						}}>
						<View
							style={styles.lineView}/>
					</View>
				</View>
				<View
					style={styles.lineTwoView}/>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
						flex: 1,
						justifyContent: "flex-end",
						alignItems: "center",
					}}>
					<View
						style={styles.group2View}>
						<Text
							style={styles.titleThreeText}>TOTAL                                      $3.20</Text>
						<View
							style={styles.groupView}>
							<Text
								style={styles.subtotal300Text}>Subtotal                                                       $3.00 </Text>
							<Text
								style={styles.takeawayFee020Text}>Takeaway fee                                               $0.20</Text>
						</View>
					</View>
					<TouchableOpacity
						onPress={this.onButtonPressed}
						style={styles.placeOrderButton}>
						<Text
							style={styles.placeOrderButtonText}>PLACE ORDER</Text>
					</TouchableOpacity>
				</View>
			</View>
	}
}
