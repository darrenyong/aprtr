json.album do
  json.extract! @album, :id, :title, :description, :user_id
end

json.user do
  json.extract! @user, :id, :username, :email
end

@photos.each do |photo|
  json.photos do
    json.set! photo.id do
      json.extract! photo, :id, :title, :description, :uploader_id, :width, :height
      json.src url_for(photo.picture)
    end
  end
end