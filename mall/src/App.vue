<template>
    <div id="app">
		<transition enter-active-class="animate__animated animate__fadeIn" mode="out-in">
          <router-view/>
      </transition>
      <Tabbar v-if="$route.meta.showTab"></Tabbar>
    </div>
</template>

<script>
	import Tabbar from '@/components/tabbar'
	export default {
	  name: 'App',
	
	  data() {
	    return {};
	  },
	
	  mounted() {
	  },
	
	  methods: {

	  },
	  components:{
	      Tabbar
	  }
	
	};
	
</script>

<style>

</style>
