json.photo do
  json.extract! @photo, :id, :title, :description, :uploader_id
  json.photo_url url_for(@photo.picture)
end

json.user do
  json.extract! @user, :id, :username, :email
end