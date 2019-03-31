const names = ['American', 'Chinese', 'Indian', 'Indonesian', 'Italian',
               'Japanese', 'Korean', 'Malay', 'Middle Eastern', 'Singaporean',
               'Thai', 'Vietnamese', 'Western', 'Other'];
const imgs = ["https://stmed.net/sites/default/files/styles/1920x1080/public/burger-wallpapers-28218-8203636.jpg",
              "https://cdn.foodism.co.uk/featured_image/5a86a26ef1363.jpeg",
              "https://www.sheknows.com/wp-content/uploads/2018/08/ti8wzfbbvdspxo8dg1ci.jpeg",
              "https://media.concreteplayground.com/content/uploads/2018/07/shangri-la-a-taste-of-indonesia-3-sourced-1920x1080.jpg",
              "http://www.wallpapermaiden.com/image/2018/08/11/italian-pizza-vegetables-fast-food-ingredients-22830-.jpeg",
              "http://thumbs.xdesktopwallpapers.com/wp-content/uploads/2012/07/Sushi%20-%20A%20Japanese%20Food.jpg",
              "https://tallypress.com/wp-content/uploads/2017/12/top-10-korean-bbq-restaurants-in-singapore.jpg",
              "https://media.concreteplayground.com/content/uploads/2017/05/malaysian-food-festival-shangri-la-1920x1080.jpg",
              "https://i1.wp.com/www.hungrytravelduo.com/wp-content/uploads/2018/02/20180204141553_IMG_1317-01.jpeg?w=1920",
              "https://www.8days.sg/image/10860042/16x9/1920/1080/efac137eeb82d57f7eed8a4fa160c5b1/Bf/a16.jpg",
              "https://media.architecturaldigest.in/wp-content/uploads/2017/09/Thai-Feast-NARA-THAI.jpg",
              "https://lonelyplanetstatic.imgix.net/op-video-sync/images/production/p-5379327500001-brightcove-did-you-know-pho-vietnams-favourite-street-food-20170411-061807.jpg",
              "https://images.wallpaperscraft.com/image/steak_vegetables_rolls_dinner_delicious_71438_1920x1080.jpg",
              "https://www.cbc.ca/natureofthings/content/images/episodes/foodforthought_1920.jpg"];

module.exports = (Cuisine) => {
  let cuisines = names.map((id, i) => {
    new Cuisine({
      name: names[i],
      img: imgs[i]
    }).save()
  });
}
