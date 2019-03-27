//
//  SignIn
//  Burp
//
//  Created by Abhishek Bhagwat.
//  Copyright © 2018 [Company]. All rights reserved.
//

import { View, Text, TextInput, Image, TouchableOpacity } from "react-native"
import styles from "./SignInStyleSheet"
import React from "react"


export default class SignIn extends React.Component {

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
		
		navigate("GalleryCategory")
	}

	render() {
	
		return <View
				style={styles.signInView}>
				<Image
					source={require("./../../assets/images/sign-up.png")}
					style={styles.signUpImage}/>
				<View
					pointerEvents="box-none"
					style={{
						width: "100%",
						height: "100%",
						position: "absolute",
						alignItems: "center",
					}}>
					<Text
						style={styles.titleText}>Sign In</Text>
					<View
						style={styles.usernameView}>
						<Image
							source={require("./../../assets/images/person---material.png")}
							style={styles.personMaterialImage}/>
						<TextInput
							autoCorrect={false}
							placeholder="Username"
							style={styles.usernameTextInput}/>
					</View>
					<View
						style={styles.passwordView}>
						<Image
							source={require("./../../assets/images/icon-24px-5.png")}
							style={styles.icon24pxImage}/>
						<TextInput
							autoCorrect={false}
							placeholder="Password"
							secureTextEntry={true}
							style={styles.passwordTextInput}/>
					</View>
					<TouchableOpacity
						onPress={this.onButtonPressed}
						style={styles.signInButtonButton}>
						<Text
							style={styles.signInButtonButtonText}>SIGN IN</Text>
					</TouchableOpacity>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							flexDirection: "row",
						}}>
						<Text
							style={styles.signUpText}>Sign Up</Text>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								flexDirection: "row",
								justifyContent: "flex-end",
							}}>
							<Text
								style={styles.forgotPasswordText}>Forgot Password?</Text>
						</View>
					</View>
				</View>
			</View>
	}
}
