'use strict';

import React,{Component} from 'react';
import {View, Text, StyleSheet, Image, ListView ,TouchableHighlight, ActivityIndicator} from 'react-native';

var newsapi = 'http://v.juhe.cn/toutiao/index?type=&key=3377d14b9b9fd177c7b4cc02874ed452';

class NewsListView extends Component{

  constructor(props){
    super(props);
    // var dataSource = new ListView.DataSource({
    //   rowHasChanged:(r1, r2) => r1.title !== r2.title
    // });
    this.state = {
      isLoading: false,
      // dataSource : dataSource.cloneWithRows(this.props.defaultData)
      // dataSource: '[{},{}]'
    };
  }

  getInitialState(){
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1.title !== r2.title});
    dataBlob : {},
    sectionIDs : [],
    rowIDs : [],
    return {
      dataSource : ds.cloneWithRows(emptyArray)
    };
  }

  componentWillMount(){
    this.queryData();
  }

  queryData(){
    this.setState({isLoading: true});

    fetch(newsapi)
    .then(response => response.json())
    .then(data => this._handlerResponse(data))
    .catch(error =>
      this.setState({isLoading:false}
      ));
    }

    _handlerResponse(response){
      this.setState({
        isLoading:false
      });

      console.log(response);
    }

    renderRow(rowData, sectionID, rowID){

      var imageUrl = 'http://www.baletoo.com/Public/Img/3.7.8zhanweituxiaotu2@2x.png';
      var price = '1000';
      var content = 'haha';

      return(

        <TouchableHighlight
        underlayColor='#dddddd'>
        <View>
        <View style={styles.rowContainer}>
        <Image style={styles.thumb} source={{ uri: imageUrl }} />
        <View  style={styles.textContainer}>
        <Text style={styles.price}>￥{price}</Text>
        <Text style={styles.title}
        numberOfLines={1}>{}</Text>
        <Text style={styles.smalltext}>{content}</Text>
        </View>
        </View>
        <View style={styles.separator}/>
        </View>
        </TouchableHighlight>
      );
    }

    render(){

      var spinner = this.state.isLoading ?
      (  <ActivityIndicator hidden = 'true' size = 'large'/> ):  (<View/>);


      return(

        <ListView dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}/>
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
    thumb: {
      width: 120,
      height: 90,
      marginRight: 10
    },
    textContainer: {
      flex: 1,
      alignItems:'stretch'
    },
    separator: {
      height: 1,
      backgroundColor: '#dddddd'
    },
    price: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'red',
      flex:1
    },
    title: {
      fontSize: 18,
      color: '#656565',
      flex:1
    },
    rowContainer: {
      flexDirection: 'row',
      padding: 10
    }
  });


  module.exports=NewsListView;
