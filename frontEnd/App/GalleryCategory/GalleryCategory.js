//
//  GalleryCategory
//  Burp
//
//  Created by Abhishek Bhagwat.
//  Copyright © 2018 [Company]. All rights reserved.
//

import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "./GalleryCategoryStyleSheet"
import React from "react"


export default class GalleryCategory extends React.Component {

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

	onCategoryPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("NorthSpineTwo")
	}

	onHeaderOptionsDarkPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("Cart")
	}

	onHeaderMenuDarkPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("NavigationMenu")
	}

	render() {
	
		return <View
				style={styles.galleryCategoryView}>
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
						<TouchableOpacity
							onPress={this.onHeaderOptionsDarkPressed}
							style={styles.cartButtonButton}>
							<Image
								source={require("./../../assets/images/header-options-dark.png")}
								style={styles.cartButtonButtonImage}/>
						</TouchableOpacity>
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
							style={styles.browseText}>BROWSE</Text>
					</View>
				</View>
				<TouchableOpacity
					onPress={this.onCategoryPressed}
					style={styles.categoryButton}>
					<Image
						source={require("./../../assets/images/bitmap-8.png")}
						style={styles.categoryButtonImage}/>
					<Text
						style={styles.categoryButtonText}>NORTH SPINE {"\n"}</Text>
				</TouchableOpacity>
				<View
					style={styles.categoryTwoView}>
					<Image
						source={require("./../../assets/images/bitmap-7.png")}
						style={styles.bitmapTwoImage}/>
					<View
						pointerEvents="box-none"
						style={{
							flex: 1,
							justifyContent: "flex-end",
						}}>
						<Text
							style={styles.titleTwoText}>SOUTH SPINE{"\n"}</Text>
					</View>
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
						style={styles.categoryView}>
						<View
							pointerEvents="box-none"
							style={{
								flexDirection: "row",
							}}>
							<Image
								source={require("./../../assets/images/bitmap-3.png")}
								style={styles.bitmapImage}/>
							<View
								pointerEvents="box-none"
								style={{
									width: "100%",
									height: "100%",
									position: "absolute",
									flexDirection: "row",
								}}>
								<View
									style={styles.statsView}>
									<View
										style={styles.likesView}>
										<Image
											source={require("./../../assets/images/heart---fontawesome-2.png")}
											style={styles.heartFontawesomeImage}/>
										<Text
											style={styles.countThreeText}>24.5K</Text>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "stretch",
											flex: 1,
											flexDirection: "row",
											justifyContent: "flex-end",
											alignItems: "center",
										}}>
										<View
											style={styles.messageView}>
											<Image
												source={require("./../../assets/images/chat-bubble---material.png")}
												style={styles.chatBubbleMaterialImage}/>
											<Text
												style={styles.countTwoText}>34K</Text>
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
								<Text
									style={styles.titleText}>PICNIC TRIP</Text>
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
										style={styles.countText}>324 Photos, 45 Videos</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
	}
}
