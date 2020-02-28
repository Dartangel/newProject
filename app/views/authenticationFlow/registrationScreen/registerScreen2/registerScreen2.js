import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';
import { images } from '../../../../services/utils';
import { Picker } from 'react-native-wheel-pick';
import { ROUTERS, titles } from '../../../../services/constants';

export default class RegisterScreen2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedItem: '0-5',
            itemList: ['0-5', '5-10', '10-20', 'Более 20', '']
        }
    }
    onPickerSelect(index) {
        this.setState({
            selectedItem: index,
        })
        console.log('selectedItem= ' + this.state.selectedItem);
    }

    goToNextActivity = () => {
        const { navigation } = this.props;
        navigation.navigate(ROUTERS.RegisterScreen3);
    };

    render() {
        return (
            <ImageBackground style={styles.image} source={images.logerImage2}>
                <View style={styles.logo}>
                    <Text style={styles.header1}>{titles.REGISTER_HEADER3}</Text>
                    <Text style={styles.header2}>{titles.REGISTER_HEADER2}</Text>
                </View>
                <View style={styles.set}>
                    <Picker
                        style={styles.pickerStyle}
                        pickerData={this.state.itemList}
                        onValueChange={(index) => this.onPickerSelect(index)}
                        itemSpace={25}
                    >
                    </Picker>
                    <TouchableOpacity style={styles.nextBtn} onPress={this.goToNextActivity}>
                        <Text style={styles.btnText}>{titles.NEXT_BUTTON}</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground >
        );
    };
};