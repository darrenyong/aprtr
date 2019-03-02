json.extract! @photo, :id, :title, :description, :uploader_id
json.photo_url url_for(@photo.picture)