import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class Loader extends Component {
    state = { opacity: new Animated.Value(0) }

    onLoad = () => {
        Animated.timing(this.state.opacity,
            { toValue: 1, duration: 2500 }
        ).start()
    }

    render() {
        return (
            <Animated.Image
                onLoad={this.onLoad}
                {...this.props}
                style={[
                    {
                        width: '100%',
                        height: '100%',
                        opacity: this.state.opacity,
                        transform: [
                            {
                                scale: this.state.opacity.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 1]
                                })
                            }
                        ]
                    }
                ]
                }
            />
        )
    }
}