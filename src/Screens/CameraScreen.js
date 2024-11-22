import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import ImageEditor from '@react-native-community/image-editor';
import {h, moderateScale} from 'walstar-rn-responsive';
import {openCamera, openPicker} from 'react-native-image-crop-picker';

const ScanImage = require('../Assets/helper.png');
const galleryImage = require('../Assets/Group-9.png');

const CameraScreen = ({navigation}) => {
  const [imageUri, setImageUri] = useState(null);

  const selectImage = async () => {
    openPicker({
      cropping: false,
    })
      .then(async image => {
        const resizedImage = await ImageEditor.cropImage(image.path, {
          offset: {x: 0, y: 0},
          size: {width: 1024, height: (image.height / image.width) * 1024},
        });

        const croppedImage = await ImageEditor.cropImage(resizedImage.uri, {
          offset: {x: 0.2 * resizedImage.width, y: 0.25 * resizedImage.height},
          size: {
            width: 0.6 * resizedImage.width,
            height: 0.5 * resizedImage.height,
          },
        });
        const processedImage = await ImageEditor.cropImage(croppedImage.uri, {
          offset: {x: 0, y: 0},
          size: {width: resizedImage.width, height: resizedImage.height},
        });

        setImageUri(processedImage.uri);
        navigation.navigate('cameraResult', {imageUrl: processedImage.uri});
      })
      .catch(error => {
        console.log('Camera error: ', error);
      });
  };

  const captureImage = async () => {
    await openCamera({
      cropping: false,
    })
      .then(async image => {
        const resizedImage = await ImageEditor.cropImage(image.path, {
          offset: {x: 0, y: 0},
          size: {width: 1024, height: (image.height / image.width) * 1024},
        });

        const croppedImage = await ImageEditor.cropImage(resizedImage.uri, {
          offset: {x: 0.2 * resizedImage.width, y: 0.25 * resizedImage.height},
          size: {
            width: 0.6 * resizedImage.width,
            height: 0.5 * resizedImage.height,
          },
        });
        const processedImage = await ImageEditor.cropImage(croppedImage.uri, {
          offset: {x: 0, y: 0},
          size: {width: resizedImage.width, height: resizedImage.height},
        });

        setImageUri(processedImage.uri);
        navigation.navigate('cameraResult', {imageUrl: processedImage.uri});
      })
      .catch(error => {
        console.log('Camera error: ', error);
        setIsProcessing(false);
      });
  };

  return (
    <View style={styles.container}>
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
