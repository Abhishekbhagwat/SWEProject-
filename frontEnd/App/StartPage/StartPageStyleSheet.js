//
//  StartPageStyleSheet.js
//  Burp
//
//  Created by Abhishek Bhagwat.
//  Copyright © 2018 [Company]. All rights reserved.
//

import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	startPageView: {
		backgroundColor: "white",
		flex: 1,
		justifyContent: "center",
	},
	signinImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		marginRight: -69,
		height: 667,
		width: null,
	},
	titleText: {
		color: "white",
		fontFamily: "Avenir-Medium",
		fontSize: 26,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 42,
		backgroundColor: "transparent",
		marginTop: 34,
		width: 325,
	},
	taglineText: {
		color: "white",
		fontFamily: "Avenir-Light",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 29,
		backgroundColor: "transparent",
		marginTop: 13,
		width: 325,
	},
	signInButton: {
		backgroundColor: "rgb(0, 188, 212)",
		borderRadius: 25,
		shadowColor: "rgba(0, 0, 0, 0.07)",
		shadowRadius: 7.5,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		marginBottom: 25,
		width: 325,
		height: 50,
	},
	signInButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	signInButtonText: {
		color: "white",
		fontFamily: "Avenir-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	signUpButton: {
		backgroundColor: "white",
		borderRadius: 25,
		shadowColor: "rgba(0, 0, 0, 0.07)",
		shadowRadius: 7.5,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		marginBottom: 42,
		width: 325,
		height: 50,
	},
	signUpButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	signUpButtonText: {
		color: "rgb(117, 117, 117)",
		fontFamily: "Avenir-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
})

export default styles
