<script>
    import { onMount } from 'svelte'
    let arr = [] // 总数组
    let newNum = 0 // 总数量
    let newPirce = 0 // 总价
    onMount( async() =>{
        const res = await fetch('http://127.0.0.1:7001/list')
        let list = await res.json()
        arr = list.data.list
    } )
    
    function reduceNum(item) {
        if(item.num <= 0) {
            item.num = 0
        }else{
            item.num--
            newNum = arr.reduce((a, b) => { // 总数量
                return a + b.num
            },0)

            newPirce = arr.reduce((a, b) => { // 总数量
                return a + b.num * b.shoppirce
            },0)
        }
        arr = arr // 重新赋值
    }

    function addNum(item) {
        item.num++
        arr = arr // 重新赋值
        newNum = arr.reduce((a, b) => { // 总数量
            return a + b.num
        },0)

        newPirce = arr.reduce((a, b) => { // 总数量
            return a + b.num * b.shoppirce
        },0)
        
    }

</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
	.wrapper{
        width: 100%;
    }
    .itemShop{
        width:100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-bottom: 1px solid #000;
        margin-top:10px;
        padding-bottom: 10px;
    }
    dl dt{
        flex:2;
        display: flex;
        align-items: center;
    }
    dl dt img{
        width: 100px;
        height: 100px;
        padding: 10px;
    }
    dl dd{
        flex:8;
        line-height:40px;
        padding-left:10px;
    }
    .shopMoney{
        width: 250px;
        display: flex;
    }
    .shopMoney .red{
        flex:2;
    }
    .shopMoney .add{
        flex:2;
    }
    .shopMoney .textinput{
        flex:4;
        text-align: center;
        margin:0 10px;
    }
    .listnum{
        width: 100%;
        height:100px;
        display: flex;
        align-items: center;
        font-size:25px;
    }
    .listnum p{
        flex:1;
        text-align: center;
    }
    .allSelect{
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #ccc;
    }
    .allSelect input{
        width: 20px;
        height: 20px;
    }
    .danSelect{
        width: 20px;
        height: 20px;
    }
</style>


<div class='wrapper'>
    <p class="allSelect"><input type="radio">全选</p>
{#each arr as item}
    <dl class="itemShop">
        <dt>
            <input type="radio" class="danSelect">
            <img src={item.shopimg} alt={item.shopname}>
        </dt>
        <dd>
            <h3>{item.shopname}</h3>
            <p>价格：<b>￥{item.shoppirce}</b></p>
            <div class="shopMoney">
                <button class="red" on:click={() => reduceNum(item)}>-</button>
                <b class='textinput'>{item.num}</b>
                <button class="add" on:click={() => addNum(item)}>+</button>
            </div>
        </dd>
    </dl>
{/each}
    <div class="listnum">
        <p>总数：<b>{newNum}</b></p>       
        <p>总价：<b>{newPirce.toFixed(2)}</b></p>       
    </div>
</div>