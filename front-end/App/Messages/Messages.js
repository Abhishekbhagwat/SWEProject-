//
//  Messages
//  Burp
//
//  Created by Abhishek Bhagwat.
//  Copyright © 2018 [Company]. All rights reserved.
//

import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "./MessagesStyleSheet"
import React from "react"


export default class Messages extends React.Component {

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

	onHeaderOptionsDarkPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("Cart")
	}

	render() {
	
		return <View
				style={styles.messagesView}>
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
						<TouchableOpacity
							onPress={this.onHeaderOptionsDarkPressed}
							style={styles.cartButtonButton}>
							<Image
								source={require("./../../assets/images/header-options-dark.png")}
								style={styles.cartButtonButtonImage}/>
						</TouchableOpacity>
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
							style={styles.messagesText}>MESSAGES</Text>
					</View>
				</View>
				<View
					style={styles.groupView}>
					<Text
						style={styles.titleText}>CANTEEN 14</Text>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							justifyContent: "flex-end",
							alignItems: "flex-end",
						}}>
						<Text
							style={styles.yourOrderIsBeingText}>Your order is being prepared. Kindly all…</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							width: "100%",
							height: "100%",
							position: "absolute",
							justifyContent: "center",
						}}>
						<Image
							source={require("./../../assets/images/mask-group-8-clipped.png")}
							style={styles.maskGroup8ClippedImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							width: "100%",
							height: "100%",
							position: "absolute",
							alignItems: "flex-end",
						}}>
						<Text
							style={styles.titleTwoText}>Korean Cuisine </Text>
					</View>
				</View>
				<View
					style={styles.group2View}>
					<Image
						source={require("./../../assets/images/mask-group-9-clipped.png")}
						style={styles.maskGroup9ClippedImage}/>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							flex: 1,
							flexDirection: "row",
							justifyContent: "flex-end",
						}}>
						<View
							style={styles.groupTwoView}>
							<Text
								style={styles.titleThreeText}>KOUFU</Text>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									justifyContent: "flex-end",
								}}>
								<Text
									style={styles.doYouWantToAddEText}>Do you want to add extra onions to you…</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									width: "100%",
									height: "100%",
									position: "absolute",
								}}>
								<Text
									style={styles.titleFourText}>Pasta Express</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
	}
}
