import React, { Component } from 'react'; 
import BreadcrumbCustom from '../BreadcrumbCustom';
import { Card, Avatar, Row, Col, Progress, Timeline, Collapse, Table, Switch } from 'antd';
import zysoft from '../../style/img/avatar.jpg';
import '../../style/index/mindex.less';
import CryptoJS from 'crypto-js';
import $ from 'jquery';
import CountUp from 'react-countup';
import ReactEcharts from 'echarts-for-react';

// const UID = "UC595CDA71"; // 测试用 用户ID，请更换成您自己的用户ID
// const KEY = "do2sk3zswrkm4mac"; // 测试用key，请更换成您自己的 Key
// const API = "http://api.seniverse.com/v3/weather/now.json"; // 获取天气实况
// const LOCATION = "南京"; // 除拼音外，还可以使用 v3 id、汉语等形式
//
// // 获取当前时间戳
// let ts = Math.floor((new Date()).getTime() / 1000);
//
// // 构造验证参数字符串
// let str = "ts=" + ts + "&uid=" + UID;
//
// // 使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串（raw）进行加密
// // 并将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig
// let sig = CryptoJS.HmacSHA1(str, KEY).toString(CryptoJS.enc.Base64);
// sig = encodeURIComponent(sig);
// str = str + "&sig=" + sig;
//
// // 构造最终请求的 url
// let url = API + "?location=" + LOCATION + "&" + str + "&callback=foo";

const Panel = Collapse.Panel;
const classify = [
    "社会",
    "爱情",
    "友情"
];
const text = [
    "只有人们的社会实践，才是人们对于外界认识的真理性的标准。真理的标准只能是社会的实践。",
    "这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯。",
    "友谊是灵魂的结合，这个结合是可以离异的，这是两个敏感，正直的人之间心照不宣的契约。"
];
const author = [
    " —— 毛泽东",
    " —— 歌德",
    " —— 伏尔泰"
];

