'use strict';

import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class SiteListView extends Component{
    render(){
      return(
        <View style={styles.tabContent}>
          <Text style={styles.tabText}>{this.props.contextText}</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  tabContent: {
    backgroundColor:'white',
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'red',
    margin: 50,
  },
});


module.exports=SiteListView;
