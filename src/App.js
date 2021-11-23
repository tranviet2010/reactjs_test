import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[
        {id:1,kw:'TĐ. Mỹ lý - 38MW',time_run:'Dự kiến phát điện 2021'},
        {id:2,kw:'TĐ. Nậm mô - 38MW',time_run:'Hoạt động từ 2013'},
        {id:3,kw:'TĐ. Nậm nơn - 20MW',time_run:'Dự kiến phát điện 2014'},
        {id:4,kw:'Thạch giám',time_run:'(H:1987 -nay)'},
        {id:5,kw:'TĐ. Bản vẽ',time_run:'Hoạt động 2010'},
      ],
      text:'',
    }
  }
  handgle=(a)=>{
    this.setState({
      text:a
    })
  }
  someOtherHandler=()=>{
    this.setState({
      text:''
    })
  }
  render() {
    const {data,text}=this.state;
    return (
      <div className="all_main">
          {data.map((val,key)=>(
            <div key={key} className={`cusoor noname${val.id}`} onMouseOver={()=>this.handgle(val.id)} onMouseOut={()=>this.someOtherHandler()}>
                  {text===val.id?<div className={`dis_block${val.id}`}>
                        <span>{val.kw}</span><br />
                        <span>{val.time_run}</span>
                  </div>:''}
            </div>
          ))}
      </div>
    );
  }
}

export default App;
