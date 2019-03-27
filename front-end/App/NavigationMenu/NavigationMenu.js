//
//  NavigationMenu
//  Burp
//
//  Created by Abhishek Bhagwat.
//  Copyright © 2018 [Company]. All rights reserved.
//

import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "./NavigationMenuStyleSheet"
import React from "react"


export default class NavigationMenu extends React.Component {

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

	onStatsPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("OrderHistory")
	}

	onMessagesPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("Messages")
	}

	onProfilePressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("EditUserProfile")
	}

	render() {
	
		return <View
				style={styles.navigationMenuView}>
				<View
					style={styles.menuBackground2View}/>
				<View
					pointerEvents="box-none"
					style={{
						width: "100%",
						height: "100%",
						position: "absolute",
					}}>
					<View
						style={styles.userInfoView}>
						<Image
							source={require("./../../assets/images/image-3.png")}
							style={styles.imageImage}/>
						<Text
							style={styles.nameText}>USERNAME </Text>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								justifyContent: "flex-end",
							}}>
							<Text
								style={styles.postText}>Points </Text>
						</View>
					</View>
					<TouchableOpacity
						onPress={this.onProfilePressed}
						style={styles.profileButton}>
						<Image
							source={require("./../../assets/images/person---material-2.png")}
							style={styles.profileButtonImage}/>
						<Text
							style={styles.profileButtonText}>PROFILE</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={this.onMessagesPressed}
						style={styles.messagesButton}>
						<Image
							source={require("./../../assets/images/icon-24px-13.png")}
							style={styles.messagesButtonImage}/>
						<Text
							style={styles.messagesButtonText}>MESSAGES</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={this.onStatsPressed}
						style={styles.statsButton}>
						<Image
							source={require("./../../assets/images/icon-24px-12.png")}
							style={styles.statsButtonImage}/>
						<Text
							style={styles.statsButtonText}>ORDERS</Text>
					</TouchableOpacity>
					<View
						style={styles.settingsView}>
						<Image
							source={require("./../../assets/images/icon-24px-11.png")}
							style={styles.icon24pxTwoImage}/>
						<Text
							style={styles.settingsText}>SETTINGS</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							justifyContent: "flex-end",
						}}>
						<View
							style={styles.signoutView}>
							<Image
								source={require("./../../assets/images/icon-24px-2.png")}
								style={styles.icon24pxImage}/>
							<Text
								style={styles.signoutText}>SIGN OUT</Text>
						</View>
					</View>
				</View>
			</View>
	}
}