const columns = [
    { title: '头像', width: 100, dataIndex: 'img', key: 'img', fixed: 'left' },
    { title: '姓名', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
    { title: '状态', width: 100, dataIndex: 'state', key: 'state', fixed: 'left' },
    { title: '留言', width: '52%', dataIndex: 'written', key: 'written', className:'column-written' },
    { title: '邮箱', width: 200,dataIndex: 'mail', key: 'mail', fixed: 'right' },
    { title: '时间', width: 200,dataIndex: 'time', key: 'time', fixed: 'right' }
];
const data = [{
    key: '1',
    img: <Avatar style={{ backgroundColor: '#f56a00' }}>Z</Avatar>,
    name: 'John Brown',
    state: <Switch checkedChildren="good" unCheckedChildren="bad" defaultChecked={true}/>,
    written: '撸起袖子加油干，中国梦定能实现！',
    mail: 'marinus.jagesar@example.com',
    time: '2015-03-01 17:55:21',
}, {
    key: '2',
    img: <Avatar style={{ backgroundColor: '#7265e6' }}>H</Avatar>,
    name: 'Jim Green',
    state: <Switch checkedChildren="good" unCheckedChildren="bad" />,
    written: '只要坚持一切为了人民，共产党就始终有其活力。',
    mail: 'zachary.lavigne@example.com',
    time: '2015-06-03 18:22:13',
},{
    key: '3',
    img: <Avatar style={{ backgroundColor: '#ffbf00' }}>A</Avatar>,
    name: 'Joe Black',
    state: <Switch checkedChildren="good" unCheckedChildren="bad" defaultChecked={true}/>,
    written: '跟着党中央，百姓不心慌。跟着习核心，党民一家亲。',
    mail:'levi.willis@example.com',
    time: '2016-01-02 23:11:01',
},{
    key: '4',
    img: <Avatar style={{ backgroundColor: '#00a2ae' }}>O</Avatar>,
    name: 'Jim Red',
    state: <Switch checkedChildren="good" unCheckedChildren="bad" />,
    written: '必须坚持改革创新、将改革进行到底！只有在改革中推动社会发展、在创新中找到科学发展之路！',
    mail: 'tobias.pedersen@example.com',
    time: '2016-12-21 13:03:59',
},{
    key: '5',
    img: <Avatar style={{ backgroundColor: '#48ae6a' }}>Y</Avatar>,
    name: 'Jake White',
    state: <Switch checkedChildren="good" unCheckedChildren="bad" defaultChecked={true}/>,
    written: '在各领域凝心聚力齐心协力集聚改革发展的正能量。',
    mail: 'lígio.carvalho@example.com',
    time: '2017-03-06 10:19:07',
},{
    key: '6',
    img: <Avatar style={{ backgroundColor: '#ae007c' }}>U</Avatar>,
    name: 'Smith White',
    state: <Switch checkedChildren="good" unCheckedChildren="bad" defaultChecked={true}/>,
    written: '对“为官不为”及时亮剑，集中曝光、整治“为官不为”“为官乱为”，使无为者让位、干事者有位。',
    mail: 'samuel.leon@example.com',
    time: '2017-11-03 13:43:33',
}];

export default class MIndex extends Component {
    componentDidMount() {
        // $.ajax(url, {
        //     dataType: 'jsonp',
        //     success: function (data) {
        //         let weather = data.results[0];
        //         let text = [];
        //         text.push("Location: " + weather.location.path);
        //         text.push("Weather: " + weather.now.text);
        //         text.push("Temperature: " + weather.now.temperature);
        //         console.log(text);
        //     }
        // })
    }
    CountUp(){
        let imgSrc = ["mail","chat","cart","heart"];
        let imgName = ["Mails","Dialogue","Carts","Collection"];
        let count = ["1379","768","192","413"];
        let cu = imgSrc.map(function(item,index){
            return(
                <Col span={6} key={item}>
                    <Card bordered={false} style={{cursor:'pointer'}}>
                        <div className='countBox'>
                            <img src={require('../../style/img/'+item+'.png')}/>
                            <dl>
                                <dt>{imgName[index]}</dt>
                                <dd><CountUp start={0} end={count[index]} duration={2.75}/></dd>
                            </dl>
                        </div>
                    </Card>
                </Col>
            )
        });
        return cu;
    }
    getOption(){
        let option = {
            backgroundColor: "#fff",
            color: ['rgb(216, 151, 235)', 'rgb(246, 152, 153)', 'rgb(100, 234, 145)'],
            title: [{
                text: '账单/亿',
                left: '2%',
                top: '6%',
                textStyle: {
                    fontWeight:'normal',
                },
            }],
            tooltip: {
                trigger: 'axis'
            },
            grid:{
                left:'6%',
                width:'90%',
            },
            legend: {
                //x: 300,
                top: '7%',
                right: '3%',
                textStyle: {
                    color: 'gray',
                },
                data: ['网购', '线下', '其他']
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLine:{
                    lineStyle:{
                        color:'lightgray',
                    },
                },
                axisLabel:{
                    color:'gray'
                },
                data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017']
            },
            yAxis: {
                min: 0,
                max: 100,
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'lightgray',
                    },
                },
                axisLabel:{
                    color:'gray'
                },
            },
            series: [{
                name: '网购',
                smooth: true,
                type: 'line',
                symbolSize: 8,
                symbol: 'circle',
                data: [10, 40, 32, 20, 80, 90, 97]
            }, {
                name: '线下',
                smooth: true,
                type: 'line',
                symbolSize: 8,
                symbol: 'circle',
                data: [70, 50, 50, 87, 90, 80, 70]
            },{
                name: '其他',
                smooth: true,
                type: 'line',
                symbolSize: 8,
                symbol: 'circle',
                data: [30, 40, 10, 20, 33, 66, 54]
            }]
        };
        return option;
    }
    Panel(){
        let panel = text.map(function(item,index){
            return(
                <Panel header={classify[index]} key={index}>
                    <p>{item}</p>
                    <p className="author">{author[index]}</p>
                </Panel>
            )
        });
        return panel;
    }
    render() {
        return (
            <div>
                <BreadcrumbCustom paths={['首页']}/>
                <div className='mindex'>
                    <Row gutter={16} style={{marginBottom:'20px'}}>
                        {this.CountUp()}
                    </Row>
                    <Row gutter={16} style={{marginBottom:'20px'}}>
                        <Col span={16}>
                            <Card bodyStyle={{padding: 0,height:'277px',overflow:'hidden'}}>
                                <ReactEcharts
                                    option={this.getOption()}
                                />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card bodyStyle={{padding: 0}}>
                                <div className='avatar'>
                                    <Avatar
                                        shape='circle'
                                        src={zysoft}
                                        style={{width: '60px', height: '60px', borderRadius: '50%'}}
                                    />
                                    <p>zysoft</p>
                                    <p>zhaoyu_m69@163.com</p>
                                </div>
                                <div className='weather'>
                                    {/*心知天气API*/}
                                    <div className='weather-img'>
                                        <img src={require('../../style/img/0.png')}/>
                                    </div>
                                    <div className='weather-info'>
                                        <span>南京</span>&nbsp;<span>16℃</span>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={16} style={{marginBottom:'20px'}}>
                        <Col span={8}>
                            <Card>
                                <div>
                                    <h3>项目进度</h3>
                                    <p>C#Winform/Smart React</p>
                                </div>
                                <div className='pro'>
                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <p>ACQ1</p>
                                            <Progress type="dashboard" percent={25} width={125} id='pro1'/>
                                        </Col>
                                        <Col span={12}>
                                            <p>SmartPress</p>
                                            <Progress type="dashboard" percent={50} width={125} id='pro2'/>
                                        </Col>
                                    </Row>
                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <p>BUILD6</p>
                                            <Progress type="dashboard" percent={75} width={125} id='pro3'/>
                                        </Col>
                                        <Col span={12}>
                                            <p>MSPA</p>
                                            <Progress type="dashboard" percent={100} width={125} format={() => 'Done'} id='pro4'/>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card>
                                <div>
                                    <h3>项目流程</h3>
                                </div>
                                <div className="timeline">
                                    <Timeline>
                                        <Timeline.Item color="green">
                                            <p>创建项目 - 2017-10-01</p>
                                            <p>搭建UI框架 - 2017-10-02</p>
                                            <p>对接协议 - 2017-10-04</p>
                                            <p>实现功能 - 2017-10-05</p>
                                        </Timeline.Item>
                                        <Timeline.Item color="red">
                                            <p>通信调试 - 2017-10-10</p>
                                            <p>功能测试 - 2017-10-11</p>
                                            <p>错误调试 - 2017-10-13</p>
                                        </Timeline.Item>
                                        <Timeline.Item color="blue">
                                            <p>界面优化 - 2017-10-15</p>
                                            <p>性能优化 - 2017-10-17</p>
                                            <p>发布版本 - 2017-10-20</p>
                                        </Timeline.Item>
                                    </Timeline>
                                </div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card bodyStyle={{height:'407px', overflow:'hidden'}}>
                                <div>
                                    <h3>人生感悟</h3>
                                </div>
                                <div className="collapse">
                                    <Collapse accordion defaultActiveKey={"0"}>
                                        {this.Panel()}
                                    </Collapse>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Card>
                                <div style={{marginBottom:'20px'}}>
                                    <h3>留言板</h3>
                                </div>
                                <Table
                                    columns={columns}
                                    dataSource={data}
                                    scroll={{ x: '110%' }}
                                    pagination = {false}
                                />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
   