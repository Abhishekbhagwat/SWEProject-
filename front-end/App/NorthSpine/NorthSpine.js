//
//  NorthSpine
//  Burp
//
//  Created by Abhishek Bhagwat.
//  Copyright © 2018 [Company]. All rights reserved.
//

import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "./NorthSpineStyleSheet"
import React from "react"


export default class NorthSpine extends React.Component {

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

	onGroup3Pressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("ProductDetails")
	}

	render() {
	
		return <View
				style={styles.northSpineView}>
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
							style={styles.riceStallText}>RICE STALL </Text>
					</View>
				</View>
				<TouchableOpacity
					onPress={this.onGroup3Pressed}
					style={styles.foodItem1Button}>
					<Image
						source={require("./../../assets/images/bitmap-6.png")}
						style={styles.foodItem1ButtonImage}/>
					<Text
						style={styles.foodItem1ButtonText}>CHICKEN RICE{"\n"}$3.00</Text>
				</TouchableOpacity>
			</View>
	}
}
