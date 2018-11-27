import React, { Component } from "react";
import Header from "../Header";
//import { HomeWrapper } from './styledComponent'
import HomeSwiper from "./HomeSwiper";
import Activity from "./activity";
import styled from "styled-components";
import Cloth from "./Clothes"

 

const Homestyle = styled.div`
  .imgbox {
    width: 100%;
    height: 4.2rem;
    display: block;
    padding-bottom: 56%;
    cursor: pointer;
    position: relative;
  }
  .anchor {
    left: 3.07%;
    top: 0;
    margin-top: 9.332201666666666%;
    width: 95.33%;
    height: 0;
    padding-bottom: 42.80018166666667%;
    position: absolute;
  }
  .hot {
    position: relative;
  }
  .hot a {
    position: absolute;
    cursor: pointer;
  }
  .link {
    left: 2.94%;
    top: 0;
    margin-top: 13.172380102040815%;
    width: 22.79%;
    height: 0;
    padding-bottom: 28.13303826530612%;
  }
  .linktwo {
    left: 27.36%;
    top: 0;
    margin-top: 12.917194707588125%;
    width: 22.39%;
    height: 0;
    padding-bottom: 28.71164315676041%;
  }
  .more {
    width: 100%;
    background-color: #eee;
    overflow: hidden;
    margin-bottom: 0.2rem;
  }
  .more .title {
    border-top: 0.02rem solid #eee;
    color: #f36;
    padding: 0.3rem;
    text-align: center;
    background-color: #fff;
    margin-top: -0.2rem;
    margin-bottom: 0.2rem;
  }
  .arrow {
    border-top: 0.02rem solid #f36;
    border-left: 0.02rem solid #f36;
    width: 0.2rem;
    height: 0.2rem;
    background-color: transparent;
    -webkit-transform: rotate(135deg);
    display: inline-block;
    margin-left: 0.1rem;
    margin-bottom: 0.06rem;
  }
  .nav-wrap{
    background-color: #fff;
    height:1.1rem;
    line-height: 1.1rem;
    overflow: hidden;
    font-size: 0.3rem;
    width: 100%;
    border-bottom: .02rem solid #eee;
  }
  .nav-wrap a{
    width: 33.333333333333%;
    display: inline-block;
    text-align: center;
    color: #666;
    text-decoration: none;
  }
`;
class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Header> </Header>
        <HomeSwiper />
        <Activity />
        <Homestyle>
          <div className="imgbox">
            <img
              src="https://s10.mogucdn.com/mlcdn/c45406/181112_4hgkh8ad1j6hj4095bcbgl9aaa1f5_750x420.jpg_800x9999.v1c7E.70.jpg"
              alt="霸街长袖裙"
            />
            <a className="anchor" href="//act.mogujie.com/dajia01" />
          </div>

          <div className="hot">
            <img
              className="fill_img"
              src="https://s10.mogucdn.com/mlcdn/c45406/171030_6ja2gfl82cl093768ilk7g0fb2fj1_740x543.jpg_800x9999.v1c7E.70.jpg"
              alt=""
            />
            <a className="link" href="//act.mogujie.com/zzlx44" />
            <a className="linktwo" href="//act.mogujie.com/zzlx65" />
            <a
              style={{
                left: 52 + "%",
                top: 0,
                marginTop: 11.985267857142858 + "%",
                width: 24.4 + "%",
                height: 0,
                paddingBottom: 29.24405357142857 + "%"
              }}
              href="//act.mogujie.com/zzlx54"
            />
            <a
              style={{
                left: 77.9 + "%",
                top: 0,
                marginTop: 11.04158375 + "%",
                width: 21.2 + "%",
                height: 0,
                paddingBottom: 28.664788125 + "%"
              }}
              href="//act.mogujie.com/zzlx57"
            />
            <a
              style={{
                left: 3.07 + "%",
                top: 0,
                marginTop: 41.08454425306958 + "%",
                width: 21.06 + "%",
                height: 0,
                paddingBottom: 29.746495566166438 + "%"
              }}
              href="//act.mogujie.com/zzlx78"
            />
            <a
              style={{
                left: 27.48 + "%",
                top: 0,
                marginTop: 40.80455375 + "%",
                width: 22.27 + "%",
                height: 0,
                paddingBottom: 30.405443750000003 + "%"
              }}
              href="//act.mogujie.com/zzlx63"
            />
            <a
              style={{
                left: 52.18 + "%",
                top: 0,
                marginTop: 41.09590812500001 + "%",
                width: 23.73 + "%",
                height: 0,
                paddingBottom: 30.002029999999998 + "%"
              }}
              href="//act.mogujie.com/zzlx67"
            />
            <a
              style={{
                left: 78.09 + "%",
                top: 0,
                marginTop: 40.93902499999999 + "%",
                width: 21.2 + "%",
                height: 0,
                paddingBottom: 29.598616250000003 + "%"
              }}
              href="//act.mogujie.com/zzlx62"
            />
          </div>
          <div className="more">
            <p className="title">
              查看更多 <i className="arrow" />
            </p>
          </div>
          <div className="nav-wrap" >
            <a className="nav-item fl" href="javascript:void(0);">
                <span>流行</span>
             </a>
              <a className="nav-item fl" href="javascript:void(0);" >
              <span>新款</span>
             </a>
            <a className="nav-item fl" href="javascript:void(0);">
              <span>精选</span>
            </a>    
          </div>
        </Homestyle>
         
     <Cloth></Cloth>
   
      </div>
    );
  }
}

export default HomeContainer;
