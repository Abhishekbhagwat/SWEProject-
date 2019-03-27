//
//  OrderHistory
//  Burp
//
//  Created by Abhishek Bhagwat.
//  Copyright © 2018 [Company]. All rights reserved.
//

import { View, Text, Image } from "react-native"
import styles from "./OrderHistoryStyleSheet"
import React from "react"


export default class OrderHistory extends React.Component {

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

	render() {
	
		return <View
				style={styles.orderHistoryView}>
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
						<Text
							style={styles.orderHistoryText}>ORDER HISTORY</Text>
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
					style={styles.group3TwoView}>
					<View
						style={styles.categoryTwoView}>
						<Image
							source={require("./../../assets/images/bitmap-4.png")}
							style={styles.bitmapTwoImage}/>
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
								style={styles.titleTwoText}>TAKOYAKI{"\n"}$2.40{"\n"}CANTEEN 2{"\n"}</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							justifyContent: "flex-end",
						}}>
						<View
							style={styles.lineTwoView}/>
					</View>
				</View>
			</View>
	}
}
