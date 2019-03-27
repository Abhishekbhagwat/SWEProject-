//
//  OrderHistoryStyleSheet.js
//  Burp
//
//  Created by Abhishek Bhagwat.
//  Copyright © 2018 [Company]. All rights reserved.
//

import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	orderHistoryView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "center",
	},
	headerView: {
		backgroundColor: "transparent",
		marginLeft: 25,
		marginTop: 21,
		width: 222,
		height: 20.5,
		alignSelf: "stretch",
		flexDirection: "row",
		alignItems: "center",
	},
	headerMenuDarkImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 16.5,
		height: 11,
	},
	orderHistoryText: {
		color: "rgb(117, 117, 117)",
		fontFamily: "Avenir-Medium",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	group3View: {
		backgroundColor: "transparent",
		marginTop: 74,
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
	group3TwoView: {
		backgroundColor: "transparent",
		marginTop: 20,
		width: 326.5,
		height: 155.5,
	},
	categoryTwoView: {
		backgroundColor: "transparent",
		height: 130,
		flexDirection: "row",
		alignItems: "center",
	},
	bitmapTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 182,
		height: 130,
	},
	titleTwoText: {
		color: "rgb(117, 117, 117)",
		fontFamily: "Avenir-Medium",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 24.5,
		backgroundColor: "transparent",
		marginRight: 29,
	},
	lineTwoView: {
		backgroundColor: "rgb(151, 151, 151)",
		height: 0.5,
		alignItems: "flex-start",
	},
})

export default styles
