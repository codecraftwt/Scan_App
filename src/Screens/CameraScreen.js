import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import ImageEditor from '@react-native-community/image-editor';
import {openCamera, openPicker} from 'react-native-image-crop-picker';
import LottieView from 'lottie-react-native';
import SyncLoader from '../Assets/loader.json';
import {globalColors} from '../Assets/themes/globalColors';
import {m} from 'walstar-rn-responsive';

const ScanImage = require('../Assets/images/helper.png');
const galleryImage = require('../Assets/images/Group-9.png');

const CameraScreen = ({navigation}) => {
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
      <SafeAreaView style={styles.safeAreaContainer}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={globalColors.Black}
        />
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
            <ScrollView>
              <View style={styles.container}>
                <Text style={styles.title}>Scan the label</Text>
                <View style={styles.imageContainer}>
                  <Image source={ScanImage} style={styles.image} />
                </View>
                <Text style={styles.subText}>
                  Focus on the ingredients list.
                </Text>
                <View style={styles.buttonView}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={captureImage}>
                    <Text style={styles.buttonText}>Scan now</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={selectImage}>
                    <Image source={galleryImage} style={styles.galleryImage} />
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1, 
    backgroundColor: globalColors.Black
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: globalColors.Black,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: globalColors.GunmetalGray,
  },
  lottie: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: m(22),
    color: globalColors.White,
    lineHeight: m(25),
    fontWeight: '700',
    marginBottom: m(20),
    marginTop: m(20),
  },
  imageContainer: {
    width: m(300),
    height: m(400),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: m(30),
  },
  image: {
    width: m(245),
    height: m(435),
    borderRadius: m(18),
  },
  subText: {
    fontFamily: 'Inter',
    fontSize: m(16),
    marginTop: m(50),
    textAlign: 'center',
    color: globalColors.LightGray,
    letterSpacing: 0.32,
  },
  galleryImage: {
    height: m(28),
    width: m(32),
    tintColor: globalColors.White,
  },
  buttonView: {
    height: m(100),
    width: m(300),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: m(50),
  },
  button: {
    width: m(245),
    height: m(60),
    borderRadius: m(13),
    backgroundColor: globalColors.MintGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Supreme Variable',
    fontSize: m(16),
    color: globalColors.CharcoalGray,
    textTransform: 'uppercase',
    letterSpacing: 2.08,
    lineHeight: m(21.6),
  },
  processingText: {
    color: globalColors.White,
    fontSize: m(16),
    fontWeight: '600',
    marginTop: m(10),
  },
});

export default CameraScreen;
