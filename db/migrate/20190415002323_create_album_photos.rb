class CreateAlbumPhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :album_photos do |t|

      t.timestamps
    end
  end
end
