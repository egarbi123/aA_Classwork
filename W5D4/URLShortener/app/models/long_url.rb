class LongUrl < ApplicationRecord
  validates :long_url, :user_id, presence: true

  has_one :short_url,
    primary_key: :id,
    foriegn_key: :short_url,
    class_name: :ShortenedUrl
end