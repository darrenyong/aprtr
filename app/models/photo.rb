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
#

class Photo < ApplicationRecord
  validates :uploader_id, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: 'User'
    
  has_one_attached :picture
end
