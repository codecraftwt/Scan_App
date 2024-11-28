import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import ImageEditor from '@react-native-community/image-editor';
import {openCamera, openPicker} from 'react-native-image-crop-picker';
import LottieView from 'lottie-react-native';
import SyncLoader from '../Assets/loader.json';

const ScanImage = require('../Assets/images/helper.png');
const galleryImage = require('../Assets/images/Group-9.png');

const CameraScreen = ({navigation}) => {
  const [imageUri, setImageUri] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const processImage = async (imagePath, img) => {
    try {
      const cropWidth = img.width * 0.9;
      const cropHeight = img.height * 0.8;
      const cropX = img.width * 0.1;
      const cropY = img.height * 0.2;

      const resizedImage = await ImageEditor.cropImage(imagePath, {
        offset: {x: 0, y: 0},
        size: {width: img.width, height: img.height},
      });

      if (!resizedImage?.uri) {
        throw new Error('Resized image URI is undefined.');
      }

      const croppedImage = await ImageEditor.cropImage(resizedImage?.uri, {
        offset: {
          x: (cropX * img.width) / img.width,
          y: (cropY * img.height) / img.height,
        },
        size: {
          width: (cropWidth * img.width) / img.width,
          height: (cropHeight * img.height) / img.height,
        },
      });

      if (!croppedImage?.uri) {
        throw new Error('Cropped image URI is undefined.');
      }

      return croppedImage?.uri;
    } catch (error) {
      console.log('Error during image processing: ', error.message);
      return null;
    }
  };

  const selectImage = async () => {
    try {
      const image = await openPicker({cropping: false});
      setIsProcessing(true);
      const processedImageUri = await processImage(image.path, image);
      setImageUri(processedImageUri);
      await navigation.navigate('match', {
        imageUrl: processedImageUri,
        originalImageUrl: image.path,
      });
    } catch (error) {
      console.log('Picker error: ', error);
    } finally {
      setTimeout(() => {
        setIsProcessing(false);
      }, 2000);
    }
  };

  const captureImage = async () => {
    try {
      const image = await openCamera({cropping: false});
      setIsProcessing(true);
      const processedImageUri = await processImage(image.path, image);
      setImageUri(processedImageUri);
      await navigation.navigate('match', {
        imageUrl: processedImageUri,
        originalImageUrl: image.path,
      });
    } catch (error) {
      console.log('Camera error: ', error);
    } finally {
      setTimeout(() => {
        setIsProcessing(false);
      }, 2000);
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <View style={styles.container}>
        {isProcessing ? (
          <View style={styles.loaderContainer}>
            <LottieView
              source={SyncLoader}
              style={styles.lottie}
              autoPlay
              loop
              resizeMode="contain"
            />
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
    </>
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
    width: '100%',
    height: '100%',
    backgroundColor: '#1C1C1C',
  },
  lottie: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 22,
    color: '#FFFFFF',
    lineHeight: 25,
    fontWeight: '700',
    marginBottom: 20,
    marginTop: 20,
  },
  imageContainer: {
    width: 300,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  image: {
    width: 245,
    height: 435,
    borderRadius: 18,
  },
  subText: {
    fontFamily: 'Inter',
    fontSize: 16,
    marginTop: 50,
    textAlign: 'center',
    color: '#B0B0B0',
    letterSpacing: 0.32,
  },
  galleryImage: {
    height: 28,
    width: 32,
    tintColor: '#FFFFFF',
  },
  buttonView: {
    height: 100,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 65,
  },
  button: {
    width: 245,
    height: 60,
    borderRadius: 13,
    backgroundColor: '#83FFB4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Supreme Variable',
    fontSize: 16,
    color: '#161616',
    textTransform: 'uppercase',
    letterSpacing: 2.08,
    lineHeight: 21.6,
  },
  processingText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
});

export default CameraScreen;
