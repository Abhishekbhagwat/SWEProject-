//
//  SignUp
//  Burp
//
//  Created by Abhishek Bhagwat.
//  Copyright © 2018 [Company]. All rights reserved.
//

import { View, Text, TextInput, Image, TouchableOpacity } from "react-native"
import styles from "./SignUpStyleSheet"
import React from "react"


export default class SignUp extends React.Component {

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

	onSignInInsteadPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("SignIn")
	}

	onButtonPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("GalleryCategory")
	}

	render() {
	
		return <View
				style={styles.signUpView}>
				<Image
					source={require("./../../assets/images/background-3.png")}
					style={styles.backgroundImage}/>
				<View
					pointerEvents="box-none"
					style={{
						width: "100%",
						height: "100%",
						position: "absolute",
						alignItems: "center",
					}}>
					<Text
						style={styles.titleText}>Sign Up</Text>
					<View
						style={styles.fullNameView}>
						<Image
							source={require("./../../assets/images/person---material.png")}
							style={styles.personMaterialImage}/>
						<TextInput
							autoCorrect={false}
							placeholder="Full Name"
							style={styles.fullNameTextInput}/>
					</View>
					<View
						style={styles.emailView}>
						<Image
							source={require("./../../assets/images/icon-24px.png")}
							style={styles.icon24pxThreeImage}/>
						<TextInput
							autoCorrect={false}
							placeholder="Email Address"
							style={styles.emailAddressTextInput}/>
					</View>
					<View
						style={styles.dobView}>
						<Image
							source={require("./../../assets/images/icon-24px-8.png")}
							style={styles.icon24pxTwoImage}/>
						<TextInput
							autoCorrect={false}
							placeholder="Date of Birth"
							style={styles.dateOfBirthTextInput}/>
					</View>
					<View
						style={styles.mobileView}>
						<Image
							source={require("./../../assets/images/icon-24px-7.png")}
							style={styles.icon24pxImage}/>
						<TextInput
							keyboardType="number-pad"
							autoCorrect={false}
							placeholder="Mobile Number"
							style={styles.mobileNumberTextInput}/>
					</View>
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
							style={styles.signUpButtonButton}>
							<Text
								style={styles.signUpButtonButtonText}>SIGN UP</Text>
						</TouchableOpacity>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<TouchableOpacity
								onPress={this.onSignInInsteadPressed}
								style={styles.signInInsteadButton}>
								<Text
									style={styles.signInInsteadButtonText}>Sign In Instead</Text>
							</TouchableOpacity>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									flex: 1,
									flexDirection: "row",
									justifyContent: "flex-end",
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.continueText}>Continue</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
	}
}
