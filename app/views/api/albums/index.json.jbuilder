json.albums do
  @albums.each do |album|
    json.set! album.id do
      json.extract! album, :id, :title, :description, :user_id
    end
  end
end

json.users do
  json.partial! "api/users/user", user: @user
end
