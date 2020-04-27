import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class EgyptianFraction extends Component {

    constructor(props) {
        super(props)

        this.onFractionChanged = this.onFractionChanged.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            fraction : "", 
            unitFractions : []
        }
    }

    onFractionChanged = (e) => { 
        this.setState({ 
            fraction: e.target.value + " = "
        })
        this.setState({
            unitFractions: []
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const that = this

        const fraction = { 
           fraction: this.state.fraction 
        }
        console.log(fraction)
        axios.post('http://localhost:3300/egyptit', fraction)
        .then((res) => { 
            that.setState({unitFractions: res.data})
        })
    }

    render() {
        return( 

            <div class="card" style={{width: window.innerWidth / 2, left: window.innerWidth / 4 }}>
                <div class="card-body">
                    <h5 class="card-title">Find fraction units by Egyptian Unit Fraction</h5>
                    
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group">
                        <label for="fraction">Insert your fraction</label>
                        <input type="text" class="form-control" id="fraction" placeholder="numerator / denominator" onChange={this.onFractionChanged}/>
                        </div>
                        
                        <button type="submit" class="btn btn-primary"> Egypt it ! </button>
                    </form>
                    
                    <div class="highlight highlight-source-js-jsx">
                    </div>
                    <br/>
                    <div class="p-3 mb-2 bg-light text-dark">
                        <h5>
                            {this.state.fraction}
                            { (this.state.unitFractions.length > 0) ? 
                                this.state.unitFractions.map((item, index) => { 
                                    if(index + 1 === this.state.unitFractions.length)
                                        return `${item.result.numerator} / ${item.result.denominator}`
                                    else
                                        return `${item.result.numerator} / ${item.result.denominator} + `
                                }) : this.state.unitFractions.message}
                        </h5>
                    </div>
                </div>
            </div>
            
        )
    }
}