<template>
	<view class="user-center">
    <UserBaseInfo/>
	</view>
</template>

<script>
  import UserBaseInfo from '@/components/userCenter/UserBaseInfo'
	export default {
		components: {
      UserBaseInfo,
    },
	}
</script>

<style>
  .user-center{
    flex-direction: column;
    width: 100%;
  }
</style>
