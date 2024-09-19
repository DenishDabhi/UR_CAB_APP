import {View, Text, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import DocumentPicker, {types} from 'react-native-document-picker';

const CommonDocumentPicker = ({image, onDocumentPick}: any) => {
  const [fileResponse, setFileResponse] = useState({}as any);

  const handleDocumentSelection = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [
          types.images, // This covers PNG, JPG, GIF
          'image/svg+xml', // Manually add SVG MIME type
        ],
        allowMultiSelection: false, // Set to true if you want multiple file uploads
      });

      // Set selected file information
      setFileResponse(res[0]); // res will be an array, but we're allowing only one file
      onDocumentPick(res[0]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User canceled the picker
        console.log('File picking cancelled');
      } else {
        throw err;
      }
    }
  };
  return (
    <Pressable onPress={handleDocumentSelection} style={{padding: 15}}>
      <View>
        <View
          style={{
            padding: 20,
            backgroundColor: 'lightblue',
            borderRadius: 15,
            gap: 15,
            justifyContent: 'center',
            alignItems: 'center',
            height: 150,
            width: '100%',
          }}>
          {fileResponse?.uri || image ? (
            <Image
              source={{uri: fileResponse?.uri || image}}
              style={{height: '100%', width: '100%', resizeMode: 'cover'}}
            />
          ) : (
            <View>
              {/* <View
            style={{
              backgroundColor: 'lightgray',
              padding: 3,
              borderRadius: 100,
            }}>
            <LeftIcon height={15} width={15} />
          </View> */}
              <Text style={{fontSize: 12}}>Click to Upload</Text>
              <Text>SVG,PNG,JPG or GIF (max.800x400px)</Text>
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default CommonDocumentPicker;
