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

    const distances = []
    const labels = []

    if (this.state.performanceData != null) {
      this.state.performanceData.forEach(entry => {
        distances.push(entry.data.distance)
        labels.push(entry.data.message)
      })
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

    let dataForPie = {
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