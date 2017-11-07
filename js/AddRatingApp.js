'use strict';
// 1
import React from 'react';
import ReactNative, {
    Navigator,
    TouchableOpacity, 
    StyleSheet,
    Text,
    View,

} from 'react-native';

let styles;
// 3
class AddRatingApp extends React.Component {
    _renderNavTitle(route, navigator, index, navState) {
        return <Text style={styles.navBarTitleText}>{route.title}</Text>;
      }
      _renderNavLeftItem(route, navigator, index, navState) {
        return (
          <TouchableOpacity
            onPress={() => console.log('Cancel button pressed')}
            style={styles.navBarLeftButton}>
            <Text style={[styles.navBarText, styles.navBarButtonText]}>
              Cancel
            </Text>
          </TouchableOpacity>
        );
      }
      _renderNavRightItem(route, navigator, index, navState) {
        return (
          <TouchableOpacity
            onPress={() => console.log('Save button pressed')}
            style={styles.navBarRightButton}>
            <Text style={[styles.navBarText, styles.navBarButtonText]}>
              Save
            </Text>
          </TouchableOpacity>
        );
      }

    _renderScene(route, navigator) {
        return (
          <View style={styles.content}>
            <Text style={styles.welcome}>We're live from React Native!!!</Text>
          </View>
        );
      }

      render() {
        return (
          <Navigator
            debugOverlay={false}
            style={styles.container}
            initialRoute={{title: 'Add Rating'}}
            renderScene={this._renderScene.bind(this)}
            navigationBar={
              <Navigator.NavigationBar
                routeMapper={{
                  LeftButton: this._renderNavLeftItem.bind(this),
                  RightButton: this._renderNavRightItem.bind(this),
                  Title: this._renderNavTitle.bind(this),
                }}
                style={styles.navBar}
              />
            }
          />
        );
      }
}

export default AddRatingApp;

styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
    },
    welcome: {
      fontSize: 20,
      color: 'white',
    },
    navBar: {
      backgroundColor: '#25507b',
    },
    navBarText: {
      fontSize: 16,
      marginVertical: 10,
    },
    navBarTitleText: {
      color: 'white',
      fontWeight: '500',
      marginVertical: 9,
    },
    navBarLeftButton: {
      paddingLeft: 10,
    },
    navBarRightButton: {
      paddingRight: 10,
    },
    navBarButtonText: {
      color: 'white',
    },
  });