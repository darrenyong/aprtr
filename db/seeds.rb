# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  User.destroy_all
  user1 = User.create!(username: "darrenyong", email: "darren@appacademy.io", password: "password")

  Photo.destroy_all
  photo1 = Photo.create!(title: "test1", description: "test1", uploader_id: user1.id)
  photo1.picture.attach(io: File.open("./app/assets/images/test_picture.png"), filename: "test.png")
end