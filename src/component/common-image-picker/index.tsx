import { Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import DocumentPicker from 'react-native-document-picker';

const CommonImagePicker = ({image, onImagePick}: any) => {
  const [fileResponse, setFileResponse] = useState({} as any);

  const handleDocumentSelection = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: ['image/*'], // Only images
      });
      onImagePick(res[0]);
      setFileResponse(res[0]); // Handling single file selection
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('File picking cancelled');
      } else {
        console.error(err);
      }
    }
  };
  return (
    <Pressable
      onPress={handleDocumentSelection}
      style={{
        height: 50,
        width: 50,
        borderRadius: 100,
        backgroundColor: 'white',
      }}>
      {fileResponse?.uri ||
        (image && (
          <Image
            source={{uri: fileResponse?.uri || image}}
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'cover',
              borderRadius: 100,
            }}
          />
        ))}
    </Pressable>
  );
};

export default CommonImagePicker;
