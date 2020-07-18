// import React from 'react';
// import {View, Text, Alert, TouchableOpacity} from 'react-native';
// import {FlatList, StyleSheet} from 'react-native';
// import flatListData from './flatlistData';
//
// export function SecondPage() {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={flatListData}
//         renderItem={({item}) => (
//           <Text style={styles.item}>
//             {item.name} {item.price}
//           </Text>
//         )}
//       />
//       <TouchableOpacity style={styles.button} onPress={onPressButton}>
//         <View>
//           <Text style={{fontSize: 25}}>Add Travel</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// }
// function onPressButton() {
//   Alert.alert('okokok');
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   item: {
//     flexDirection: 'row',
//     marginTop: 10,
//     padding: 30,
//     backgroundColor: '#f9c2ff',
//     fontSize: 24,
//     marginHorizontal: 10,
//     marginBottom: 10,
//   },
//   button: {
//     fontSize: 50,
//     backgroundColor: '#1ca5d8',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 30,
//     height: 50,
//     width: 200,
//     shadowColor: '#56a9c8',
//   },
// });
// // import React, {Component} from 'react';
// // import {View, Text, FlatList, ActivityIndicator} from 'react-native';
// // import {ListItem, SearchBar} from 'react-native-elements';
// //
// // class SecondPage extends Component {
// //   constructor(props) {
// //     super(props);
// //
// //     this.state = {
// //       loading: false,
// //       data: [],
// //       error: null,
// //     };
// //     this.arrayholder = [];
// //   }
// //   componentDidMount() {
// //     this.makeRemoteRequest();
// //   }
// //
// //   makeRemoteRequest = () => {
// //     const url = 'https://randomuser.me/api/?&results=20';
// //     this.setState({loading: true});
// //
// //     fetch(url)
// //       .then((res) => res.json())
// //       .then((res) => {
// //         this.setState({
// //           data: res.results,
// //           error: res.error || null,
// //           loading: false,
// //         });
// //         this.arrayholder = res.results;
// //       })
// //       .catch((error) => {
// //         this.setState({error, loading: false});
// //       });
// //   };
// //   renderSeparator = () => {
// //     return (
// //       <View
// //         style={{
// //           height: 1,
// //           width: '86%',
// //           backgroundColor: '#CED0CE',
// //           marginLeft: '14%',
// //         }}
// //       />
// //     );
// //   };
// //   searchFilterFunc = (text) => {
// //     this.setState({
// //       value: text,
// //     });
// //
// //     const newData = this.arrayholder.filter((item) => {
// //       const itemData = `${item.name.title.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
// //       const textData = text.toUpperCase();
// //
// //       return itemData.indexOf(textData) > -1;
// //     });
// //     this.setState({
// //       data: newData,
// //     });
// //   };
// //   renderHeader = () => {
// //     return (
// //       <SearchBar
// //         placeholder="Type Here..."
// //         lightTheme
// //         round
// //         onChangeText={(text) => this.searchFilterFunc(text)}
// //         autoCorrect={false}
// //         value={this.state.value}
// //       />
// //     );
// //   };
// //   render() {
// //     if (this.state.loading) {
// //       return (
// //         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
// //           <ActivityIndicator />
// //         </View>
// //       );
// //     }
// //     return (
// //       <View style={{flex: 1}}>
// //         <FlatList
// //           data={this.state.data}
// //           renderItem={({item}) => (
// //             <ListItem
// //               leftAvatar={{source: {uri: item.picture.thumbnail}}}
// //               title={`${item.name.first} ${item.name.last}`}
// //               subtitle={item.email}
// //             />
// //           )}
// //           keyExtractor={(item) => item.email}
// //           ItemSeparatorComponent={this.renderSeparator}
// //           ListHeaderComponent={this.renderHeader}
// //         />
// //       </View>
// //     );
// //   }
// // }
// // export {SecondPage};

