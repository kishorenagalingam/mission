import React, { Component } from 'react';

export default class Year extends Component {
    state = {
        mission: [],
        years: []
    }

    fetchData() {
        fetch('https://api.spacexdata.com/v3/launches?limit=100')
        .then(res => res.json())
        .then((data) => {
            const years = [];
          data.map((content, index) => {

            
            if (years.indexOf(content.launch_year) === -1){


            years.push(content.launch_year)
            }
            return null;
            
            
          })
          this.setState({'years': years});
          console.log(this.state.years)
        })
        .catch(console.log);
      }

    componentDidMount(){
        this.fetchData();
    }

    render(){
        return(
            <section className="section herobanner">
                <div className="main-text">
                       {
                           this.state.years.map((item, index) => 
                           <div className="">
                               {item}
                               </div>
                           )
                       }
                </div>
            </section>
        )
    }
}