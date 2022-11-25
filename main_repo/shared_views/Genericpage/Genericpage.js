


export default {
  name: 'Genericpage',
  mixins: [],
  components: {
		
	},
  
  data: function () {
		return { 
		
		
		
		
		
		

		};
	},
	computed: {
		
		
		
		//contents: function() {
		//	return this.$store.getters['viewsconfigs_store/actual_view_contents'];
		//},
		//force_remote_reload: function() {
		//	return this.$store.getters['viewsconfigs_store/actual_view_contents'].force_remote_reload;
		//},
		//path_config: function(){
		//	return this.$store.state.main_store.path_config;
		//},
//
		//back_button: function() {
		//	return this.contents ? this.contents.back_button : false;
		//},
		
		
		
	  	
		
		
		
		
	},
	methods: {
		openModal: function(modal_id) {
			//visoDebug(modal_id, (new Error));
			this.$store.commit('viewsconfigs_store/SET_VIEW_ELEMENT',
				{
					'path_config':this.path_config,
					'key':'dialogs',
					'key_sub':modal_id,
					'values':{
						'active':true,
						
					}
				},
				{root:true}
			);
			
		}
		//showDialog: function() {
		//	this.$store.commit('viewsconfigs_store/SET_VIEW_ELEMENT',
		//		{
		//			'path_config':this.path_config,
		//			'key':'dialogs',
		//			'key_sub':'buyModal',
		//			'values':{
		//				'active':true,
		//				
		//			}
		//		},
		//		{root:true}
		//	);
		//}
		

		

		
		

		
	},
	watch: {
		force_remote_reload: function(val, oldVal) {
			if(val) {
				//this.$store.dispatch('viewsconfigs_store/reloadViewContents',{},{root:true});
			}
		}
	}
	

}

