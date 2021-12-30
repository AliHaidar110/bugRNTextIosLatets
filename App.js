import {useState} from 'react';
import {Button, View} from 'react-native';

const PROBLEMATIC_TEXT = 'تعزيز الثقة بالنفس في مجال العمل';

const App = () => {
  const [color, setColor] = useState({});

  const changeColor = () => {
    !color.container && setColor({container: 'grey', button: 'yello'});
    color.container && setColor({});
  };

  return (
    <View
      style={[
        {flex: 1},
        color.container && {backgroundColor: color.container},
      ]}>
      <Button
        style={[
          {
            backgroundColor: 'red',
          },
          color.button && {backgroundColor: color.container},
        ]}
        onPress={changeColor}
        title={'change color'}
      />
      <Text
        style={{
          letterSpacing: 1.15,
        }}>
        {PROBLEMATIC_TEXT}
      </Text>
    </View>
  );
};

export default App;
