//
//  PaymentDetails
//  Burp
//
//  Created by Abhishek Bhagwat.
//  Copyright © 2018 [Company]. All rights reserved.
//

import { View, Text, Image } from "react-native"
import styles from "./PaymentDetailsStyleSheet"
import React from "react"


export default class PaymentDetails extends React.Component {

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

	render() {
	
		return <View
				style={styles.paymentDetailsView}>
				<View
					style={styles.headerView}>
					<Image
						source={require("./../../assets/images/header-menu-dark.png")}
						style={styles.headerMenuDarkImage}/>
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
							style={styles.paymentDetailsText}>PAYMENT DETAILS</Text>
					</View>
				</View>
				<View
					style={styles.cardView}>
					<View
						pointerEvents="box-none"
						style={{
							flexDirection: "row",
						}}>
						<Text
							style={styles.cardNumberTwoText}>Card Number</Text>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								flexDirection: "row",
								justifyContent: "flex-end",
							}}>
							<Image
								source={require("./../../assets/images/visa.png")}
								style={styles.visaImage}/>
						</View>
					</View>
					<Text
						style={styles.numberText}>2345 4344 5678 6756</Text>
					<View
						pointerEvents="box-none"
						style={{
							flexDirection: "row",
						}}>
						<Text
							style={styles.cardOwnerTwoText}>Card Owner</Text>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								flexDirection: "row",
								justifyContent: "flex-end",
							}}>
							<Text
								style={styles.issuedText}>Issued</Text>
							<Text
								style={styles.expireText}>Expire</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							justifyContent: "flex-end",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.nameText}>USERNAME</Text>
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
									style={styles.monthText}>03/18</Text>
								<Text
									style={styles.monthTwoText}>03/21</Text>
							</View>
						</View>
					</View>
				</View>
				<View
					style={styles.addNewFormView}>
					<Text
						style={styles.titleText}>ADD NEW CARD</Text>
					<View
						style={styles.ownerView}>
						<Image
							source={require("./../../assets/images/person---material-3.png")}
							style={styles.personMaterialImage}/>
						<Text
							style={styles.cardOwnerText}>Card Owner</Text>
					</View>
					<View
						style={styles.numberView}>
						<Image
							source={require("./../../assets/images/icon-24px-9.png")}
							style={styles.icon24pxThreeImage}/>
						<Text
							style={styles.cardNumberText}>Card Number</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							flexDirection: "row",
						}}>
						<View
							style={styles.monthView}>
							<Image
								source={require("./../../assets/images/icon-24px-3.png")}
								style={styles.icon24pxImage}/>
							<Text
								style={styles.expMonthText}>Exp. Month</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								flexDirection: "row",
								justifyContent: "flex-end",
							}}>
							<View
								style={styles.yearView}>
								<Image
									source={require("./../../assets/images/icon-24px-3.png")}
									style={styles.icon24pxTwoImage}/>
								<Text
									style={styles.expYearText}>Exp. Year</Text>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							justifyContent: "flex-end",
						}}>
						<View
							style={styles.buttonView}>
							<Text
								style={styles.addNewCardText}>ADD NEW CARD</Text>
						</View>
					</View>
				</View>
			</View>
	}
}
