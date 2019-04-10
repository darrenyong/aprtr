json.photos do 
  @photos.each do |photo|
    json.set! photo.id do
      json.extract! photo, :id, :title, :description, :uploader_id, :width, :height
      json.src url_for(photo.picture)
    end
  end
end

json.users do 
  json.partial! "api/users/user", user: @user
end