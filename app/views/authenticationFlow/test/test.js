import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { titles } from '../../constants/string';
import {
  itemArraysOne,
  itemArraysTwo,
  itemArraysThree,
  itemArraysFour,
  itemArraysFive,
  itemArraysSix,
  itemArraysSeven,
} from '../../constants/itemListArray';
import styles from './style';
import CurriculumItems from '../../components/curriculumItems';
import ViewMoreText from 'react-native-view-more-text';
import ItemsHeader from './components/itemsHeader';

const list = [
  {
    arrays: itemArraysOne,
    title: titles.SECTIONS_ONE,
  },
  {
    arrays: itemArraysTwo,
    title: titles.SECTIONS_TWO,
  },
  {
    arrays: itemArraysThree,
    title: titles.SECTIONS_THREE,
  },
  {
    arrays: itemArraysFour,
    title: titles.SECTIONS_FOUR,
  },
  {
    arrays: itemArraysFive,
    title: titles.SECTIONS_FIVE,
  },
  {
    arrays: itemArraysSix,
    title: titles.SECTIONS_SIX,
  },
  {
    arrays: itemArraysSeven,
    title: titles.SECTIONS_SEVEN,
  },
];

const MovieScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imgView}>
          <Image
            style={styles.img}
            source={require('../../assets/img/img1.jpg')}
          />
        </View>
        <View style={styles.imgTitleView}>
          <Text style={styles.imgTitleOne}>
            {titles.MOVIE_SCREEN_IMG_TITLE}
          </Text>
          <Text style={styles.imgTitleTwo}>{titles.INFO_TITLE_ONE}</Text>
        </View>
        <View style={styles.freeBtnView}>
          <TouchableOpacity style={styles.touchableBtn}>
            <View style={styles.freeBtnBg}>
              <Text style={styles.freeBtnText}>{titles.INFO_HEADER_FREE}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.devider}></View>
        </View>
        <View
          style={{
            width: '100%',
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.curiculum}>{titles.CURRICULUM}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <ViewMoreText
            numberOfLines={2}
            textStyle={{
              paddingLeft: 20,
              paddingRight: 20,
              textAlign: 'center',
            }}>
            <Text style={styles.bigText}>{titles.SHOW_MORE_TEXT}</Text>
          </ViewMoreText>
        </View>
        {list.map(({ arrays, title }) => {
          return (
            <>
              <ItemsHeader header={title} />
              <TouchableOpacity>
                {arrays.map(({ title, duration, num, youtubeId }) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() =>
                        navigation.navigate('YoutubeScreen', youtubeId)
                      }>
                      <CurriculumItems
                        title={title}
                        time={duration}
                        num={num}
                      />
                    </TouchableOpacity>
                  );
                })}
              </TouchableOpacity>
            </>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MovieScreen;








// import React, { useEffect, useRef } from 'react';
// import { View, Animated, Text } from 'react-native';

// const Box = ({ backgroundColor = '#3cae6f', scale = 1 }) => (
//   <Animated.View
//     style={[
//       {
//         width: 100,
//         height: 100,
//         backgroundColor,
//         transform: [{ scale }],
//       },
//     ]}
//   />
// );

// const usePulse = (startDelay = 500) => {
//   const scale = useRef(new Animated.Value(1)).current;

//   const pulse = () => {
//     Animated.sequence([
//       Animated.timing(scale, { toValue: 1.2 }),
//       Animated.timing(scale, { toValue: 0.8 }),
//     ]).start(() => pulse());
//   };

//   useEffect(() => {
//     const timeout = setTimeout(() => pulse(), startDelay);
//     return () => clearTimeout(timeout);
//   }, []);

//   return scale;
// };

// const App = ({ count }) => {
//   const scale = usePulse();
//   const scale2 = usePulse(750);

//   return (
//     <View
//       style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}
//     >
//       <Box scale={scale2} backgroundColor="#1f9cb8" />
//       <Text>{count}</Text>
//       <Box scale={scale} />
//     </View>
//   );
// };

// export default class Wrapper extends React.Component {
//   state = { count: 1 };

//   componentDidMount() {
//     setInterval(() => {
//       this.setState(state => ({
//         count: state.count + 1,
//       }));
//     }, 500);
//   }

//   render() {
//     return <App count={this.state.count} />;
//   }
// }
