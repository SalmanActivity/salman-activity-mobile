import React, { Component } from 'react'
import { ScrollView, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import DivisionActions from '../Redux/DivisionRedux'
import {AuthSelectors} from '../Redux/AuthRedux'
import DataList from '../Components/DataList'

//Styles
import styles from './Styles/DivisionListStyles'

class DivisionListScreen extends Component {
	componentDidMount () {
		const {token, getDivisions} = this.props
		getDivisions(token)
	}


	render() {
		const {division} = this.props
		const {divisions, fetchingDivisions} = division

		const transformedDivisions = divisions.map(division => ({
			id: division.id,
			title: division.name
		}))

		return (
			<View style={styles.mainContainer}>
				<ScrollView style={styles.container}>
					{fetchingDivisions
						? <ActivityIndicator />
						: (
							<DataList data={transformedDivisions} />
						)
					}
				</ScrollView>
			</View>
		)
	}
}
const mapStateToProps = (state) => ({
	token: AuthSelectors.getToken(state),
	division: state.division
})

const mapDispatchToProps = {
	getDivisions: DivisionActions.getDivisions
}

export default connect(mapStateToProps, mapDispatchToProps) (DivisionListScreen)

