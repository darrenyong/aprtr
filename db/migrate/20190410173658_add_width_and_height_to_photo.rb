class AddWidthAndHeightToPhoto < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :width, :integer, null: false
    add_column :photos, :height, :integer, null: false
  end
end
