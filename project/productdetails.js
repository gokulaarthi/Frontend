const productData = [
    {
      name: "Stylish Men Vest",
      offerprice: 499,
      ratings: "4.3",
      id: "1",
      title: "shirt",
      delivery: 45,
      category: 'men',
      orginalPrize: 999,
      image: "https://images.meesho.com/images/products/201647353/l0zen_400.webp"
    },
    {
      name: "Comfy mens shirt",
      offerprice: 399,
      ratings: "4.3",
      id: "2",
      title: "shirt",
      delivery: 40,
      category: 'men',
      orginalPrize: 699,
      image: "https://images.meesho.com/images/products/280402414/1qvxg_400.webp"
    },
    {
      name: "Fancy style mens shirt",
      offerprice: 499,
      ratings: "4.5",
      category: 'men',
      id: "3",
      title: "shirt",
      delivery: 40,
      orginalPrize: 799,
      image: "https://images.meesho.com/images/products/315764046/ltnd9_400.webp"
    },
    {
      name: "Comfy mens tshirt",
      offerprice: 449,
      ratings: "4.6",
      id: "4",
      category: 'men',
      title: "shirt",
      delivery: 30,
      orginalPrize: 899,
      image: "https://images.meesho.com/images/products/334048188/gpa4f_400.webp"
    },
    {
      name: "Fancy style mens tracks",
      offerprice: 599,
      ratings: "4.2",
      id: "5",
      title: "tracks",
      category: 'men',
      delivery: 30,
      orginalPrize: 899,
      image: "https://images.meesho.com/images/products/326482637/rqetb_400.webp"
    },
    {
      name: "pretty mordren style mens tracks",
      offerprice: 699,
      ratings: "4.2",
      id: "6",
      category: 'men',
      title: "tracks",
      delivery: 35,
      orginalPrize: 1499,
      image: "https://images.meesho.com/images/products/316965658/ru93e_400.webp"
    },
    {
      name: "SIC mordren style mens tracks",
      offerprice: 399,
      ratings: "4.2",
      id: "7",
      title: "tracks",
      category: 'men',
      delivery: 39,
      orginalPrize: 1499,
      image: "https://images.meesho.com/images/products/305243670/8egnt_400.webp"
    },
    {
      name: "Rapid cashual shoes",
      offerprice: 699,
      ratings: "4.2",
      id: "8",
      title: "shoes",
      category: 'men',
      orginalPrize: 1499,
      delivery: 45,
      image: "https://images.meesho.com/images/products/59217470/tehar_400.webp"
    },
    {
      name: "mardren fabolus cashual shoes",
      offerprice: 559,
      ratings: "4.5",
      id: "9",
      title: "shoes",
      category: 'men',
      orginalPrize: 1499,
      delivery: 46,
      image: "https://images.meesho.com/images/products/299284549/oqm1d_400.webp"
    },
    {
      name: "mens vests",
      offerprice: 559,
      ratings: "4.4",
      id: "10",
      title: "inners",
      category: 'men',
      orginalPrize: 1499,
      delivery: 35,
      image: "https://images.meesho.com/images/products/233647115/oaks4_400.webp"
    },
    {
      name: "Womens cotton printed tops",
      offerprice: 559,
      ratings: "4.2",
      id: "11",
      title: "tops",
      delivery:30,
      category: 'womens',
      orginalPrize: 1499,
      image: "https://images.meesho.com/images/products/208914981/oc2vk_400.webp"
    },
    {
      name: "Womens fashion color tops",
      offerprice: 659,
      ratings: "4.3",
      id: "12",
      title: "tops",
      delivery: 39,
      orginalPrize: 1699,
      category: 'womens',
      image: "https://images.meesho.com/images/products/296152477/nmmlz_400.webp"
    },
    {
      name: "Urbane printed color tops",
      offerprice: 759,
      ratings: "4.5",
      id: "13",
      title: "tops",
      category: 'womens',
      delivery: 30,
      orginalPrize: 1659,
      image: "https://images.meesho.com/images/products/174880498/nfcab_400.webp"
    },
    {
      name: "pretty printed tops",
      offerprice: 659,
      ratings: "4.3",
      id: "14",
      title: "tops",
      category: 'womens',
      delivery: 90,
      orginalPrize: 1759,
      image: "https://images.meesho.com/images/products/352417681/ptzna_400.webp"
    },
    {
      name: "pretty blue jeans",
      offerprice: 859,
      ratings: "4.4",
      category: 'womens',
      id: "15",
      title: "jeans",
      delivery: 27,
      orginalPrize: 1759,
      image: "https://images.meesho.com/images/products/352417681/ptzna_400.webp"
    },
    {
      name: "pretty fabulous white jeans",
      offerprice: 959,
      ratings: "4.6",
      id: "16",
      title: "jeans",
      delivery: 30,
      orginalPrize: 1859,
      category: 'womens',
      image: "https://images.meesho.com/images/products/312137966/qjquj_400.webp"
    },
    {
      name: "pretty fabulous blue jeans",
      offerprice: 949,
      ratings: "4.3",
      id: "17",
      title: "jeans",
      category: 'womens',
      delivery: 85,
      orginalPrize: 1859,
      image: "https://images.meesho.com/images/products/199502409/7wsd7_400.webp"
    },
    {
      name: "mordren style color saree",
      offerprice: 949,
      ratings: "4.3",
      id: "18",
      title: "saree",
      category: 'womens',
      delivery: 70,
      orginalPrize: 1859,
      image: "https://images.meesho.com/images/products/292543036/ffxww_400.webp"
    },
    {
      name: "mordren silk color saree",
      offerprice: 949,
      ratings: "4.2",
      id: "19",
      category: 'womens',
      title: "saree",
      delivery:35,
      orginalPrize: 1759,
      image: "https://images.meesho.com/images/products/136784610/ebowl_400.webp"
    },
    {
      name: "Abhisharikas silk color saree",
      offerprice: 749,
      ratings: "4.2",
      id: "20",
      title: "saree",
      category: 'womens',
      orginalPrize: 1759,
      delivery: 20,
      image: "https://images.meesho.com/images/products/199387165/rrdk6_400.webp"
    },
    {
      name: "Abhisharikas kids dress",
      offerprice: 749,
      ratings: "4.2",
      id: "21",
      title: "kid",
      category: 'kids',
      delivery: 20,
      orginalPrize: 1759,
      image: "https://images.meesho.com/images/products/70922950/led96_400.webp"
    },
    {
      name: "trinkle kids fashion dress",
      offerprice: 649,
      ratings: "4.2",
      id: "22",
      title: "kids",
      delivery: 20,
      orginalPrize: 1759,
      category: 'kids',
      image: "https://images.meesho.com/images/products/328069279/fffss_400.webp"
    },
    {
      name: "Stylish Men Vest",
      offerprice: 499,
      ratings: "4.3",
      id: "23",
      delivery: 20,
      title: "tracks",
      offers: "25%",
      category: "offer",
      orginalPrize: 999,
      image: "https://images.meesho.com/images/products/201647353/l0zen_400.webp"
    },
    {
        name: "comfort men's tracks",
        offerprice: 499,
        ratings: "4.5",
        id: "24",
        title: "tracks",
        delivery: 35,
        category: "offer",
        offers: "25%",
        orginalPrize: 999,
        image: "https://images.meesho.com/images/products/262602890/jnh1c_400.webp"
    },
    {
      name: "style comfort men's tracks",
      offerprice: 599,
      ratings: "4.6",
      id: "25",
      title: "tracks",
      category: "offer",
      delivery: 60,
      deliveryfee: 40,
      offers: "25%",
      orginalPrize: 999,
      image: "https://images.meesho.com/images/products/57617963/ugowu_400.webp"
    },
    {
      name: "gorgeous comfort men's tracks",
      offerprice: 399,
      ratings: "4.2",
      id: "26",
      title: "tracks",
      category: "offer",
      delivery: 50,
      offers: "25%",
      orginalPrize: 799,
      image: "https://images.meesho.com/images/products/167825068/8c3pv_400.webp"
    },
    {
      name: "gorgeous comfort women's tracks",
      offerprice: 399,
      ratings: "4.1",
      id: "27",
      title: "tracks",
      category: "offer",
      delivery: 49,
      offers: "25%",
      orginalPrize: 799,
      image: "https://images.meesho.com/images/products/270601268/zympu_400.webp"
    },
    {
      name: "comfort women's tracks",
      offerprice: 399,
      ratings: "4.0",
      id: "28",
      title: "shirt",
      category: "offer",
      delivery: 59,
      offers: "25%",
      orginalPrize: 899,
      image: "https://images.meesho.com/images/products/348713732/k30pn_400.webp"
    },
    {
      name: "style blue women's tracks",
      offerprice: 399,
      ratings: "3.9",
      id: "29",
      title: "tracks",
      delivery: 40,
      category: "offer",
      offers: "25%",
      orginalPrize: 899,
      image: "https://images.meesho.com/images/products/252454579/lnihh_400.webp"
    },
    {
      name: "style black & white  women's tracks",
      offerprice: 399,
      ratings: "3.9",
      id: "30",
      title: "tracks",
      category: "offer",
      delivery: 55,
      offers: "25%",
      orginalPrize: 699,
      image: "https://images.meesho.com/images/products/123653172/gkpca_400.webp"
    },
    {
      name: "kids soft toys",
      offerprice: 299,
      ratings: "3.9",
      id: "31",
      title: "toys",
      category: "kids",
      delivery: 65,
      offers: "25%",
      orginalPrize: 699,
      image: "https://images.meesho.com/images/products/38112049/9idgz_400.webp"
    },
    {
      name: "kids soft teddy bear toys",
      offerprice: 299,
      ratings: "3.9",
      id: "32",
      title: "toys",
      delivery: 55,
      offers: "25%",
      category: "kids",
      orginalPrize: 599,
      image: "https://images.meesho.com/images/products/32148255/lbieu_400.webp"
    },
    {
      name: "kids dresses",
      offerprice: 299,
      ratings: "4.3",
      id: "33",
      title: "toys",
      delivery: 40,
      offers: "25%",
      category: "latest",
      orginalPrize: 599,
      image: "https://images.meesho.com/images/products/337688256/yqm8r_400.webp"
    },
    {
      name: "kids white dresses",
      offerprice: 399,
      ratings: "4.3",
      id: "34",
      title: "toys",
      delivery: 20,
      offers: "25%",
      category: "latest",
      orginalPrize: 599,
      image: "https://images.meesho.com/images/products/158486294/wcgaq_400.webp"
    },
    {
      name: "kids white & red cotton dresses",
      offerprice: 399,
      ratings: "4.3",
      id: "35",
      title: "toys",
      delivery: 20,
      offers: "25%",
      category: "kids",
      orginalPrize: 599,
      image: "https://images.meesho.com/images/products/283247555/s2its_400.webp"
    },
    {
      name: "kids fancy cotton dresses",
      offerprice: 399,
      ratings: "4.3",
      id: "36",
      title: "toys",
      delivery: 40,
      offers: "25%",
      category: "latest",
      orginalPrize: 599,
      image: "https://images.meesho.com/images/products/64514206/duzeo_400.webp"
    },
    {
      name: "classy men's watches",
      offerprice: 499,
      ratings: "4.3",
      id: "37",
      title: "toys",
      delivery: 40,
      offers: "25%",
      category: "latest",
      orginalPrize: 699,
      image: "https://images.meesho.com/images/products/6547153/ze2ji_400.webp"
    },
    {
      name: "style men's watches",
      offerprice: 499,
      ratings: "4.3",
      id: "38",
      title: "toys",
      delivery: 40,
      offers: "25%",
      category: "latest",
      orginalPrize: 699,
      image: "https://images.meesho.com/images/products/31757741/q9xri_400.webp"
    },
    {
      name: "style men's belts",
      offerprice: 499,
      ratings: "4.3",
      id: "39",
      title: "toys",
      delivery: 40,
      offers: "25%",
      category: "latest",
      orginalPrize: 699,
      image: "https://images.meesho.com/images/products/136453832/fgv2j_400.webp"
    }
    
  ];
  
  export default productData;