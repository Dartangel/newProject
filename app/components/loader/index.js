import React from 'react';
import { Animated } from 'react-native';
import { images } from '../../services/utils';

export default function Loader() {
    const opacity = new Animated.Value(0);

    Animated.timing(opacity, {
        toValue: 1,
        duration: 2000
    }).start();

    return (
        <Animated.Image
            style={[
                {
                    width: '100%',
                    height: '100%',
                    opacity: opacity,
                    transform: [
                        {
                            scale: opacity.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 1]
                            })
                        }
                    ]
                }
            ]
            }
            source={images.logerImage}
        />
    )
}