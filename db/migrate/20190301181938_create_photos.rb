class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :title
      t.text :description
      t.integer :uploader_id, null: false

      t.timestamps
    end
    add_index :photos, :uploader_id
  end
end
