require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  # Users
  User.destroy_all
  user1 = User.create!(username: "darrenyong", email: "darren@appacademy.io", password: "password")
  user2 = User.create!(username: "gradyzhu", email: "grady@appacademy.io", password: "password")
  user3 = User.create!(username: "deanlacap", email: "deam@appacademy.io", password: "password")
  user4 = User.create!(username: "josephpark", email: "joseph@appacademy.io", password: "password")
  user5 = User.create!(username: "brandonkwan", email: "brandon@appacademy.io", password: "password")
  user6 = User.create!(username: "katchu", email: "kathryn@appacademy.io", password: "password")
  user7 = User.create!(username: "brianchan", email: "brian@appacademy.io", password: "password")
  user8 = User.create!(username: "ashleyyip", email: "ashley@appacademy.io", password: "password")

  # Photos
  Photo.destroy_all
  # Photo Creation
    # Darren id=1
    photo1 = Photo.create!(title: "Akihabara", description: "Akihabara Shop Owner", uploader_id: user1.id)
    photo2 = Photo.create!(title: "The Shinden", description: "The Shinden is a shrine to the divine spirits", uploader_id: user1.id)
    photo3 = Photo.create!(title: "The Island", description: "A random island I found when I was wandering China", uploader_id: user1.id)
    photo4 = Photo.create!(title: "Falcon 9", description: "The SpaceX Falcon 9 launch", uploader_id: user1.id)
    photo5 = Photo.create!(title: "The Bund", description: "The Bund is a famous strip in Shanghai", uploader_id: user1.id)

    photo1.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/akihabaraShop.jpg"), filename: "akihabaraShop.jpg")
    photo2.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/shinden.jpg"), filename: "theShinden.jpg")
    photo3.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/island.jpg"), filename: "island.jpg")
    photo4.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/spaceX.jpg"), filename: "falcon9.jpg")
    photo5.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/theBund.jpg"), filename: "theBund.jpg")

    # Grady id=2
    photo6 = Photo.create!(title: "Autumn Road", description: "A windy road during autumn", uploader_id: user2.id)
    photo7 = Photo.create!(title: "Subway", description: "I took a picture in the subway", uploader_id: user2.id)
    photo8 = Photo.create!(title: "Fire Hair", description: "My friend with hair like fire", uploader_id: user2.id)
    photo9 = Photo.create!(title: "Horizon", description: "A picture I took of the horizon. I forget where it was", uploader_id: user2.id)
    photo10 = Photo.create!(title: "Lake Oberon", description: "I took a picture of myself overlooking Lake Oberon", uploader_id: user2.id)

    photo6.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/autumnRoad.jpg"), filename: "autumnRoad.jpg")
    photo7.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/subway.png"), filename: "subway.png")
    photo8.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/fireHair.jpg"), filename: "fireHair.jpg")
    photo9.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/ct6yjlzvtdg01.jpg"), filename: "horizon.jpg")
    photo10.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/lakeOberon.jpg"), filename: "lakeOberon.png")
  
    # Dean id=3
    photo11 = Photo.create!(title: "Barcelona", description: "Golden hour in Barcelona", uploader_id: user3.id)
    photo12 = Photo.create!(title: "Chicago MOMA", description: "My two friends in the Chicago MOMA", uploader_id: user3.id)
    photo13 = Photo.create!(title: "Reflection", description: "This is a picture of a lake reflecting some houses", uploader_id: user3.id)
    photo14 = Photo.create!(title: "Lombard Street", description: "One of the most famous streets in SF", uploader_id: user3.id)
    photo15 = Photo.create!(title: "New York City", description: "I took a picture of New York", uploader_id: user3.id)

    photo11.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/barcelona.jpg"), filename: "barcelona.jpg")
    photo12.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/chicagoMOMA.jpg"), filename: "chicagoMOMA.jpg")
    photo13.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/houseReflection.jpg"), filename: "houseReflection.jpg")
    photo14.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/lombardStreet.jpg"), filename: "lombardStreet.jpg")
    photo15.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/newYork.jpg"), filename: "newYork.jpg")
    
    # Joseph id=4
    photo16 = Photo.create!(title: "Bay Bridge", description: "The bay bridge through a fence", uploader_id: user4.id)
    photo17 = Photo.create!(title: "Tidal Pool", description: "I took a picture of a tidal pool in California", uploader_id: user4.id)
    photo18 = Photo.create!(title: "Chicago Skyline", description: "A picture of the Chicago Skyline", uploader_id: user4.id)
    photo19 = Photo.create!(title: "Lake", description: "I took a picture of my friend standing by a lake", uploader_id: user4.id)
    photo20 = Photo.create!(title: "Sydney, Australia", description: "I love taking pictures of city skylines", uploader_id: user4.id)

    photo16.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/bayBridge.jpg"), filename: "bayBridge.jpg")    
    photo17.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/tidalPool.jpg"), filename: "tidalPool.jpg")    
    photo18.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/chicagoSkyline.jpg"), filename: "chicagoSkyline.jpg")    
    photo19.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/mountainLake.jpg"), filename: "mountainLake.jpg")    
    photo20.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/sydneyAus.jpg"), filename: "sydneyAustralia.jpg")    
    
    # Brandon id=5
    photo21 = Photo.create!(title: "Lexus IS", description: "My friend Joe's Lexus IS", uploader_id: user5.id)
    photo22 = Photo.create!(title: "Racecar", description: "A picture of a racecar in the rain", uploader_id: user5.id)
    photo23 = Photo.create!(title: "Lighthouse", description: "", uploader_id: user5.id)
    photo24 = Photo.create!(title: "Stop once in a while", description: "I was driving during golden hour and thought this would be a nice picture", uploader_id: user5.id)

    photo21.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/joeLam.jpg"), filename: "joeIS.jpg")
    photo22.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/raceRain.jpg"), filename: "raceRain.jpg")
    photo23.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/lighthouse.jpg"), filename: "lighthouse.jpg")
    photo24.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/stopSign.jpg"), filename: "stopSign.jpg")
    
    # Kathryn id=6
    photo25 = Photo.create!(title: "Boat on a Lake", description: "A boat in the middle of a lake", uploader_id: user6.id)
    photo26 = Photo.create!(title: "Japanese Interstate", description: "An interstate in Japan", uploader_id: user6.id)
    photo27 = Photo.create!(title: "Japanese Alleyway", description: "I love the architecture in Japan", uploader_id: user6.id)
    photo28 = Photo.create!(title: "", description: "I wasn't sure what to call this one", uploader_id: user6.id)
    photo29 = Photo.create!(title: "Norway", description: "I took a picture of a rock in Norway", uploader_id: user6.id)
    
    photo25.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/boatOnLake.jpg"), filename: "lakeBoat.jpg")    
    photo26.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/japanInterstate.jpg"), filename: "japaneseInterstate.jpg")    
    photo27.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/japaneseAlley.jpg"), filename: "japaneseAlley.jpg")    
    photo28.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/mountainReflection.jpg"), filename: "mountainReflection.jpg")    
    photo29.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/rockNorway.jpg"), filename: "norwayRock.jpg")    
    
    # Brian id=7
    photo30 = Photo.create!(title: "Boston Library", description: "People in the library", uploader_id: user7.id)
    photo31 = Photo.create!(title: "Seattle 25", description: "25 pictures of Seattle stitched into 1", uploader_id: user7.id)
    photo32 = Photo.create!(title: "Forest", description: "I was able to play with my drone and grab this picture", uploader_id: user7.id)
    photo33 = Photo.create!(title: "Liberty", description: "I took a helicopter tour in New York and was able to grab this pic", uploader_id: user7.id)
    photo34 = Photo.create!(title: "Barriers", description: "A random stone barrier I found", uploader_id: user7.id)
    
    photo30.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/bostonLibrary.jpg"), filename: "bostonLibrary.jpg")    
    photo31.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/seattle25.jpg"), filename: "seattle25.jpg")    
    photo32.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/forestOverview.jpg"), filename: "forestOverview.jpg")    
    photo33.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/statueOfLiberty.jpg"), filename: "statueOfLiberty.jpg")    
    photo34.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/stoneBarrier.jpg"), filename: "stoneBarrier.jpg")    

    # Ashley id=8
    photo35 = Photo.create!(title: "Golden Gate Bridge", description: "The sunset on the Golden Gate Bridge", uploader_id: user8.id)
    photo36 = Photo.create!(title: "The Great Wall", description: "I was walking the Great Wall when it was cloudy", uploader_id: user8.id)
    photo37 = Photo.create!(title: "New York City", description: "A plane departing New York City", uploader_id: user8.id)
    photo38 = Photo.create!(title: "Waterfall", description: "I took a picture of a waterfall in Japan", uploader_id: user8.id)
    photo39 = Photo.create!(title: "River in Venice", description: "", uploader_id: user8.id)

    photo35.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/goldenGate.jpg"), filename: "goldenGateSunset.jpg") 
    photo36.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/greatWall.jpg"), filename: "greatWall.jpg") 
    photo37.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/planeNYC.jpg"), filename: "planeNYC.jpg") 
    photo38.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/japaneseWaterfall.jpg"), filename: "japaneseWaterfall.jpg") 
    photo39.picture.attach(io: open("https://s3-us-west-1.amazonaws.com/aprtr-seed/veniceRiver.jpg"), filename: "veniceRiver.jpg") 
end