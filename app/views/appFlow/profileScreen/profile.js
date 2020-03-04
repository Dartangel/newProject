import React from 'react';
import styles from './style';
import { View, Text, ScrollView } from 'react-native';
import { titles } from '../../../services/constants';
import { warmUpList, generalSettings, soundSettings, supportList } from '../../../../__mocks__/temp'
import CodeBlock from './components/codeBlock';



const ProfileScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.mainHeaderText}>{titles.I_AM}</Text>
            </View>
            <ScrollView>
                {/* temp.map((item, header)=>{
                    return  <CodeBlock list={item} header={header} />
                }) */}
                <CodeBlock list={warmUpList} header={titles.HEADER_TITLE_1} />
                <CodeBlock list={generalSettings} header={titles.HEADER_TITLE_2} />
                <CodeBlock list={soundSettings} header={titles.HEADER_TITLE_3} />
                <CodeBlock list={supportList} header={titles.HEADER_TITLE_4} />
            </ScrollView>
        </View>
    );
}
export default ProfileScreen;