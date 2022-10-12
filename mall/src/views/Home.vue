<template>
  <div class="home " style="margin-bottom:50px;">
		<search-bar></search-bar>
		<div>	
			<van-swipe :autoplay="3000">
			  <van-swipe-item v-for="(image, index) in homeInfo.banner" :key="index">
				<img style="height: 200px;" :src="image.url" />
			  </van-swipe-item>
			</van-swipe>
		</div>
		<van-grid column-num="6" square style="background-color:white;padding-top:10px;">
		    <van-grid-item v-for="item in homeInfo.channel" :key="item.id" :icon="item.iconUrl" :text="item.name" />
		</van-grid>

		<div style="margin-top:20px;">
            <van-cell title="团购专区" is-link  value="更多团购内容" />
            <div>
                <van-card v-for="(item,index) in homeInfo.grouponList" :key="index"
                :price="item.grouponPrice | priceFormat"
                :origin-price="item.retailPrice | priceFormat"
                :desc="item.brief"
                :title="item.name"
                :thumb="item.picUrl"
                >
                    <template #tags>
                        <van-tag plain type="danger">{{item.grouponMember}}人成团</van-tag>
                        <van-tag plain type="danger">{{item.grouponDiscount}}元再减</van-tag>
                    </template>
                </van-card>
            </div>
        </div> 
		
		<div style="margin-top:20px;">
		        <van-cell title="品牌商直供" is-link  value="更多品牌商" />
				<van-grid clickable
		                :column-num="2">
		        <van-grid-item v-for="(brand ,index) in homeInfo.brandList"
		                       :key="index"
		                       :text="brand.name">
		          <img :src="brand.picUrl"
		               style="width: 80%;" />
		          <div style="font-size:16px;"> {{ brand.name }}</div>
		        </van-grid-item>
		      </van-grid>
		</div>
		
		 <div style="margin-top:20px;">
		     <van-cell title="新品首发" isLink value="更多新品首发"></van-cell>
		     <van-row gutter>
		         <van-col span="12"
		                  v-for="(newGood ,index) in homeInfo.newGoodsList"
		                  :key="index">
		             <div style="background-color:white; text-align:center;">
		                 <router-link :to="{ path: `/items/detail/${newGood.id}`}">
		                     <img :src="newGood.picUrl"
		                          style="width:180px;height:180px;">
		                 </router-link>
		                 <p style="color: rgb(123, 116, 116);white-space: nowrap;">{{newGood.name}}</p>
		                 <p style="color:#ab956d">￥ {{newGood.retailPrice | priceFormat}}</p>
		             </div>
		         </van-col>
		     </van-row>
			</div>
		
		
		<div style="margin-top:20px;">
		     <van-cell title="人气推荐" isLink value="更多人气推荐"></van-cell>
			<van-card v-for="(item,index) in homeInfo.hotGoodsList" :key="index"
			  :price="item.retailPrice | priceFormat"
			  :desc="item.brief"
			  :title="item.name"
			  :thumb="item.picUrl"
			  :origin-price="item.counterPrice | priceFormat"
			/>
		</div>
		
		<div style="margin-top:20px;">
		        <van-cell title="专题精选" is-link  value="更多专题精选" />
				<van-grid clickable
		                :column-num="2">
		        <van-grid-item v-for="(brand ,index) in homeInfo.topicList"
		                       :key="index"
								>
		          <img :src="brand.picUrl"
		               style="width: 80%;" />
				  <div style="color: rgb(171, 149, 109);">
					  <div style="font-size:14px;" > {{ brand.title }}</div>
					  <div style="font-size:10px;text-align: center;"> {{ brand.subtitle }}</div>
				  </div>
		          
		        </van-grid-item>
		      </van-grid>
		</div>
  </div>
</template>

<script>
	import{getHome}from'@/api/api.js'
	import SearchBar from '../components/SearchBar.vue'
	
export default {
  data() {
    return {
		homeInfo:{}
      /* banner:[
        {
          "id": 1,
          "name": "合作 谁是你的菜",
          "link": "",
          "url": "http://yanxuan.nosdn.127.net/65091eebc48899298171c2eb6696fe27.jpg",
          "position": 1,
          "content": "合作 谁是你的菜",
          "enabled": true,
          "addTime": "2018-02-01 00:00:00",
          "updateTime": "2018-02-01 00:00:00",
          "deleted": false
        },
        {
          "id": 2,
          "name": "活动 美食节",
          "link": "",
          "url": "http://yanxuan.nosdn.127.net/bff2e49136fcef1fd829f5036e07f116.jpg",
          "position": 1,
          "content": "活动 美食节",
          "enabled": true,
          "addTime": "2018-02-01 00:00:00",
          "updateTime": "2018-02-01 00:00:00",
          "deleted": false
        },
        {
          "id": 3,
          "name": "活动 母亲节",
          "link": "",
          "url": "http://yanxuan.nosdn.127.net/8e50c65fda145e6dd1bf4fb7ee0fcecc.jpg",
          "position": 1,
          "content": "活动 母亲节5",
          "enabled": true,
          "addTime": "2018-02-01 00:00:00",
          "updateTime": "2018-02-01 00:00:00",
          "deleted": false
        }
      ], */
    };
  },
  created(){
/* 	  axios.get('http://localhost:3000/home/index').then(res=>{
		  console.log(res)
	  }) */
	  getHome().then(res=>{
		  console.log(res.data.data)
		  this.homeInfo = res.data.data
	  })
  },
	components:{
		SearchBar
	}
};
</script>
