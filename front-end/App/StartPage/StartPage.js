//
//  StartPage
//  Burp
//
//  Created by Abhishek Bhagwat.
//  Copyright © 2018 [Company]. All rights reserved.
//

import { View, Image, Text, TouchableOpacity } from "react-native"
import styles from "./StartPageStyleSheet"
import React from "react"


export default class StartPage extends React.Component {

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

	onButtonTwoPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("SignUp")
	}

	onButtonPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("SignIn")
	}

	render() {
	
		return <View
				style={styles.startPageView}>
				<Image
					source={require("./../../assets/images/signin.png")}
					style={styles.signinImage}/>
				<View
					pointerEvents="box-none"
					style={{
						width: "100%",
						height: "100%",
						position: "absolute",
						alignItems: "center",
					}}>
					<Text
						style={styles.titleText}>Let’s get started on satisfying your craving</Text>
					<Text
						style={styles.taglineText}>Sign In or Register with us to cure those hunger pangs</Text>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							flex: 1,
							justifyContent: "flex-end",
							alignItems: "center",
						}}>
						<TouchableOpacity
							onPress={this.onButtonPressed}
							style={styles.signInButton}>
							<Text
								style={styles.signInButtonText}>SIGN IN</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={this.onButtonTwoPressed}
							style={styles.signUpButton}>
							<Text
								style={styles.signUpButtonText}>SIGN UP</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
	}
}
