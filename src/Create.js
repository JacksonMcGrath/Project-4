import React, {Component} from 'react';
import VirtualBar from './VirtualBar';
import IngredientList from './IngredientList';
import Nutrition from './Nutrition';

class Create extends Component {

	constructor(props) {

		super(props)
	
		this.state = {
			almonds: true,
			peanuts: false,
			cashews: false,
			sunflower_seeds: false,
			chia_seeds: false,
			raisins: false,
			dried_cranberries: false,
			dried_goji_berries: false,
			chocolate_chips: false,
			penut_butter_chips: false,
		}

		// this.toggleStateOf = this.toggleStateOf.bind(this)
		this.toggleAlmonds = this.toggleAlmonds.bind(this)
	}

	// toggleStateOf = (e) => {
	// 	console.log(e.currentTarget.id);
	// 	console.log("toggleStateOf was triggered");
	// 	const target = this.+ e.currentTarget.id;
	// 	console.log(target);
 //        // this.setState({
 //        //     e.currentTarget.id: !e.currentTarget.id
 //        // })
 //    }

 	toggleAlmonds = () => {
 		console.log("toggleAlmonds was triggered");
        const almonds = this.almonds;
        this.setState({
            almonds: !almonds
        })
    }

	render(){

		return (
			
			<div id="create">
				<div className="virtual-bar">
					<img src="https://i.imgur.com/EhTTk3k.png" className="ingredient-overlay"/>
				</div>

				<div className="ingredient-list">
					<h3 onClick={this.toggleAlmonds} className="ingredient" id="almonds">Almonds</h3>
					<h3 onClick={this.toggleStateOf} className="ingredient" id="peanuts">Peanuts</h3>
					<h3 onClick={this.toggleStateOf} className="ingredient" id="cashews">Cashews</h3>
					<h3 onClick={this.toggleStateOf} className="ingredient" id="sunflower_seeds">Sunflower Seeds</h3>
					<h3 onClick={this.toggleStateOf} className="ingredient" id="chia_seeds">Chia Seeds</h3>
					<h3 onClick={this.toggleStateOf} className="ingredient" id="raisins">Raisins</h3>
					<h3 onClick={this.toggleStateOf} className="ingredient" id="dried_cranberries">Dried Cranberries</h3>
					<h3 onClick={this.toggleStateOf} className="ingredient" id="dried_goji_berries">Dried Goji Berries</h3>
					<h3 onClick={this.toggleStateOf} className="ingredient" id="chocolate_chips">Chocolate Chips</h3>
					<h3 onClick={this.toggleStateOf} className="ingredient" id="peanuts_butter_chips">Penut Butter Chips</h3>
				</div>

			</div>

		)
	}
}



export default Create;