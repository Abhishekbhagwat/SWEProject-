//
//  NorthSpineTwo
//  Burp
//
//  Created by Abhishek Bhagwat.
//  Copyright © 2018 [Company]. All rights reserved.
//

import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "./NorthSpineTwoStyleSheet"
import React from "react"


export default class NorthSpineTwo extends React.Component {

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
		
		navigate("NorthSpine")
	}

	onHeaderMenuDarkPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("NavigationMenu")
	}

	onGroup3TwoPressed = () => {
	
	}

	render() {
	
		return <View
				style={styles.northSpineView}>
				<View
					style={styles.headerView}>
					<TouchableOpacity
						onPress={this.onHeaderMenuDarkPressed}
						style={styles.headerMenuDarkButton}>
						<Image
							source={require("./../../assets/images/header-menu-dark.png")}
							style={styles.headerMenuDarkButtonImage}/>
					</TouchableOpacity>
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
							style={styles.northSpineFoodCouText}>NORTH SPINE FOOD COURT</Text>
					</View>
				</View>
				<TouchableOpacity
					onPress={this.onGroup3Pressed}
					style={styles.restaurentCategory1Button}>
					<Image
						source={require("./../../assets/images/bitmap-6.png")}
						style={styles.restaurentCategory1ButtonImage}/>
					<Text
						style={styles.restaurentCategory1ButtonText}>RICE STALL </Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={this.onGroup3TwoPressed}
					style={styles.group3Button}>
					<Image
						source={require("./../../assets/images/bitmap-4.png")}
						style={styles.group3ButtonImage}/>
					<Text
						style={styles.group3ButtonText}>VEGETABLE STALL{"\n"}</Text>
				</TouchableOpacity>
			</View>
	}
}
