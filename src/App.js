import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'

const App = () => {
	return (
		<ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
			<View style={styles.body}>
				<View style={styles.sectionContainer}>
					<Text style={styles.sectionTitle}>Step One</Text>
					<Text style={styles.sectionDescription}>
						Edit <Text style={styles.highlight}>App.js</Text> to change this screen and then come back to
						see your edits.
					</Text>
				</View>
				<View style={styles.sectionContainer}>
					<Text style={styles.sectionTitle}>See Your Changes</Text>
					<Text style={styles.sectionDescription}>Hello world!</Text>
				</View>
				<View style={styles.sectionContainer}>
					<Text style={styles.sectionTitle}>Debug</Text>
					<Text style={styles.sectionDescription}>Hello world!</Text>
				</View>
				<View style={styles.sectionContainer}>
					<Text style={styles.sectionTitle}>Learn More</Text>
					<Text style={styles.sectionDescription}>Read the docs to discover what to do next:</Text>
				</View>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1
	},
	engine: {
		position: 'absolute',
		right: 0
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600'
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400'
	},
	highlight: {
		fontWeight: '700'
	},
	footer: {
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'right'
	}
})

export default App
