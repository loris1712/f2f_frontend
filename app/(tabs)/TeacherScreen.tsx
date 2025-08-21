import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';

export default function ProfessorScreen() {
  const device = useCameraDevice('back');
  const { hasPermission, requestPermission } = useCameraPermission();
  const [permissionRequested, setPermissionRequested] = useState(false);

  useEffect(() => {
    async function checkPermission() {
      if (!hasPermission && !permissionRequested) {
        const status = await requestPermission();
        console.log('Camera permission status:', status);
        setPermissionRequested(true);
      }
    }
    checkPermission();
  }, [hasPermission, permissionRequested, requestPermission]);

  if (!hasPermission) {
    return (
      <View style={styles.center}>
        <Text>No camera permission</Text>
      </View>
    );
  }

  if (device == null) {
    return (
      <View style={styles.center}>
        <Text>No camera device found</Text>
      </View>
    );
  }

  return <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />;
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
