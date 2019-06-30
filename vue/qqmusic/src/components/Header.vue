<template>
  <div class="header">
    <div class="header-text">音乐馆</div>
    <div class="header-search">
      <img src="../assets/search.png">
      <input type="text" placeholder="搜索">
    </div>
    <div class="header-icon"><img src="../assets/music.png"></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .header{
    height:2rem;
    text-align: center;
    display: flex;
    align-items: center;
    vertical-align:middle;
  }
  .header-text{
    float: left;
    width: 24%;
    height: 100%;
    line-height: 2rem;
    font-weight: 700;
    font-size: 1.4rem;
  }
  .header-search{
    position: relative;
    flex:1;
    width: 100%;
    height: 100%;
    margin-left: .8rem;
    margin-right: .8rem;
    text-align: center;
  }
  .header-search img{
    text-align: center;
    position: absolute;
    margin-left: 32%;
    margin-top: 0.4rem;
    height: 60%;
    width: 1.2rem;
  }
  .header-search input{
    width: 100%;
    height: 80%;
    text-align: center;
    margin-top: .1rem;
    border-radius: .8rem;
    border: 1px solid #eeeeee;
    background: #fff;
  }
  .header-icon{
    float: right;
    width: 15%;
    height: 100%;
    align-items: center;
    vertical-align:middle;
  }
  .header-icon img{
    text-align: center;
    width: 1.8rem;
    height: 100%;
  }
</style>
