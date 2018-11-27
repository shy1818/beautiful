 
import React, { Component } from "react";

import { Carousel, WingBlank } from 'antd-mobile';

        class Swiper extends Component {
          state = {
            data: ['1', '2', '3','4'],
            imgHeight: 195,
          }
          componentDidMount() {
            // simulate img loading
          this.setState({
              data:['181121_4905d45k8a5c7676bii11891d3jag_750x390.jpg_800x9999','181120_7a95jgad7ghbb2gg31i59ge99k3f8_750x390.jpg_800x9999','181114_879e8l0bhd0i1lfj96e6c57eh0928_750x390.jpg_800x9999','181101_30leelj6325c8626kfei931h2hc3b_750x390.jpg_800x9999']
              })
          }
          render() {
            return (
              
                <Carousel
                  autoplay={true}
                  infinite
                 /*  beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                  afterChange={index => console.log('slide to', index)} */
                >
                  {this.state.data.map(val => (
                    <a
                      key={val}
                      href="http://www.alipay.com"
                      style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                      <img
                        src={`https://s10.mogucdn.com/mlcdn/c45406/${val}.v1c7E.70.jpg`}
                        
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                          // fire window resize event to change height
                          window.dispatchEvent(new Event('resize'));
                          this.setState({ imgHeight: 'auto' });
                        }}
                      />
                    </a>
                  ))}
                </Carousel>
             
            );
          }
        }
        
    

export default Swiper;
