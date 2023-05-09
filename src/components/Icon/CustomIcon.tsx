import React from 'react';
import AvesomeIcon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type IconProps = {
  iconSet: 'FontAwesome5' | 'MaterialCommunityIcons';
  name: string;
  size?: number;
  color?: string;
  style?: object;
};

const CustomIcon: React.FC<IconProps> = ({
  iconSet,
  name,
  size = 24,
  color = '#000',
  style,
}) => {
  switch (iconSet) {
    case 'FontAwesome5':
      return (
        <AvesomeIcon name={name} size={size} color={color} style={style} />
      );
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          name={name}
          size={size}
          color={color}
          style={style}
        />
      );
    default:
      return null;
  }
};

export default CustomIcon;
