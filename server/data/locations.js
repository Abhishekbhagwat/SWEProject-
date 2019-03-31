const names = ['Food Court 1', 'Food Court 2', 'Food Court 9', 'Food Court 11',
               'Food Court 13', 'Food Court 14', 'Food Court 16', 'Ananda Kitchen',
               'Foodgle Food Court', 'North Hill Food Court', 'Pioneer Food Court',
               'Quad Cafe'];
const coords = [[1.34663, 103.68602], [1.34836, 103.68547], [1.35228, 103.68536],
                [1.35501, 103.68647], [1.35192, 103.68097], [1.35280, 103.68213],
                [1.35027, 103.68105], [1.35406, 103.68805], [1.35482, 103.68467],
                [1.35440, 103.68816], [1.34612, 103.68843], [1.34503, 103.68001]];
const imgs = ['https://www.ntu.edu.sg/has/FnB/SiteAssets/Pages/HallCanteens/FC1_280x180).jpg',
              'https://www.ntu.edu.sg/has/FnB/PublishingImages/Canteen%202_280%20x%20180.png',
              'https://www.ntu.edu.sg/has/FnB/PublishingImages/Canteen%209_280x180.png',
              'https://www.ntu.edu.sg/has/FnB/PublishingImages/Canteen_11_280x180.png',
              'https://www.ntu.edu.sg/has/FnB/PublishingImages/Canteen_13-2_280x180.png',
              'https://www.ntu.edu.sg/has/FnB/PublishingImages/Canteen_14_1_280x180.png',
              'https://www.ntu.edu.sg/has/FnB/PublishingImages/Food%20Court%2016.png',
              'https://www.ntu.edu.sg/has/FnB/SiteAssets/Pages/HallCanteens/AnandaKitchen(280x180_UT).jpg',
              'https://www.ntu.edu.sg/has/FnB/SiteAssets/Pages/HallCanteens/FoodgleFoodCourt(280x180)(UT).jpg',
              'https://www.ntu.edu.sg/has/FnB/SiteAssets/Pages/HallCanteens/NorthHIllFC_280x180.jpg',
              'https://www.ntu.edu.sg/has/FnB/PublishingImages/Pioneer_Food_Court_280x180.png',
              'https://www.ntu.edu.sg/has/FnB/SiteAssets/Pages/HallCanteens/QC(280x180_UT).jpg'];

module.exports = (Location) => {
  let locations = names.map((id, i) => {
    new Location({
      name: names[i],
      coordinates: {lat: coords[i][0], long: coords[i][1]},
      img: imgs[i]
    }).save()
  });
}
