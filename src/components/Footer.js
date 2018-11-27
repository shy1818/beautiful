import { TabBar } from 'antd-mobile';
import React, { Component } from 'react';
import styled from 'styled-components'
 
import HomeContainer from './Home/Homecontainer';
import ClassifyContainer from './classify/Classifycontainer';
import CarContainer from './car/carcontainer';
const Mainstyle=styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top:0;                  
`

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: false,
      top:0
    };
  }
 

  render() {
    return (
     /*  <div style={{position:'fixed',height: '100%',width:'100%',top:'0'}}> */
      
     <Mainstyle>
         
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#ff3366"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://s10.mogucdn.com/p2/160802/upload_439ak5453ih43h5d2a109dhe71agg_36x39.png) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://s10.mogucdn.com/p2/160802/upload_29e515a6k59k937a3ej3l5e6bfji2_36x39.png) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
          { <HomeContainer/>}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://s10.mogucdn.com/p2/160802/upload_3egkhdd8460el241d98kcl706ke65_34x34.png) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://s10.mogucdn.com/p2/160802/upload_488lbkj7ll3e92bg3ld1kh5k73l87_34x34.png) center center /  21px 21px no-repeat' }}
              />
            }
            title="分类"
            key="classify"
            
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {<ClassifyContainer/>}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://s10.mogucdn.com/p2/160802/upload_0eabagglh39aggl8jihfakfbf70a9_40x38.png) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://s17.mogucdn.com/p2/160802/upload_565i382k0hi45ek6chhj5603d41a8_40x38.png) center center /  21px 21px no-repeat' }}
              />
            }
            title="购物车"
            key="car"
            
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
           {<CarContainer/>}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://s10.mogucdn.com/p2/160802/upload_5g85l55d280l94lfg678lcleegf5e_38x38.png' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
           hahaah
          </TabBar.Item>
        </TabBar>
         
    </Mainstyle>
    );
  }
}

export default Footer