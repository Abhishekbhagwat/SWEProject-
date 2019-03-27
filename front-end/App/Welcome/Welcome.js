//
//  Welcome
//  Burp
//
//  Created by Abhishek Bhagwat.
//  Copyright © 2018 [Company]. All rights reserved.
//

import { View, Image, Text, TouchableOpacity } from "react-native"
import styles from "./WelcomeStyleSheet"
import React from "react"


export default class Welcome extends React.Component {

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
		
		navigate("StartPage")
	}

	render() {
	
		return <View
				style={styles.welcomeView}>
				<Image
					source={require("./../../assets/images/background-2.png")}
					style={styles.backgroundImage}/>
				<View
					pointerEvents="box-none"
					style={{
						width: "100%",
						height: "100%",
						position: "absolute",
					}}>
					<Text
						style={styles.titleText}>Welcome to Burp </Text>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							justifyContent: "flex-end",
							alignItems: "center",
						}}>
						<Text
							style={styles.subheadingText}>Order food from your favorite spots and forget about waiting for it</Text>
						<TouchableOpacity
							onPress={this.onButtonPressed}
							style={styles.getStartedButton}>
							<Text
								style={styles.getStartedButtonText}>GET STARTED</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
	}
}
