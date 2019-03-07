@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title, :description, :user_id
  end
end