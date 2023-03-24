import React, {PropsWithChildren, useEffect, useRef} from 'react';
import {Animated, ViewStyle} from 'react-native';

type FadeInViewProps = PropsWithChildren<{
  style?: ViewStyle;
  duration?: number;
}>;

const FadeInView: React.FC<FadeInViewProps> = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: props.duration ?? 5000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, props.duration]);

  return (
    <Animated.View // Special animatable View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default FadeInView;
