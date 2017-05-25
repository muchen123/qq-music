const getters ={
	getD(state){
		return state.dom
	},
	isPlaying(state){
		return state.isPlaying
	},
	getNav(state){
		return state.bNav
	},
	getFoot(state){
		return state.bFoot
	}

};
export default getters;