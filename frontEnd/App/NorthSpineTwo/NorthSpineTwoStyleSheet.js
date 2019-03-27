//
//  NorthSpineTwoStyleSheet.js
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
		width: 264.5,
		height: 20.5,
		alignSelf: "stretch",
		flexDirection: "row",
		alignItems: "center",
	},
	headerMenuDarkButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 16.5,
		height: 11,
	},
	headerMenuDarkButtonImage: {
		resizeMode: "contain",
	},
	headerMenuDarkButtonText: {
		color: "black",
		fontFamily: ".SFNSText",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	northSpineFoodCouText: {
		color: "rgb(117, 117, 117)",
		fontFamily: "Avenir-Medium",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	restaurentCategory1Button: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		marginTop: 74,
		width: 326.5,
		height: 155.5,
	},
	restaurentCategory1ButtonImage: {
		resizeMode: "contain",
		marginRight: 30,
	},
	restaurentCategory1ButtonText: {
		color: "rgb(117, 117, 117)",
		fontFamily: "Avenir-Medium",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	group3Button: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		marginTop: 20,
		width: 326.5,
		height: 155.5,
	},
	group3ButtonImage: {
		resizeMode: "contain",
		marginRight: 30,
	},
	group3ButtonText: {
		color: "rgb(117, 117, 117)",
		fontFamily: "Avenir-Medium",
		fontSize: 15,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
})

export default styles
