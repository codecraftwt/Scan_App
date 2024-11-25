import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import ImageEditor from '@react-native-community/image-editor';
import {openCamera, openPicker} from 'react-native-image-crop-picker';

const ScanImage = require('../Assets/images/helper.png');
const galleryImage = require('../Assets/images/Group-9.png');

const CameraScreen = ({navigation}) => {
  const [imageUri, setImageUri] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const processImage = async (imagePath, img) => {

    const cropWidth = img.width * 0.9; 
    const cropHeight = img.height * 0.8; 
  
    const cropX = img.width * 0.1; 
    const cropY = img.height * 0.2; 
  
    const resizedImage = await ImageEditor.cropImage(imagePath, {
      offset: {x: 0, y: 0},  
      size: {width: img.width, height: img.height}, 
    });
  
    const croppedImage = await ImageEditor.cropImage(resizedImage.uri, {
      offset: {
        x: (cropX * img.width) / img.width, 
        y: (cropY * img.height) / img.height, 
      },
      size: {
        width: (cropWidth * img.width) / img.width, 
        height: (cropHeight * img.height) / img.height, 
      },
    });
    return croppedImage.uri;
  };

  const selectImage = async () => {
    setIsProcessing(true);
    try {
      const image = await openPicker({cropping: false});
      const processedImageUri = await processImage(image.path, image); 
      setImageUri(processedImageUri);
      await navigation.navigate('cameraResult', {imageUrl: processedImageUri});
    } catch (error) {
      console.log('Picker error: ', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const captureImage = async () => {
    setIsProcessing(true);
    try {
      const image = await openCamera({cropping: false});
      const processedImageUri = await processImage(image.path, image); 
      setImageUri(processedImageUri);
      await navigation.navigate('cameraResult', {imageUrl: processedImageUri}); 
    } catch (error) {
      console.log('Camera error: ', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <View style={styles.container}>
      {isProcessing ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#83FFCB" />
          <Text style={styles.processingText}>Processing...</Text>
        </View>
      ) : (
        <>
          <Text style={styles.title}>Scan the label</Text>
          <View style={styles.imageContainer}>
            <Image source={ScanImage} style={styles.image} />
          </View>
          <Text style={styles.subText}>Focus on the ingredients list.</Text>
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.button} onPress={captureImage}>
              <Text style={styles.buttonText}>Scan now</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={selectImage}>
              <Image source={galleryImage} style={styles.galleryImage} />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 45,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  imageContainer: {
    width: 400,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 262,
    height: 470,
    borderRadius: 10,
  },
  subText: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 40,
    textAlign: 'center',
    color: '#B0B0B0',
    letterSpacing: 0.32,
  },
  galleryImage: {
    height: 24,
    width: 28,
  },
  buttonView: {
    height: 100,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: 253,
    height: 66,
    borderRadius: 13,
    backgroundColor: '#83FFCB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Supreme Variable, sans-serif',
    fontWeight: '800',
    fontSize: 16,
    color: '#161616',
    textTransform: 'uppercase',
    letterSpacing: 2.08,
  },
  processingText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
});

export default CameraScreen;
