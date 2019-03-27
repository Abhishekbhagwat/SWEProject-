//
//  NorthSpineStyleSheet.js
//  Burp
//
//  Created by Abhishek Bhagwat.
//  Copyright © 2018 [Company]. All rights reserved.
//

import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	northSpineView: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "center",
	},
	headerView: {
		backgroundColor: "transparent",
		marginLeft: 25,
		marginTop: 21,
		width: 204.5,
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
	riceStallText: {
		color: "rgb(117, 117, 117)",
		fontFamily: "Avenir-Medium",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	foodItem1Button: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		marginTop: 74,
		width: 326.5,
		height: 155.5,
	},
	foodItem1ButtonImage: {
		resizeMode: "contain",
		marginRight: 30,
	},
	foodItem1ButtonText: {
		color: "rgb(117, 117, 117)",
		fontFamily: "Avenir-Medium",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
})

export default styles
