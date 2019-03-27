//
//  WelcomeStyleSheet.js
//  Burp
//
//  Created by Abhishek Bhagwat.
//  Copyright © 2018 [Company]. All rights reserved.
//

import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	welcomeView: {
		backgroundColor: "white",
		flex: 1,
	},
	backgroundImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		height: 673,
		width: null,
	},
	titleText: {
		color: "white",
		fontFamily: "Avenir-Book",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 52,
		backgroundColor: "transparent",
		marginLeft: 57,
		marginRight: 58,
		marginTop: 435,
	},
	subheadingText: {
		color: "white",
		fontFamily: "Avenir-Light",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 29,
		backgroundColor: "transparent",
		marginBottom: 25,
		width: 325,
	},
	getStartedButton: {
		backgroundColor: "rgb(0, 188, 212)",
		borderRadius: 25,
		shadowColor: "rgba(0, 0, 0, 0.07)",
		shadowRadius: 7.5,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		marginBottom: 44,
		width: 325,
		height: 50,
	},
	getStartedButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	getStartedButtonText: {
		color: "white",
		fontFamily: "Avenir-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
})

export default styles
