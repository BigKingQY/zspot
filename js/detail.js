window.onload = function () {

		// 获取页面元素
	const productDetails = document.getElementById('detail');
	// const categoryH1 = document.getElementById('category');

	// 从 URL 参数中获取商品 ID 和分类
	const searchParams = new URLSearchParams(location.search);
	const id = searchParams.get('id');
	// const category = searchParams.get('category');

	// 获取商品信息
	const product = products[id]

	// 更新页面标题和分类
	document.title = `${product.name}`;
	// categoryH1.textContent = category;

	// 创建商品详情元素
	const productDiv = createProductElement(product);

	// 添加商品详情元素到页面
	productDetails.appendChild(productDiv);

}

// 获取商品信息
function getProductById(id) {
  const product = products.find(product => product.id === id);
  if (!product) {
    throw new Error(`Product with ID "${id}" not found.`);
  }
  return product;
}

// 创建商品详情元素
function createProductElement(product) {
  const productDiv = document.createElement('div');
  productDiv.className = 'product';

  const detail = document.createElement('h2');
  detail.textContent = '商品详情';
  productDiv.appendChild(detail);

  const name = document.createElement('p');
  name.textContent = `名称：${product.name}`;
  productDiv.appendChild(name);

  const material = document.createElement('p');
  material.textContent = `材质：${product.material}`;
  productDiv.appendChild(material);

  const size = document.createElement('p');
  size.textContent = `尺寸：${product.size}`;
  productDiv.appendChild(size);

  const price = document.createElement('p');
  price.textContent = `价格：${product.price}`;
  productDiv.appendChild(price);

  const description = document.createElement('p');
  description.textContent = product.description;
  productDiv.appendChild(description);

  const picturesDiv = document.createElement('div');
  picturesDiv.className = 'product-pictures';
  productDiv.appendChild(picturesDiv);

  product.pictures.forEach(pictureUrl => {
    const img = document.createElement('img');
    img.src = pictureUrl;
    picturesDiv.appendChild(img);
    img.style.maxWidth = '25%';
    img.addEventListener('click', function() {

      //create a new image element to display the enlarged image
      const enlargedImg = document.createElement('img');
      enlargedImg.src = pictureUrl;
      enlargedImg.style.maxWidth = '90%'; // set the maximum width of the image
      enlargedImg.style.maxHeight = '50%';
      // create a new div to display the enlarged image
      const enlargedImgDiv = document.createElement('div');
      enlargedImgDiv.style.display = 'flex';
      enlargedImgDiv.style.justifyContent = 'center';
      enlargedImgDiv.style.alignItems = 'center';
      enlargedImgDiv.style.position = 'fixed';
      enlargedImgDiv.style.top = '0';
      enlargedImgDiv.style.left = '0';
      enlargedImgDiv.style.width = '100%';
      enlargedImgDiv.style.height = '100%';
      enlargedImgDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      enlargedImgDiv.appendChild(enlargedImg);

      // add the enlarged image div to the document
      document.body.appendChild(enlargedImgDiv);

      // add an event listener to the enlarged image div to close it when clicked
      enlargedImgDiv.addEventListener('click', function() {
        document.body.removeChild(enlargedImgDiv);
      });
  });
  });

  return productDiv;
}