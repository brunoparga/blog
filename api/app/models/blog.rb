class Blog < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged

  validates :title, presence: true, length: { minimum: 4 }
  validates :content, presence: true, length: { minimum: 8 }
end
