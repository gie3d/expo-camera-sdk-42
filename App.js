import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
	React.useEffect(() => {
		Camera.requestCameraPermissionsAsync();
	}, []);

	return (
		<View style={styles.container}>
			<Camera
				style={{ width: 300, height: 300 }}
				type={Camera.Constants.Type.back}
			/>
			<Text>AAA</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
