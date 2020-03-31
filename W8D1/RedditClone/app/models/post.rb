class Post < ApplicationRecord
    validates :title, presence: true
    validates :sub_id, presence: true
    validates :author_id, presence: true
    
    belongs_to :sub,
        foreign_key: :sub_id,
        class_name: :Sub
end
