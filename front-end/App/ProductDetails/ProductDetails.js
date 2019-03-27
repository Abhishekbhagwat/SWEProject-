//
//  ProductDetails
//  Burp
//
//  Created by Abhishek Bhagwat.
//  Copyright © 2018 [Company]. All rights reserved.
//

import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "./ProductDetailsStyleSheet"
import React from "react"


export default class ProductDetails extends React.Component {

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

	onButtonTwoPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("Cart")
	}

	onButtonPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("Checkout")
	}

	onbuttonPressed = () => {
	
	}

	onBoxPressed = () => {
	
	}

	render() {
	
		return <View
				style={styles.productDetailsView}>
				<View
					pointerEvents="box-none"
					style={{
						flexDirection: "row",
					}}>
					<Image
						source={require("./../../assets/images/image-2.png")}
						style={styles.imageImage}/>
					<View
						pointerEvents="box-none"
						style={{
							width: "100%",
							height: "100%",
							position: "absolute",
							flexDirection: "row",
							justifyContent: "center",
						}}>
						<View
							style={styles.headerView}>
							<Image
								source={require("./../../assets/images/header-menu-white.png")}
								style={styles.headerMenuWhiteImage}/>
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
									source={require("./../../assets/images/header-options-white.png")}
									style={styles.headerOptionsWhiteImage}/>
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
									style={styles.productDetailsText}>PRODUCT DETAILS</Text>
							</View>
						</View>
					</View>
				</View>
				<View
					style={styles.likesView}>
					<Image
						source={require("./../../assets/images/heart---fontawesome.png")}
						style={styles.heartFontawesomeImage}/>
					<Text
						style={styles.countText}>24.5K</Text>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						flexDirection: "row",
					}}>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "flex-start",
							flexDirection: "row",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "flex-start",
								flexDirection: "row",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "flex-start",
									flexDirection: "row",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										alignSelf: "flex-start",
										flexDirection: "row",
									}}>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "flex-start",
											flexDirection: "row",
										}}>
										<View
											pointerEvents="box-none"
											style={{
												alignSelf: "flex-start",
												flexDirection: "row",
											}}>
											<View
												pointerEvents="box-none"
												style={{
													alignSelf: "flex-start",
													flexDirection: "row",
												}}>
												<View
													pointerEvents="box-none"
													style={{
														alignSelf: "flex-start",
														flexDirection: "row",
													}}>
													<View
														pointerEvents="box-none"
														style={{
															alignSelf: "flex-start",
															flex: 1,
															flexDirection: "row",
															justifyContent: "flex-end",
														}}>
														<Text
															style={styles.priceText}>$3.00</Text>
													</View>
													<View
														pointerEvents="box-none"
														style={{
															flex: 1,
															flexDirection: "row",
															justifyContent: "flex-end",
															alignItems: "flex-start",
														}}/>
												</View>
												<View
													pointerEvents="box-none"
													style={{
														flex: 1,
														flexDirection: "row",
														justifyContent: "flex-end",
														alignItems: "flex-start",
													}}/>
											</View>
											<View
												pointerEvents="box-none"
												style={{
													flex: 1,
													flexDirection: "row",
													justifyContent: "flex-end",
													alignItems: "flex-start",
												}}/>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												flex: 1,
												flexDirection: "row",
												justifyContent: "flex-end",
												alignItems: "flex-start",
											}}/>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											flex: 1,
											flexDirection: "row",
											justifyContent: "flex-end",
											alignItems: "flex-start",
										}}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										flex: 1,
										flexDirection: "row",
										justifyContent: "flex-end",
										alignItems: "flex-start",
									}}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									flexDirection: "row",
									justifyContent: "flex-end",
									alignItems: "flex-start",
								}}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								flexDirection: "row",
								justifyContent: "flex-end",
								alignItems: "flex-start",
							}}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "flex-end",
							alignItems: "flex-start",
						}}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						flexDirection: "row",
					}}>
					<Text
						style={styles.textTwoText}>Contains:{"\n"}	Steamed Chicken{"\n"}	Cucumbers{"\n"}	Scallions{"\n"}	Miso Soup</Text>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							flexDirection: "row",
							justifyContent: "flex-end",
						}}>
						<View
							style={styles.sizeView}>
							<Text
								style={styles.titleTwoText}>SIZE</Text>
							<View
								pointerEvents="box-none"
								style={{
									flexDirection: "row",
								}}>
								<TouchableOpacity
									onPress={this.onBoxPressed}
									style={styles.boxButton}/>
								<View
									pointerEvents="box-none"
									style={{
										width: "100%",
										height: "100%",
										position: "absolute",
										flexDirection: "row",
									}}>
									<Text
										style={styles.lText}>L</Text>
								</View>
							</View>
						</View>
						<View
							style={styles.quantityView}>
							<Text
								style={styles.titleText}>QUANTITY</Text>
							<View
								pointerEvents="box-none"
								style={{
									flexDirection: "row",
								}}>
								<View
									style={styles.boxView}/>
								<View
									pointerEvents="box-none"
									style={{
										width: "100%",
										height: "100%",
										position: "absolute",
										flexDirection: "row",
										justifyContent: "center",
									}}>
									<Text
										style={styles.textText}>1</Text>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										width: "100%",
										height: "100%",
										position: "absolute",
										flexDirection: "row",
									}}>
									<TouchableOpacity
										onPress={this.onbuttonPressed}
										style={styles.quantityDecreaseButton}>
										<Text
											style={styles.quantityDecreaseButtonText}>_</Text>
									</TouchableOpacity>
									<View
										pointerEvents="box-none"
										style={{
											flex: 1,
											flexDirection: "row",
											justifyContent: "flex-end",
										}}>
										<Text
											style={styles.quantityIncreaseText}>+</Text>
									</View>
								</View>
							</View>
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
						pointerEvents="box-none"
						style={{
							flexDirection: "row",
							alignItems: "flex-end",
						}}>
						<TouchableOpacity
							onPress={this.onButtonPressed}
							style={styles.buyNowButton}>
							<Text
								style={styles.buyNowButtonText}>BUY NOW</Text>
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
							<TouchableOpacity
								onPress={this.onButtonTwoPressed}
								style={styles.addToCartButton}>
								<Text
									style={styles.addToCartButtonText}>ADD TO CART</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
	}
}
