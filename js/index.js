
window.onload = function () {

	// 将每个紫砂壶商品显示在页面上
	var productList = document.getElementById('product-list');

		// 检测用户代理字符串
	const userAgent = navigator.userAgent;
	const mobileKeywords = ['Mobile', 'iPhone', 'Android', 'Windows Phone', 'BlackBerry'];
	const isMobile = mobileKeywords.some(keyword => userAgent.includes(keyword));

	// 根据结果执行不同的代码
	if (isMobile) {
	  productList.className = "product-list-mobile"
	} else {
	  productList.className = "product-list-pc"
	}

	console.log(isMobile)

	for (var i = 0; i < products.length; i++) 
	{
		var product = products[i];

		// 创建一个新的<div>元素，用于显示该紫砂壶商品的信息
		var productDiv = document.createElement('div');

		var img = document.createElement("img")
		var name = document.createElement("h3")
		var material = document.createElement("p")
		var size = document.createElement("p")
		// var price = document.createElement("p")
		var button = document.createElement("button")

		img.src = product.img
		if (isMobile)
		{
			img.style.height = "100px"
		} else {
			img.style.height = "200px"
		}

		name.innerHTML = product.name
		material.innerHTML = product.material
		size.innerHTML = product.size
		// price.innerHTML = product.price
		button.innerHTML = "查看详情"
		button.tag = i
		button.addEventListener('click', function() {
			window.location.href = "detail.html?id=" + this.tag
		})

		
		productDiv.appendChild(img)
		productDiv.appendChild(name)
		productDiv.appendChild(material)
		productDiv.appendChild(size)
		// productDiv.appendChild(price)
		productDiv.appendChild(button)
		productDiv.className = "product"
	
		productList.appendChild(productDiv)


		// productDiv.innerHTML = '<h2>' + product.name + '</h2><p>' + product.description + '</p><p>价格：' + product.price + '元</p>';

		// // 将<div>元素添加到页面中
		// productList.appendChild(productDiv);
	}
}


