class ShortenedUrl < ApplicationRecord
  validates :long_url, :short_url, :user_id, presence: true

  belongs_to :long_url,
    primary_key: :id,
    foreign_key: :long_url,
    class_name: :LongUrl
end
