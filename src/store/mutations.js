const mutations ={
	add(state,audio){
		state.dom=audio
	},
	toggleMusic(state){
		state.isPlaying=!state.isPlaying
	},
	SHOW_NAV(state){
		state.bNav=true
	},
	SHOW_FOOT(state){
		state.bFoot=true
	},
	HIDE_NAV(state){
		state.bNav=false
	},
	HIDE_FOOT(state){
		state.bFoot=false
	}
};
export default mutations;