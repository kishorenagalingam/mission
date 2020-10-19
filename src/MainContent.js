import React, { Component } from 'react';

export default class MainContent extends Component {
    state = {
        mission: [],
        years: [],
        year: ''
    }

    fetchData() {
        fetch('https://api.spacexdata.com/v3/launches?limit=100')
        .then(res => res.json())
        .then((data) => {
          this.setState({ mission: data });
          console.log(this.state.mission);
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
            <section className="section">
                <div className="container">
                     {
                           this.state.years.map((item, index) => 
                           <div className="">
                               {item}
                               </div>
                           )
                       }
                <div className="grid-wrap">
                        {
                            this.state.mission.map((content, index)=>
                                <div key={index} className="grid">

                                    
                                    
                                    {content.mission_name} #{content.flight_number}


                                    Mission Id : {content.mission_id}

                                    Launch Year: {content.launch_year}
                                    
                                    Successful Launch:    {content.launch_success + ''}

                                        
                                   
                                </div>
                            )
                        }
                </div>
                </div>
            </section>
        )
    }
}