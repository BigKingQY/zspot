// 创建一个新的XMLHttpRequest对象
// var xhr = new XMLHttpRequest();

// // 设置请求的类型、URL以及是否异步处理请求
// xhr.open('GET', 'products.json', true);

// // 定义当请求完成后执行的回调函数
// xhr.onload = function() {
// 	// 请求成功完成
// 	if (xhr.status === 200) {
// 		// 将响应文本解析为JSON格式
// 		var products = JSON.parse(xhr.responseText);

// 		// 将每个紫砂壶商品显示在页面上
// 		var productList = document.getElementById('product-list');
// 		for (var i = 0; i < products.length; i++) {
// 			var product = products[i];

// 			// 创建一个新的<div>元素，用于显示该紫砂壶商品的信息
// 			var productDiv = document.createElement('div');
// 			productDiv.innerHTML = '<h2>' + product.name + '</h2><p>' + product.description + '</p><p>价格：' + product.price + '元</p>';

// 			// 将<div>元素添加到页面中
// 			productList.appendChild(productDiv);
// 		}
// 	} else {
// 		// 请求失败，输出错误消息
// 		console.log('请求失败：' + xhr.status);
// 	}
// };

// // 发送HTTP请求
// xhr.send();



// window.onload = function (){

//     fetch('product.json')
//         .then(response => response.json())
//         .then(data => {
//           const parsedData = JSON.parse(data);
//           console.log(parsedData);
//         })
//         .catch(error => console.error(error));

// }


// let products = [

// 	{
// 		img: "https://picsum.photos/id/1000/400/300",
// 		pictures: [
// 			"https://picsum.photos/id/1000/400/300",
// 			"https://picsum.photos/id/1000/400/300",
// 			"https://picsum.photos/id/1000/400/300"
// 		],
// 		name: "阳泉紫砂壶",
// 		material: "紫砂泥",
// 		size: "12cm x 12cm x 8cm",
// 		price: "￥99.99",
// 		description: "这是一件精美的阳泉紫砂壶，手工制作，外观精致，内部光滑。"
// 	},
// 	{
// 		img: "https://picsum.photos/id/1000/400/300",
// 		pictures: [
// 			"https://picsum.photos/id/1000/400/300",
// 			"https://picsum.photos/id/1000/400/300",
// 			"https://picsum.photos/id/1000/400/300"
// 		],
// 		name: "阳泉紫砂壶",
// 		material: "紫砂泥",
// 		size: "12cm x 12cm x 8cm",
// 		price: "￥99.99",
// 		description: "这是一件精美的阳泉紫砂壶，手工制作，外观精致，内部光滑。"
// 	},
// 	{
// 		img: "https://picsum.photos/id/1000/400/300",
// 		pictures: [
// 			"https://picsum.photos/id/1000/400/300",
// 			"https://picsum.photos/id/1000/400/300",
// 			"https://picsum.photos/id/1000/400/300"
// 		],
// 		name: "阳泉紫砂壶",
// 		material: "紫砂泥",
// 		size: "12cm x 12cm x 8cm",
// 		price: "￥99.99",
// 		description: "这是一件精美的阳泉紫砂壶，手工制作，外观精致，内部光滑。"
// 	},
// ]



window.onload = function () {

	// 将每个紫砂壶商品显示在页面上
	var productList = document.getElementById('product-list');

	for (var i = 0; i < products.length; i++) 
	{
		var product = products[i];

		// 创建一个新的<div>元素，用于显示该紫砂壶商品的信息
		var productDiv = document.createElement('div');

		var img = document.createElement("img")
		var name = document.createElement("h3")
		var material = document.createElement("p")
		var size = document.createElement("p")
		var price = document.createElement("p")
		var button = document.createElement("button")

		img.src = product.img
		name.innerHTML = product.name
		material.innerHTML = product.material
		size.innerHTML = product.size
		price.innerHTML = product.price
		button.innerHTML = "查看详情"
		button.tag = i
		button.addEventListener('click', function() {
			window.location.href = "detail.html?id=" + this.tag
		})

		
		productDiv.appendChild(img)
		productDiv.appendChild(name)
		productDiv.appendChild(material)
		productDiv.appendChild(size)
		productDiv.appendChild(price)
		productDiv.appendChild(button)
		productDiv.className = "product"
	
		productList.appendChild(productDiv)


		// productDiv.innerHTML = '<h2>' + product.name + '</h2><p>' + product.description + '</p><p>价格：' + product.price + '元</p>';

		// // 将<div>元素添加到页面中
		// productList.appendChild(productDiv);
	}
}


