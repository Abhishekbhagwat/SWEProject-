//
//  CartStyleSheet.js
//  Burp
//
//  Created by Abhishek Bhagwat.
//  Copyright © 2018 [Company]. All rights reserved.
//

import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	cartView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "center",
	},
	headerView: {
		backgroundColor: "transparent",
		marginLeft: 25,
		marginTop: 21,
		width: 182,
		height: 86,
		alignSelf: "stretch",
	},
	headerMenuDarkImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		marginTop: 4,
		width: 16.5,
		height: null,
	},
	cartText: {
		color: "rgb(117, 117, 117)",
		fontFamily: "Avenir-Medium",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	titleTwoText: {
		color: "rgb(117, 117, 117)",
		fontFamily: "Avenir-Medium",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 29,
		backgroundColor: "transparent",
	},
	group3View: {
		backgroundColor: "transparent",
		marginTop: 9,
		width: 326.5,
		height: 155.5,
	},
	categoryView: {
		backgroundColor: "transparent",
		height: 130,
		flexDirection: "row",
		alignItems: "center",
	},
	bitmapImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 182,
		height: 130,
	},
	titleText: {
		color: "rgb(117, 117, 117)",
		fontFamily: "Avenir-Medium",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24.5,
		backgroundColor: "transparent",
		width: 114,
	},
	lineView: {
		backgroundColor: "rgb(151, 151, 151)",
		height: 0.5,
		alignItems: "flex-start",
	},
	lineTwoView: {
		backgroundColor: "rgb(151, 151, 151)",
		marginTop: 219,
		width: 325.5,
		height: 0.5,
		alignItems: "flex-start",
	},
	group2View: {
		backgroundColor: "transparent",
		marginBottom: 17,
		width: 329,
		height: 74.5,
	},
	titleThreeText: {
		color: "rgb(117, 117, 117)",
		fontFamily: "Avenir-Medium",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24.5,
		paddingTop: 3.5,
		backgroundColor: "transparent",
		marginLeft: 1,
		marginRight: 4,
	},
	groupView: {
		backgroundColor: "transparent",
		marginTop: 7,
		height: 41,
	},
	subtotal300Text: {
		color: "rgb(117, 117, 117)",
		fontFamily: "Avenir-Medium",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	takeawayFee020Text: {
		color: "rgb(117, 117, 117)",
		fontFamily: "Avenir-Medium",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginRight: 4,
	},
	placeOrderButton: {
		backgroundColor: "rgb(0, 188, 212)",
		borderRadius: 25,
		shadowColor: "rgba(0, 0, 0, 0.07)",
		shadowRadius: 7.5,
		shadowOpacity: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		marginBottom: 18,
		width: 200,
		height: 50,
	},
	placeOrderButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	placeOrderButtonText: {
		color: "white",
		fontFamily: "Avenir-Medium",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
})

export default styles
