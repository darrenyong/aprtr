class DropPhotosAlbums < ActiveRecord::Migration[5.2]
  def change
    drop_table :photos_albums
  end
end
