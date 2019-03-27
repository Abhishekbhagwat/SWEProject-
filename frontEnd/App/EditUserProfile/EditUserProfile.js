//
//  EditUserProfile
//  Burp
//
//  Created by Abhishek Bhagwat.
//  Copyright © 2018 [Company]. All rights reserved.
//

import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "./EditUserProfileStyleSheet"
import React from "react"


export default class EditUserProfile extends React.Component {

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

	onHeaderMenuDarkPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("NavigationMenu")
	}

	render() {
	
		return <View
				style={styles.editUserProfileView}>
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
							style={styles.editProfileText}>EDIT PROFILE</Text>
					</View>
				</View>
				<View
					style={styles.imageView}>
					<Image
						source={require("./../../assets/images/bitmap-5.png")}
						style={styles.bitmapImage}/>
					<View
						pointerEvents="box-none"
						style={{
							width: "100%",
							height: "100%",
							flex: 1,
							position: "absolute",
							justifyContent: "flex-end",
							alignItems: "flex-end",
						}}>
						<Image
							source={require("./../../assets/images/edit.png")}
							style={styles.editImage}/>
					</View>
				</View>
				<View
					style={styles.nameView}>
					<Image
						source={require("./../../assets/images/person---material-3.png")}
						style={styles.personMaterialImage}/>
					<Text
						style={styles.fullNameText}>Full Name</Text>
				</View>
				<View
					style={styles.dobView}>
					<Image
						source={require("./../../assets/images/icon-24px-4.png")}
						style={styles.icon24pxThreeImage}/>
					<Text
						style={styles.dateOfBirthText}>Date of Birth</Text>
				</View>
				<View
					style={styles.emailView}>
					<Image
						source={require("./../../assets/images/icon-24px-10.png")}
						style={styles.icon24pxTwoImage}/>
					<Text
						style={styles.emailAddressText}>Email Address</Text>
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
						style={styles.mobileView}>
						<Image
							source={require("./../../assets/images/icon-24px-6.png")}
							style={styles.icon24pxImage}/>
						<Text
							style={styles.mobileNumberText}>Mobile Number</Text>
					</View>
					<View
						style={styles.buttonView}>
						<Text
							style={styles.updateProfileText}>UPDATE PROFILE</Text>
					</View>
				</View>
			</View>
	}
}
