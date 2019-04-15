# == Schema Information
#
# Table name: photos
#
#  id          :bigint(8)        not null, primary key
#  title       :string
#  description :text
#  uploader_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  width       :integer          not null
#  height      :integer          not null
#

class Photo < ApplicationRecord
  validates :uploader_id, presence: true
  # validate :ensure_photo

  belongs_to :user,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: 'User'
    
  has_one_attached :picture

  has_many :album_photos,
    primary_key: :id,
    foreign_key: :photo_id,
    class_name: 'AlbumPhoto'

  has_many :albums,
    through: :album_photos,
    source: :album

  # def ensure_photo
  #   unless self.photo.attached?
  #     errors[:photo] << "Photo must be attached!"
  #   end
  # end

end
