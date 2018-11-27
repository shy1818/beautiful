import React, { Component } from "react";
import styled from "styled-components";
import Loading from "@As/img/loading.png";
import uuid from "uuid";
const Activitystyle = styled.div`
  .box-wrap {
    overflow: auto;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    background-color: #fff;
    padding: 0.2rem;
  }
  .list {
    overflow: hidden;

    white-space: nowrap;
  }
  .list li {
    float: left;
  }
  .l-item {
    display: inline-block;
    width:2.16rem;
    min-height:1.6rem;
    margin-right: .2rem;
    background: url(${Loading}) no-repeat 50% 20%;
    background-size: 80%;
  }
  .bg_imgbox img {
    display: block;
    width:100%;
    
  }
  .link a {
    color: #666;
    text-decoration: none;
  }
  .img-title {
    text-align: center;
    font-size: 0.28rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 0.12rem;
    line-height: 0.45rem;
    color: #666;
  }
`;
class Activity extends Component {
  render() {
    return (
      <Activitystyle>
        <div className="box-wrap ">
          <ul className="list silde_box">
            <List/> 
          </ul>
        </div>
      </Activitystyle>
    );
  }
}
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: uuid(),
          link:
            "http://act.meilishuo.com/shidian00001?acm=3.mce.2_10_1dggc.13730.0.gwoRHrah1ZogF.pos_0-m_313898-sd_119",
          img:
            "https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png",
          title: "十点抢卷"
        },
        {
          id: uuid(),
          link:
            "https://act.mogujie.com/tejiazhuanmai09?acm=3.mce.2_10_1dgge.13730.0.gwoRHrah1ZogG.pos_1-m_313899-sd_119",
          img:
            "https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",
          title: "好物特卖"
        },
        {
          id: uuid(),
          link:
            "https://act.mogujie.com/meirijinguan001?acm=3.mce.2_10_1b610.13730.0.gwoRHrah1ZogH.pos_2-m_260486-sd_119",
          img:
            "https://s10.mogucdn.com/mlcdn/c45406/180913_387kgl3j21ff29lh04181iek48a6h_225x225.png",
          title: "每日精选"
        },
        {
          id: uuid(),
          link:
            "http://act.meilishuo.com/wap/yxzc1?acm=3.mce.2_10_1dggg.13730.0.gwoRHrah1ZogI.pos_3-m_313900-sd_119",
          img:
            "https://s10.mogucdn.com/mlcdn/c45406/180913_8d4e5adi8llg7c47lgh2291akiec7_225x225.png",
          title: "冬日爆款"
        }
      ]
    };
  }
  /* componentDidMount() {
    // simulate img loading
  this.setState({
      data:['','181120_7a95jgad7ghbb2gg31i59ge99k3f8_750x390.jpg_800x9999','181114_879e8l0bhd0i1lfj96e6c57eh0928_750x390.jpg_800x9999','181101_30leelj6325c8626kfei931h2hc3b_750x390.jpg_800x9999']
      })
  } */
  render() {
    let { data } = this.state;
    return data.map(item => (
      <li className="show-log-item l-item" key={Math.random()}>
        <a
          href={item.link}
          className="link"
        >
          <div className="bg_imgbox J_dynamic_imagebox lazy_pic_bg">
            <img className="J_dynamic_img fill_img" src={item.img} alt="" />
          </div>
          <p className="img-title">{item.title}</p>
        </a>
      </li>
    ));
  }
}

export default Activity;
