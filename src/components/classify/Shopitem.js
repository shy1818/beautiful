import { Grid } from "antd-mobile";
import React, { Component } from "react";
 
import Jsonp from 'jsonp'
 
 
class Shopitem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }
  componentDidMount() {
   
      //获取数据
      Jsonp("/shop/venus/mce/v1/urlChange/pc?pid=20783&channel=wap&page=1&pageSize=30&_=1543192436575",(err,data)=>{
/* console.log(data.value) */
          this.setState({
            items:data.value
          })
      })
        
    
   
  
  }
   
  render() {
   /*  console.log(this); */
    return (
      
      <Grid
        data={this.state.items}
        key={this.state.items.goods_id}
        columnNum={4}
        hasLine={true}
        square={false}
        activeStyle={false}
        renderItem={dataItem => (
          <div className="pic">
            <a href={dataItem.link}>
              <img
                src={dataItem.image}
                style={{ width: "1.32rem", height: "1.64rem" }}
                alt=""
              />
              <div
                style={{ color: "#888", fontSize: ".28rem", marginTop: ".24rem" }}
              >
                <span>{dataItem.title}</span>
                 
               
              </div>
            </a>
          </div>
        )}
      /> 
    );
  }
}
export default Shopitem;
