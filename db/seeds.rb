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

  # Photos
  Photo.destroy_all
  # Photo Creation
  photo1 = Photo.create!(title: "test1", description: "test1", uploader_id: user1.id)
  photo2 = Photo.create!(title: "test2", description: "test2", uploader_id: user1.id)
  photo3 = Photo.create!(title: "test3", description: "test3", uploader_id: user2.id)
  photo4 = Photo.create!(title: "test4", description: "test4", uploader_id: user3.id)

  # Photo Attaching
  photo1.picture.attach(io: File.open("./app/assets/images/test1.jpg"), filename: "test1.jpg")
  photo2.picture.attach(io: File.open("./app/assets/images/test2.jpg"), filename: "test2.jpg")
  photo3.picture.attach(io: File.open("./app/assets/images/test3.jpg"), filename: "test3.jpg")
  photo4.picture.attach(io: File.open("./app/assets/images/test4.jpg"), filename: "test4.jpg")

end