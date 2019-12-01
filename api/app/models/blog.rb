# frozen_string_literal: true

class Blog < ApplicationRecord # rubocop:todo Style/Documentation
  extend FriendlyId
  friendly_id :title, use: :slugged

  validates :title, presence: true, length: { minimum: 4 }
  validates :content, presence: true, length: { minimum: 8 }

  def to_s
    "#{title} - #{content}"
  end
end
