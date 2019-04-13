class AddTimestampToAlbumPhotos < ActiveRecord::Migration[5.2]
  def change
    add_column :album_photos, :created_at, :datetime, null: false
    add_column :album_photos, :updated_at, :datetime, null: false
  end
end
