
import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const friends = [
{ label: "John", value: 1 },
{ label: "Angela", value: 2 },
{ label: "Gaylord", value: 3 },
{ label: "Precious", value: 4 }];

class Select_friend extends React.Component{
	onTrigger = (event) => {
		this.props.parentCallback(event.target.friend.value);
		event.preventDefault();
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-6">
						<form onSubmit={this.onTrigger}>
							<Select
								options={friends}
								name="friend"
							/>
							<br />

							<input type="submit" value="Submit" />

						</form>
					</div>
					<div className="col-md-4"></div>
				</div>
			</div>
		)
	}
}
export default Select_friend;

