import React, { Component } from 'react';
import { getData } from "../modules/performanceData";
import { Line, Pie } from 'react-chartjs-2';


class DisplayPerformanceData extends Component {
  state = {
    performanceData: null
  }

  componentDidMount() {
    this.getPerformanceData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.updateIndex !== prevProps.updateIndex) {
      this.getPerformanceData()
    }
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({ performanceData: result.data.entries }, () => {
      this.props.indexUpdated();
    })
  }

  
  //Gets and count every entry entered by the user. We check if entry it's empty too.

  countsCollection(collection, value) {
    let count = 0;
    collection.forEach(entry => {
      count += entry.data.message === value ? 1 : 0;
    })
    return count;
  }


  //We are counting how many labels there are, if the indexOf returns -1 JustLabels will return 0 message
  //as it's empty. using === instead of ==, since == will conver them to common type and make the value be true
  // while === will return false. 

  onlyLabels(collection) {
    let justLabels = [];
    collection.forEach(entry => {
      if (entry.data.message && justLabels.indexOf(entry.data.message) === -1 ) {
        justLabels.push(entry.data.message);
      }
    })
    return justLabels;
  }

  render() {
    let dataIndex;


    if (this.state.performanceData != null) {
      dataIndex = (
        <div>
          {this.state.performanceData.map(item => {
            return <div key={item.id}>{item.data.message} {item.data.distance}</div>
          })}
        </div>
      )
    }

    const distances = [];
    const labels = [];
    let dataForPie = {};

    
    if (this.state.performanceData != null) {
      this.state.performanceData.forEach(entry => {
        distances.push(entry.data.distance)
        labels.push(entry.data.message)
      })

      let justLabels = this.onlyLabels(this.state.performanceData);
      let dataDistance = [];

      justLabels.forEach(label => {
        dataDistance.push(this.countsCollection(this.state.performanceData, label));
      })

      dataForPie = {
        labels: justLabels,
        datasets: [{
            data: dataDistance,
            backgroundColor:[
              '#33FF79',
              '#3367FF',
              '#33BDFF',
              '#33FFEB',
              '#33FFC4',
            ],
          }],
      };      
    }

    let dataForDiagram = {
      datasets: [
        {
          data: distances,
          label: "Your history"
        }
      ],
      labels: labels
    };

    return (
      <div id="index">
        {dataIndex}

        <Line 
        data={dataForDiagram}          
        />

        <Pie 
          data= {dataForPie}
        />
      </div>
    )
  }
}

export default DisplayPerformanceData;